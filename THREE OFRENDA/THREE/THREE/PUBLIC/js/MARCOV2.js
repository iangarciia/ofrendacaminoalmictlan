import * as THREE from "./three.module.js";

export default function MARCOV2({x,y,z}){


      
// Marco exterior (base del marco)
var geometryMarco = new THREE.BoxGeometry(4.5, 6, 0.4);
var materialMarco = new THREE.MeshLambertMaterial({ color: 0x8B7355 });
var marco = new THREE.Mesh(geometryMarco, materialMarco);
marco.position.set(0, 2.75, -5);
marco.castShadow = true;
//scene.add(marco);

//Fotografía
var geometryFoto = new THREE.BoxGeometry(3.375, 4.5, 0.5);
var texturaFoto = new THREE.TextureLoader().load("./assets/cat3.png");
var materialFoto = new THREE.MeshLambertMaterial({ map: texturaFoto }); 
var Foto = new THREE.Mesh(geometryFoto, materialFoto);
Foto.position.copy(marco.position);
Foto.position.z += 0.01;
//scene.add(Foto);


    const MARCOV2 = new THREE.Group();
    MARCOV2.add(marco, Foto);
    MARCOV2.position.set(x,y,z);

    return MARCOV2;
}