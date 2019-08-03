const express = require('express');
const app = express();

app.set('view engine', 'pug');

const indexRoute = require('./routes');
const workRoute = require('./routes/work');

app.use('/static', express.static('public'));
app.use(indexRoute);
app.use('/work', workRoute);

// receive all get requests that do no match any get handler in project
// create an err object and set status to 404
app.get('*', (req, res, next) => {
    const err = new Error(`The requested route: "${req.url}" does not exist`);
    err.status = 404;
    next(err);
});


// render "error.pug" and pass "err" object in locals "error" property
app.use((err, req, res, next) => {
    console.log(err.message);

    res.status(err.status);
    res.render('error', {error: err});
});

app.listen(process.env.PORT || 3000);