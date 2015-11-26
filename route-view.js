'use strict';

var routeMap = require('route-map');

module.exports = routeView;

function routeView(defn, args) {
    var defns = defn;
    var match;
    var res;

    if (args.base) {
        defns = Object.keys(defns)
            .reduce(function applyBase(acc, str) {
                acc[args.base + str] = defns[str];
                return acc;
            }, {});
    }

    match = routeMap(defns);

    res = match(args.route);
    if (!res) {
        throw new Error('router: no match found');
    }

    res.params.url = res.url;
    return res.fn(res.params);
}
