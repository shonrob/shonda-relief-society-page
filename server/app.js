var express = require("express");
var path = require("path");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.sendFile(
    path.join(
      __dirname,
      "../dist/shonda-relief-society-page/browser/index.html"
    )
  );
});

module.exports = router;
