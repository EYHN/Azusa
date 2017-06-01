"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const three_1 = require("three");
class node {
    constructor(baseRange, angle, center) {
        this._range = 0;
        this.baseRange = baseRange;
        this.angle = angle;
        this.center = center;
    }
    get positionA() {
        const range = this._range + this.baseRange;
        const x = Math.cos(this.angle * Math.PI / 180) * range;
        const y = Math.sin(this.angle * Math.PI / 180) * range;
        return new three_1.Vector2(this.center.x + x, this.center.y + y);
    }
    get positionB() {
        const range = this._range * -1 + this.baseRange;
        const x = Math.cos(this.angle * Math.PI / 180) * range;
        const y = Math.sin(this.angle * Math.PI / 180) * range;
        return new three_1.Vector2(this.center.x + x, this.center.y + y);
    }
    set strength(newStrength) {
        this.lastStrength = this.theStrength;
        this.theStrength = newStrength;
        this.targetRange = Math.max(this.theStrength - this.lastStrength, 0);
        if (this.targetRange > this._range)
            this._range = this.targetRange;
    }
    transition(delay) {
        this._range = Math.max(this._range - delay * this._range * 5, 0);
    }
}
exports.node = node;
//# sourceMappingURL=node.js.map