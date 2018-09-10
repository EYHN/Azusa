import { randomRange } from './util/randomRange';
import * as THREE from 'three';

export interface ILineDistanceOption {
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
  // public pointA: THREE.Vector3;
  // public pointB: THREE.Vector3;
  // public pointC: THREE.Vector3;
  public speed: number;
  public center: THREE.Vector3;
  public mesh: THREE.Mesh;
  public showDistance: ILineDistanceOption;
  public panelMaterial: THREE.MeshBasicMaterial;
  public lineMaterial: THREE.LineBasicMaterial;
  private panelOpacity: number = 0.1;
  public line: THREE.Line;
  public group: THREE.Group;
  private onDelete: (t: Triangle) => void;

  constructor(size: number, center: THREE.Vector3, angle: number, speed: number, rotateSpeed: number, material: THREE.MeshBasicMaterial, lineMaterial: THREE.LineBasicMaterial, lineDistance: ILineDistanceOption, cb: (t: Triangle) => void) {
    this.rotateSpeed = rotateSpeed;
    this.angle = angle;
    this.speed = speed;
    this.center = center;
    this.onDelete = cb;
    this.distance = lineDistance.startShow;
    this.showDistance = lineDistance;
    this.panelMaterial = new THREE.MeshBasicMaterial().copy(material)
    this.panelMaterial.transparent = true;
    this.lineMaterial = new THREE.LineBasicMaterial().copy(lineMaterial)
    this.lineMaterial.transparent = true;
    const panelGeometry = new THREE.Geometry();
    const lineGeometry = new THREE.Geometry();

    const vertices = [
      new THREE.Vector3(randomRange(size, size / 2), randomRange(size, size / 2), 0),
      new THREE.Vector3(randomRange(size, size / 2) * -1, randomRange(size, size / 2), 0),
      new THREE.Vector3(randomRange(size, size / 2) * -1, randomRange(size, size / 2) * -1, 0)
    ]

    panelGeometry.vertices.push(
      ...vertices
    )

    lineGeometry.vertices.push(...[...vertices, vertices[0]]);

    panelGeometry.faces.push(new THREE.Face3(0, 1, 2));
    panelGeometry.computeFaceNormals();
    panelGeometry.computeVertexNormals();

    this.line = new THREE.Line(lineGeometry, this.lineMaterial)
    this.mesh = new THREE.Mesh(panelGeometry, this.panelMaterial);
    this.group = new THREE.Group();
    this.translateOnAxis(this.translate(this.distance), 1);
    this.group.add(this.line);
    this.group.add(this.mesh);
    this.rotateZ(this.rotate);
    this.updatePosition(0);
  }

  public rotateZ(angle: number) {
    this.mesh.geometry.rotateZ(angle);
    this.line.geometry.rotateZ(angle);
  }

  public translate(distance: number) {
    const x = Math.cos(this.angle * Math.PI / 180) * distance;
    const y = Math.sin(this.angle * Math.PI / 180) * distance;
    return new THREE.Vector3(x, y, 0);
  }

  public translateOnAxis(axis: THREE.Vector3, distance: number) {
    this.group.translateOnAxis(axis, distance);
  }

  public updatePosition(delay: number) {
    this.translateOnAxis(this.translate(delay * this.speed), 1);
    this.distance += delay * this.speed;
    this.rotateZ(this.rotateSpeed * delay);
    this.panelMaterial.opacity = this.opacity(this.distance, this.showDistance) * this.panelOpacity;
    this.lineMaterial.opacity = this.opacity(this.distance, this.showDistance);
    if (this.distance > this.showDistance.endHide) {
      this.delete();
    }
  }

  public delete() {
    this.onDelete(this);
    this.mesh.geometry.dispose();
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
