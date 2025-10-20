import * as THREE from "./three.module.js";

export default function Papelpicado({x,y,z}){

      
//Papelpicado1
var geometrypp1 = new THREE.BoxGeometry(10, 5, 0.2);
var texturapp1 = new THREE.TextureLoader().load("./assets/p3.png"); 
var materialpp1 = new THREE.MeshLambertMaterial({ map: texturapp1 });
var pp4 = new THREE.Mesh(geometrypp1,materialpp1);
pp4.position.set(0,10,0.5);
//scene.add(pp2);


    const papel4 = new THREE.Group();
    papel4.add(pp4);
    papel4.position.set(x,y,z);

    return papel4;
}