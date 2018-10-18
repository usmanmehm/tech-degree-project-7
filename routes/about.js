var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('about');
});

router.post('/', (req, res, next) => {
  res.render('about');
});


module.exports = router;