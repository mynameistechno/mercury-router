'use strict';

var routeAtom = require('./router.js').atom;

module.exports = navigate;

function navigate(url) {
    routeAtom.set(url);
}
