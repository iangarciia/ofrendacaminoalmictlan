import * as THREE from "./three.module.js";

export default function cala1({x,y,z}){

      
//Craneo
    var geometryEsferaC = new THREE.SphereGeometry(2, 32, 32);
    var materialEsferaC = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var EsferaCraneo = new THREE.Mesh(geometryEsferaC, materialEsferaC);
    EsferaCraneo.position.set(0, 10, 0); 
    EsferaCraneo.castShadow = true;
    //scene.add(EsferaCraneo);

    var geometryRect = new THREE.BoxGeometry(2.5, 2, 3); 
    var materialRect = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var Mand = new THREE.Mesh(geometryRect,materialRect);
    Mand.position.set(0,9,0.5);
    //scene.add(Mand);

    //Ojo Izquierdo
    var geometryEsferaOjoIzq = new THREE.SphereGeometry(0.5, 32, 32);
    var materialEsferaOjoIzq = new THREE.MeshLambertMaterial({ color: 0x000000 });
    var EsferaOjoIzq = new THREE.Mesh(geometryEsferaOjoIzq, materialEsferaOjoIzq);
    EsferaOjoIzq.position.set(-1, 10, 1.8); 
    EsferaOjoIzq.castShadow = true;
    //scene.add(EsferaOjoIzq);

    //Ojo Derecho
    var geometryEsferaOjoDer = new THREE.SphereGeometry(0.5, 32, 32);
    var materialEsferaOjoDer = new THREE.MeshLambertMaterial({ color: 0x000000 });
    var EsferaOjoDer = new THREE.Mesh(geometryEsferaOjoDer, materialEsferaOjoDer);
    EsferaOjoDer.position.set(1, 10, 1.8); 
    EsferaOjoDer.castShadow = true;
    //scene.add(EsferaOjoDer);

    //Cono Nariz
    var geometryNariz = new THREE.ConeGeometry (0.5,0.8,10,10);
    var materialNariz = new THREE.MeshLambertMaterial({ color: 0x000000 });
    var Nariz = new THREE.Mesh(geometryNariz, materialNariz);
    Nariz.position.set(0,9.5,2);
    Nariz.castShadow = true;
    //scene.add(Nariz);

    //Boca
    var geometryRect = new THREE.BoxGeometry(2.7, 0.4, 3); 
    var materialRect = new THREE.MeshLambertMaterial({ color: 0x000000 });
    var Boca = new THREE.Mesh(geometryRect,materialRect,Mand,EsferaCraneo);
    Boca.position.set(0,8.7,0.6);
    //scene.add(Mand);


    const cala1 = new THREE.Group();
    cala1.add(Nariz,Boca,EsferaOjoDer,EsferaOjoIzq,Mand,EsferaCraneo);
    cala1.position.set(x,y,z);

    return cala1;
}