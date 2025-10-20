import * as THREE from "./three.module.js";
export default function MacetaFlor({x,y,z}){


//Maceta con Cempasúchil
    //Maceta
    var geometryCilindroM = new THREE.CylinderGeometry(2, 1.675, 2.75, 32); 
    // radio superior, radio inferior, altura, segmentos radiales
    var materialCilindroM = new THREE.MeshLambertMaterial({ color: 0x8B4513 }); 
    var cilindroM1 = new THREE.Mesh(geometryCilindroM, materialCilindroM);
    cilindroM1.position.set(0, 10, 0); 
    cilindroM1.castShadow = true;
   // scene.add(cilindroM1);

    //Tierra
    var geometryCilindroT = new THREE.CylinderGeometry(1.675, 1.675, 2.75, 32); 
    // radio superior, radio inferior, altura, segmentos radiales
    var materialCilindroT = new THREE.MeshLambertMaterial({ color: 0x000000 }); 
    var cilindroT1 = new THREE.Mesh(geometryCilindroT, materialCilindroT);
    cilindroT1.position.set(0, 10.1, 0); 
    cilindroT1.castShadow = true;
    //scene.add(cilindroT1);

    //Tallo (Planta)
    var geometryCilindroP = new THREE.CylinderGeometry(0.2, 0.2, 3, 32); 
    // radio superior, radio inferior, altura, segmentos radiales
    var materialCilindroP = new THREE.MeshLambertMaterial({ color: 0x225E18 }); 
    var cilindroP1 = new THREE.Mesh(geometryCilindroP, materialCilindroP);
    cilindroP1.position.set(0, 11, 0); 
    cilindroP1.castShadow = true;
    //scene.add(cilindroP1);

    //Cempasúchil
    var geometryFlor = new THREE.TorusKnotGeometry (1, 0.8, 40,40,12,5);
    var materialFlor = new THREE.MeshLambertMaterial({ color: 0xF56E14 }); 
    var Flor1 = new THREE.Mesh(geometryFlor, materialFlor);
    Flor1.position.set(0, 14, 0); 
    Flor1.castShadow = true;
    //scene.add(Flor1);


    const MacetaFlor1 = new THREE.Group();
    MacetaFlor1.add(cilindroM1,cilindroT1,cilindroP1,Flor1);
    MacetaFlor1.position.set(x,y,z);

    return MacetaFlor1;
}