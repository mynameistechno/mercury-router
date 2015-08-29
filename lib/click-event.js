'use strict';

module.exports = clickEvent;

function clickEvent(handler, options) {
    var opts = options || {};

    return function clickHandler(ev) {
        ev.preventDefault();

        if (!opts.ctrl && ev.ctrlKey) {
            return;
        }

        if (!opts.meta && ev.metaKey) {
            return;
        }

        if (!opts.rightClick && ev.which === 2) {
            return;
        }

        handler();
    };
}
