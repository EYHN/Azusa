import { Vector2 } from 'three';
export declare class node {
    baseRange: number;
    angle: number;
    center: Vector2;
    private lastStrength;
    private theStrength;
    private targetRange;
    private _range;
    constructor(baseRange: number, angle: number, center: Vector2);
    readonly positionA: Vector2;
    readonly positionB: Vector2;
    strength: number;
    transition(delay: number): void;
}
