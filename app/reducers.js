"use strict";
exports.clock = function (state, _a) {
    if (state === void 0) { state = new Date(); }
    var type = _a.type;
    var date = new Date(state.getTime());
    console.log(type);
    switch (type) {
        case 'second':
            date.setSeconds(date.getSeconds() + 1);
            return date;
        case 'hour':
            date.setHours(date.getHours() + 1);
            return date;
    }
    return date;
};
//# sourceMappingURL=reducers.js.map