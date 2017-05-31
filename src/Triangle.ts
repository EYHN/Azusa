import { randomRange } from './util/randomRange';
import * as THREE from 'three';

interface ILineDistanceOption {
  startShow: number;
  endShow: number;
  startHide: number;
  endHide: number;
}

export class Triangle {
  public rotate: number = Math.random() * 360;
  public id: number = Math.random();
  public distance: number;
  public rotateSpeed: number;
  public angle: number;
  public pointA: THREE.Vector3;
  public pointB: THREE.Vector3;
  public pointC: THREE.Vector3;
  public speed: number;
  public center: THREE.Vector3;
  public line: THREE.Line;
  public showDistance: ILineDistanceOption;
  public lineMaterial: THREE.LineBasicMaterial;
  private onDelete: (t:Triangle) => void;

  constructor(size: number, center: THREE.Vector3, angle: number, speed: number, rotateSpeed: number, LineMaterial: THREE.LineBasicMaterial, lineDistance: ILineDistanceOption, cb: (t:Triangle) => void) {
    this.rotateSpeed = rotateSpeed;
    this.angle = angle;
    this.speed = speed;
    this.center = center;
    this.onDelete = cb;
    this.distance = lineDistance.startShow;
    this.showDistance = lineDistance;
    this.lineMaterial = new THREE.LineBasicMaterial().copy(LineMaterial)
    this.lineMaterial.transparent = true;
    const geometry = new THREE.Geometry();

    const vertices = [
      new THREE.Vector3(randomRange(size, size / 2), randomRange(size, size / 2), 0),
      new THREE.Vector3(randomRange(size, size / 2) * -1, randomRange(size, size / 2), 0),
      new THREE.Vector3(randomRange(size, size / 2) * -1, randomRange(size, size / 2) * -1, 0)
    ]

    vertices.push(vertices[0]);
    geometry.vertices.push(
      ...vertices
    )
    
    geometry.rotateZ(this.rotate);
    this.line = new THREE.Line(geometry, this.lineMaterial);
    this.line.translateOnAxis(this.translate(this.distance) ,1);
    this.updatePosition(0);
  }

  public translate(distance:number) {
    const x = Math.cos(this.angle * Math.PI / 180) * distance;
    const y = Math.sin(this.angle * Math.PI / 180) * distance;
    return new THREE.Vector3(x,y,0);
  }

  public updatePosition(delay: number) {
    this.line.translateOnAxis(this.translate(delay * this.speed) ,1);
    this.distance += delay * this.speed;
    this.line.geometry.rotateZ(this.rotateSpeed * delay);
    this.lineMaterial.opacity = this.opacity(this.distance, this.showDistance);
    if (this.distance > this.showDistance.endHide) {
      this.delete();
    }
  }

  public delete() {
    this.onDelete(this);
    this.line.geometry.dispose();
  }

  public opacity(distance: number, showDistance: ILineDistanceOption) {
    if (this.distance < showDistance.endShow) {
      return (this.distance - showDistance.startShow) / (showDistance.endShow - showDistance.startShow);
    } else if (this.distance > showDistance.startHide) {
      return (showDistance.endHide - this.distance) / (showDistance.endHide - showDistance.startHide);
    } else {
      return 1;
    }
  }

  public transition(delay: number) {
    this.updatePosition(delay);
  }
}