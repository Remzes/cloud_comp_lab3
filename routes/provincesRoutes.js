const queries = require('../queries');

module.exports = (app) => {
    app.get("/api/provinces", async (req, res) => {
        const provinces = await queries.getProvinces();
        res.send(provinces);
    });
};