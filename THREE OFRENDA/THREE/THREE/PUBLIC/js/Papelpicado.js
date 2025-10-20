import * as THREE from "./three.module.js";

export default function Papelpicado({x,y,z}){

      
//Papelpicado1
var geometrypp1 = new THREE.BoxGeometry(10, 5, 0.2);
var texturapp1 = new THREE.TextureLoader().load("./assets/papelpicado1.png"); 
var materialpp1 = new THREE.MeshLambertMaterial({ map: texturapp1 });
var pp1 = new THREE.Mesh(geometrypp1,materialpp1);
pp1.position.set(0,10,0.5);
//scene.add(pp1);


    const papel1 = new THREE.Group();
    papel1.add(pp1);
    papel1.position.set(x,y,z);

    return papel1;
}