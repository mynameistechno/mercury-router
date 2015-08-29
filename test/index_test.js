'use strict';

var test = require('tape');
var document = require('global/document');
var mercury_router = require('../index');

test('init', function renderTest(t) {
    var state = mercury_router();

    document.location = {href: '/'};

    t.ok(mercury_router.render, 'has render function');
    t.ok(mercury_router.anchor, 'has anchor function');
    t.ok(state, 'state init');
    t.end();
});
