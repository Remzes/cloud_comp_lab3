const queries = require('../queries');

module.exports = (app) => {
  app.get("/api/combos", async (req, res) => {
      const combos = await queries.getCombos();
      res.send(combos);
  });
};