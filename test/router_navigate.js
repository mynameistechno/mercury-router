'use strict';

var test = require('tape');
var document = require('global/document');
var router = require('../index');
var navigate = require('../index').navigate;

test('navigate', function navigateTest(t) {
    var state = router();
    var to = '/articles?page=1';

    document.location = {href: '/articles?page=25'};

    navigate(to);
    t.equal(state(), to, 'state updated by navigate');

    t.end();
});
