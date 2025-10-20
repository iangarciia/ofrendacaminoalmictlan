import * as THREE from "./three.module.js";

export default function Papelpicado({x,y,z}){

      
//Papelpicado1
var geometrypp1 = new THREE.BoxGeometry(10, 5, 0.2);
var texturapp1 = new THREE.TextureLoader().load("./assets/p2.png"); 
var materialpp1 = new THREE.MeshLambertMaterial({ map: texturapp1 });
var pp3 = new THREE.Mesh(geometrypp1,materialpp1);
pp3.position.set(0,10,0.5);
//scene.add(pp2);


    const papel3 = new THREE.Group();
    papel3.add(pp3);
    papel3.position.set(x,y,z);

    return papel3;
}