'use strict';
var express = require('express')
  , handler = express.Router()
  , log     = require('magic-log')
  , view   = require('magic-view')
;
exports.handle404 = function (req, res, next) {
  var app  = req.app
    , p404 = app.get('404page') || '404'
    , r404 = app.get('404redirect') || false
  ;
  if ( r404 ) {
    log('magic-errorHandler', 'r404 was set in host, redirect:', r404);
    return res.redirect(r404); 
  }

  log.warn('404 error page called, page was:', req.params.page);
  req.params.page = p404;
  res.status(404);
  view.render.page(req, res, function(err) {
    log.error('404 page template for host not found');
    if ( err ) { next(err); }
  });
}
exports.handle500 =  function(err, req, res, next) {
  log.error('500 called, err:', err);
  res.send('500 server error.');
}
