var express = require('express');
var router = express.Router();
const data = require('../data.json');

const projects = data.projects;
router.get('/', (req, res, next) => {
  res.render('index', {projects});
});

router.post('/', (req, res, next) => {
  res.render('index');
});


module.exports = router;