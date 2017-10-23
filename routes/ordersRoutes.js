const queries = require('../queries');

module.exports = (app) => {
    app.post('/api/check_user', async (req, res) => {
        console.log(req.body);
        const fullName = await queries.getFullName(req.body.first_name, req.body.last_name);
        (fullName.length > 0) ? res.send(fullName) : res.send("N");
    });

    app.post('/api/new_order', (req, res) => {
        let order = req.body;
        queries.sendNewOrder(order);
        res.end();
    });
};