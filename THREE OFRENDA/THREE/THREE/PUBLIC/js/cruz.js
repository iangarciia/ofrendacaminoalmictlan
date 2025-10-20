import * as THREE from "./three.module.js";

export default function CRUZ({x,y,z}){


      
//Cruz
var geometryCruz1 = new THREE.BoxGeometry(5, 0.8, 1);
var materialCruz1 = new THREE.MeshLambertMaterial({ color: 0xffffff });
var Cruz1 = new THREE.Mesh(geometryCruz1, materialCruz1);
Cruz1.position.set(0, 10, 0);
Cruz1.castShadow = true;
//scene.add(Cruz1);

var geometryCruz2 = new THREE.BoxGeometry(1, 0.8, 7);
var materialCruz2 = new THREE.MeshLambertMaterial({ color: 0xffffff });
var Cruz2 = new THREE.Mesh(geometryCruz2, materialCruz2);
Cruz2.position.set(0, 10, 0.7);
Cruz2.castShadow = true;
//scene.add(Cruz2);



    const cruz1 = new THREE.Group();
    cruz1.add(Cruz1, Cruz2);
    cruz1.position.set(x,y,z);

    return cruz1;
}