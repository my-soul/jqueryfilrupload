var express = require('express');
var router = express.Router();
var multer  = require('multer');

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({ dest: 'uploads/' ,storage:storage});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/fileup',upload.single('test'), function(req, res, next) {
	res.status(200).end('{"flag":"true"}');
});


module.exports = router;
