import * as THREE from "./three.module.js";

export default function limon1({x,y,z}){

//Limones
//Limon1
var geometryLimon1 = new THREE.SphereGeometry(2 * 0.6, 32, 16);
var texturaLimon1 = new THREE.TextureLoader().load("./assets/limon.jpg"); 
var materialLimon1 = new THREE.MeshLambertMaterial({ map: texturaLimon1 });
var Limon1 = new THREE.Mesh(geometryLimon1, materialLimon1);
Limon1.position.set(0, 12 * 0.8, 0); 
Limon1.castShadow = true;
//scene.add(Limon1);

//Tallo Limon1
var geometryTallo1 = new THREE.CylinderGeometry(0.09, 0.09, 1, 32); 
    // radio superior, radio inferior, altura, segmentos radiales
    var materialTallo1 = new THREE.MeshLambertMaterial({ color: 0x8B4513 }); 
    var cilindroTallo1 = new THREE.Mesh(geometryTallo1, materialTallo1);
    cilindroTallo1.position.set(0, 10.9, 0); 
    cilindroTallo1.castShadow = true;
    //scene.add(cilindroTallo1);

//Limon2
var geometryLimon2 = new THREE.SphereGeometry(2 * 0.8, 32, 16);
var texturaLimon2 = new THREE.TextureLoader().load("./assets/naranja.jpg"); 
var materialLimon2 = new THREE.MeshLambertMaterial({ map: texturaLimon2 });
var Limon2 = new THREE.Mesh(geometryLimon2, materialLimon2);
Limon2.position.set(2.7, 13 * 0.8, -1); 
Limon2.castShadow = true;
//scene.add(Limon2);

//Tallo Limon2
var geometryTallo2 = new THREE.CylinderGeometry(0.09, 0.09, 1, 32); 
    // radio superior, radio inferior, altura, segmentos radiales
    var materialTallo2 = new THREE.MeshLambertMaterial({ color: 0x8B4513 }); 
    var cilindroTallo2 = new THREE.Mesh(geometryTallo2, materialTallo2);
    cilindroTallo2.position.set(2.8, 12, -1); 
    cilindroTallo2.castShadow = true;
    //scene.add(cilindroTallo2);


//Limon3
var geometryLimon3 = new THREE.SphereGeometry(2.8, 32, 16);
var texturaLimon3 = new THREE.TextureLoader().load("./assets/sandia.jpg"); 
var materialLimon3 = new THREE.MeshLambertMaterial({ map: texturaLimon3 });
var Limon3 = new THREE.Mesh(geometryLimon3, materialLimon3);
Limon3.position.set(-0.7, 12, -2.9); 
Limon3.castShadow = true;
//scene.add(Limon3);

//Tallo Limon3
var geometryTallo3 = new THREE.CylinderGeometry(0.2, 0.2, 1, 32); 
    var materialTallo3 = new THREE.MeshLambertMaterial({ color: 0x8B4513 }); 
    var cilindroTallo3 = new THREE.Mesh(geometryTallo3, materialTallo3);
    cilindroTallo3.position.set(-0.5, 14.8, -3); 
    cilindroTallo3.castShadow = true;
    //scene.add(cilindroTallo3);

    const limon1 = new THREE.Group();
    limon1.add(cilindroTallo3,Limon3,cilindroTallo2,Limon2,cilindroTallo1,Limon1);
    limon1.position.set(x,y,z);

    return limon1;
}