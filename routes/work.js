const express = require('express');
const router = express.Router();
const jsonData = require('../data.json');
const projects = jsonData.projects;

// get request handler when an id is given at the work route
router.get('/:id', (req, res) => {

    // redirect to work route if id is greater than or equal to the length of projects array
    // or when the id given is not a number
    if (req.params.id >= projects.length || isNaN(req.params.id)) {
        res.redirect('/work');
    }

    const id = req.params.id;
    const title = projects[id].project_name;
    const projectDescription = projects[id].project_description;
    const liveLink = projects[id].live_link;
    const githubLink = projects[id].github_link;
    const imageUrls = projects[id].image_urls;
    
    const templateData = {projects, title, projectDescription, liveLink, githubLink, imageUrls};

    res.render('project', templateData);
});

module.exports = router;