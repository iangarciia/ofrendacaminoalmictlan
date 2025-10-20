import * as THREE from "./three.module.js";
export default function botella({x,y,z}){

    //Vino
var geo0 = new THREE.CylinderGeometry (.5,.5,2,10,10,false,0,8);
var mat0 = new THREE.MeshBasicMaterial({
    color: 0x5e2129, side: THREE.DoubleSide});
var mesh= new THREE.Mesh(geo0,mat0);
//scene.add(mesh0);
mesh.position.set(0,1,0);

var geo05 = new THREE.CylinderGeometry (.2,.5,2,10,10,false,0,8);
var mat05 = new THREE.MeshBasicMaterial({
    color: 0x006A4E, side: THREE.DoubleSide});
var mesh2= new THREE.Mesh(geo05,mat05);
//scene.add(mesh2);
mesh2.position.set(0,3,0);

var geo03 = new THREE.CylinderGeometry (.2,.2,.5,10,10,false,0,8);
var mat03 = new THREE.MeshBasicMaterial({
    color: 0xA97869, side: THREE.DoubleSide});
var mesh3= new THREE.Mesh(geo03,mat03);
//scene.add(mesh3);
mesh3.position.set(0,4,0);

    const botella1 = new THREE.Group();
    botella1.add(mesh,mesh2,mesh3);
    botella1.position.set(x,y,z);

    return botella1;
}
