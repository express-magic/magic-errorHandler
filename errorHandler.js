'use strict';
var express = require('express')
  , path    = require('path')
  , handler = express()
  , log     = require('magic-log')
  , views   = require('magic-views')
;

handler.use(function (req, res, next) {
  req.params.page = '404';
  views.render.page(req, res, function(err) {
    if ( err ) { return next(err); }
  });
});

handler.use(function(err, req, res, next) {
  log.error('500 called, err:', err);
  res.send('500 server error.');
});

module.exports = handler;
