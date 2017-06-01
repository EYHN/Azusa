import * as THREE from 'three';
import { Vector3 } from 'three';
export interface ILineDistanceOption {
    startShow: number;
    endShow: number;
    startHide: number;
    endHide: number;
}
export declare class Triangle {
    rotate: number;
    id: number;
    distance: number;
    rotateSpeed: number;
    angle: number;
    pointA: THREE.Vector3;
    pointB: THREE.Vector3;
    pointC: THREE.Vector3;
    speed: number;
    center: THREE.Vector3;
    mesh: THREE.Mesh;
    showDistance: ILineDistanceOption;
    panelMaterial: THREE.MeshBasicMaterial;
    lineMaterial: THREE.LineBasicMaterial;
    private panelOpacity;
    line: THREE.Line;
    group: THREE.Group;
    private onDelete;
    constructor(size: number, center: THREE.Vector3, angle: number, speed: number, rotateSpeed: number, material: THREE.MeshBasicMaterial, lineMaterial: THREE.LineBasicMaterial, lineDistance: ILineDistanceOption, cb: (t: Triangle) => void);
    rotateZ(angle: number): void;
    translate(distance: number): Vector3;
    translateOnAxis(axis: THREE.Vector3, distance: number): void;
    updatePosition(delay: number): void;
    delete(): void;
    opacity(distance: number, showDistance: ILineDistanceOption): number;
    transition(delay: number): void;
}
