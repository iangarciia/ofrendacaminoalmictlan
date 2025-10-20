import * as THREE from "./three.module.js";

export default function PAN({x,y,z}){


var matPan = new THREE.MeshLambertMaterial({color: 0xDDA15E});

var panCuerpo = new THREE.Mesh(new THREE.SphereGeometry(6 * 0.4, 32, 32), matPan);
panCuerpo.scale.set(1,0.6,1);
panCuerpo.position.set(0, 3 * 0.4, 0);
//scene.add(panCuerpo);

var Bolitaarriba = new THREE.Mesh(new THREE.SphereGeometry(1.3 * 0.4, 32, 32), matPan);
Bolitaarriba.position.set(0, 6.2 * 0.4, 0);
//scene.add(Bolitaarriba);

var geoHueso = new THREE.CylinderGeometry(0.4 * 0.4, 0.4 * 0.4, 8 * 0.4, 20);
var matHueso = new THREE.MeshLambertMaterial({color: 0xC78A4A});

var huesito1 = new THREE.Mesh(geoHueso, matHueso);
huesito1.rotation.z = Math.PI/2;
huesito1.position.set(0, 5.5 * 0.4, 0);
//scene.add(huesito1);

var huesito2 = huesito1.clone();
huesito2.rotation.y = Math.PI/2;
//scene.add(huesito2);

var geoBolita = new THREE.SphereGeometry(0.7 * 0.4, 20, 20);
var matBolita = new THREE.MeshLambertMaterial({color: 0xC78A4A});

var bolita3 = new THREE.Mesh(geoBolita, matBolita);
bolita3.position.set(4 * 0.4, 5.5 * 0.4, 0);
//scene.add(bolita3);

var bolita4 = bolita3.clone();
bolita4.position.set(-4 * 0.4, 5.5 * 0.4, 0);
//scene.add(bolita4);

var bolita5 = bolita3.clone();
bolita5.position.set(0, 5.5 * 0.4, 4 * 0.4);
//scene.add(bolita5);

var bolita6 = bolita3.clone();
bolita6.position.set(0, 5.5 * 0.4, -4 * 0.4);
//scene.add(bolita6);



    const PAN1 = new THREE.Group();
    PAN1.add(panCuerpo, Bolitaarriba, huesito1, huesito2, bolita3, bolita4, bolita5, bolita6);
    PAN1.position.set(x,y,z);

    return PAN1;
}