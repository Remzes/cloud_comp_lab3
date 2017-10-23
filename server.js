const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./routes/ordersRoutes')(app);
require('./routes/provincesRoutes')(app);
require('./routes/combosRoutes')(app);
require('./routes/mealsRoutes')(app);

app.get("/", (req, res) => {
    res.send("Here");
});

app.listen(process.env.PORT || 5001, () => {
   console.log("Litening port 5001...");
});