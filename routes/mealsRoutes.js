const format = require('util').format;
const Multer = require('multer');
const Storage = require('@google-cloud/storage');
const Datastore = require("@google-cloud/datastore");

const storage = Storage({
    projectId: "restarauntweb"
});
const datastore = Datastore({
    projectId: "restarauntweb"
});

const bucket = storage.bucket("restaraunt_web_images");
const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024
    }
});

module.exports = (app) => {
    app.post("/api/upload_meal_image", multer.single("file"), (req, res, next) => {

        if (!req.file) {
            res.status(400).send("No file uploaded");
            return;
        }

        const blob = bucket.file(req.file.originalname);
        const blobStream = blob.createWriteStream();

        blobStream.on('error', (err) => {
            next(err);
        });

        blobStream.on("finish", () => {
            const publicUrl = format(`https://storage.googleapis.com/${bucket.name}/${blob.name}`);
            res.status(200).send(publicUrl);
        });

        blobStream.end(req.file.buffer);
    });

    app.post("/api/upload_new_meta", (req, res) => {

        const property = [
            {
                name: "MEAL_IMAGE",
                value: req.body.image
            },
            {
                name: "MEAL_TITLE",
                value: req.body.title
            },
            {
                name: "MEAL_DESCRIPTION",
                value: req.body.description
            },
            {
                name: "MEAL_DATE_SENT",
                value: (new Date()).toLocaleDateString()
            }
        ];

        const key = {
            namespace: undefined,
            id: `${Math.random()}`,
            kind: 'CUSTOMER_MEALS'
        };

        datastore.save({
            key: key,
            data: property
        })

    });

    app.get('/api/meals', (req, res) => {
        const kind = "CUSTOMER_MEALS";
        const q = datastore.createQuery([kind]);

        datastore.runQuery(q, (err, entities) => {
           res.send(entities);
        });
    });
};