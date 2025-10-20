import * as THREE from "./three.module.js";

export default function MARCOH({x,y,z}){


      
// Marco exterior (base del marco)
var geometryMarco = new THREE.BoxGeometry(6, 4.5, 0.4);
var materialMarco = new THREE.MeshLambertMaterial({ color: 0x8B7355 });
var marco = new THREE.Mesh(geometryMarco, materialMarco);
marco.position.set(0, 2.75, -5);
marco.castShadow = true;
//scene.add(marco);

//Fotografía
var geometryFoto = new THREE.BoxGeometry(4.5, 3.375, 0.5);
var texturaFoto = new THREE.TextureLoader().load("./assets/cat1.png");
var materialFoto = new THREE.MeshLambertMaterial({ map: texturaFoto }); 
var Foto = new THREE.Mesh(geometryFoto, materialFoto);
Foto.position.copy(marco.position);
Foto.position.z += 0.01;
//scene.add(Foto);


    const MARCOH1 = new THREE.Group();
    MARCOH1.add(marco, Foto);
    MARCOH1.position.set(x,y,z);

    return MARCOH1;
}