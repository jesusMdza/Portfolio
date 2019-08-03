const express = require('express');
const router = express.Router();
const jsonData = require('../data.json');
const projects = jsonData.projects;

// get request handler for root route
router.get('/', (req, res) => {
    res.render('index');
});

// get request handler for contact route
router.get('/contact', (req, res) => {
    res.render('contact');
});

// get request handler for work route
// send the "projects" variable to the work.pug file
router.get('/work', (req, res) => {
    res.render('work', {projects});
});

module.exports = router;