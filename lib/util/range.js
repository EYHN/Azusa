"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function range(start, end, step = 1, fromRight = false) {
    var index = -1, length = Math.max(Math.ceil((end - start) / step), 0), result = Array(length);
    while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
    }
    return result;
}
exports.range = range;
;
//# sourceMappingURL=range.js.map