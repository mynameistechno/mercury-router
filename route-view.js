'use strict';

var routeMap = require('route-map');

module.exports = routeView;

function routeView(defn, args) {
    var defns;
    var match;
    var res;

    if (args.base) {
        defns = Object.keys(defn)
            .reduce(function applyBase(acc, str) {
                acc[args.base + str] = defn[str];
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
