
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  let params = {
    active: { home: true }
  };

  // console.log(res)

  res.render('index', params);
});

module.exports = router;