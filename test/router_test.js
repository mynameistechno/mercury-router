'use strict';

var test = require('tape');
var document = require('global/document');
var atom = require('../lib/router').atom;

document.location = { href: '/articles?page=25' };

test('router', function routerTest(t) {
    t.equal(
        atom(),
        document.location.href,
        'router init with full url, including query string');

    t.end();
});
