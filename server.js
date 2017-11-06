const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const htmlRoutes = require('./app/routing/htmlRoutes.js');
const apiRoutes = require('./app/routing/apiRoutes.js');

const app = express();
// const router = express.Router();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(htmlRoutes);
app.use(apiRoutes);




// router.get("/", function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });
// });
//
//
// app.use('/test', router);
// app.use(`./app/routing/htmlRoutes.html`, function(req, res, next) {
//     console.log("yay");
//     next();
// });

app.listen(PORT, function() {
    console.log(`Listening on PORT: ${PORT}`);
});