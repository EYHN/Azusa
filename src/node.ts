import * as THREE from 'three'

export class node {
  baseRange: number;
  angle: number;
  center: THREE.Vector2;
  private lastStrength: number;
  private theStrength: number
  private targetRange: number;
  private _range: number = 0;
  constructor(baseRange: number, angle: number, center: THREE.Vector2) {
    this.baseRange = baseRange;
    this.angle = angle;
    this.center = center;
  }
  public get positionA() {
    const range = this._range + this.baseRange;
    const x = Math.cos(this.angle * Math.PI / 180) * range;
    const y = Math.sin(this.angle * Math.PI / 180) * range;
    return new THREE.Vector2(this.center.x + x, this.center.y + y);
  }
  public get positionB() {
    const range = this._range * -1 + this.baseRange;
    const x = Math.cos(this.angle * Math.PI / 180) * range;
    const y = Math.sin(this.angle * Math.PI / 180) * range;
    return new THREE.Vector2(this.center.x + x, this.center.y + y);
  }
  public set strength(newStrength: number) {
    this.lastStrength = this.theStrength;
    this.theStrength = newStrength;
    this.targetRange = Math.max(this.theStrength - this.lastStrength, 0);
    if (this.targetRange > this._range) this._range = this.targetRange;
  }
  public transition(delay: number) {
    this._range = Math.max(this._range - delay * this._range * 5, 0);
  }
}