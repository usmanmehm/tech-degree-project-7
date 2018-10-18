var express = require('express');
var router = express.Router();
const data = require('../data.json');

const projects = data.projects;

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    res.render('project', {projects, id});
});

router.post('/', (req, res, next) => {
  res.render('project');
});


module.exports = router;