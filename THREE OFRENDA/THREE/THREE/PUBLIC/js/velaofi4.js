import * as THREE from "./three.module.js";
export default function vela4({x,y,z}){

//vela1
var geo1 = new THREE.CylinderGeometry(0.8, 0.6, 3, 20, 10, false, 0, 8);
var texture = new THREE.TextureLoader().load("./assets/v4.jpg");
//trasladar
texture.offset.x=0;
texture.offset.y=0;

    var mat1 = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide
    });
texture.repeat.set(1,1);
texture.wrapT=THREE.RepeatWrapping;
texture.wrapS=THREE.RepeatWrapping;
//pabilo
var geo2 = new THREE.CylinderGeometry(0.08,0.08, 1, 20, 10, false, 0, 8);
var mat2 = new THREE.MeshBasicMaterial({
    color: 0x111111, side: THREE.DoubleSide
});
//fuego
var geo3 = new THREE.ConeGeometry (0.3, 1, 16, 1);
var mat3 = new THREE.MeshBasicMaterial({
    color: 0xF5A627, side: THREE.DoubleSide

});

//POSICIONES XYZ ......................................................

//vela1
var mesh = new THREE.Mesh(geo1, mat1);
    mesh.position.set(0,2,0);
    //scene.add(mesh);
    mesh.castShadow = true;    //repetir
    mesh.rotation.y = Math.PI / 1.3;
var mesh2 = new THREE.Mesh(geo2, mat2);
    mesh2.position.set(0,3.5,0);
    //scene.add(mesh2);
    mesh2.castShadow = true;    //repetir
var mesh3 = new THREE.Mesh(geo3,mat3);
    //scene.add(mesh3);
    mesh3.position.set(0,4.2,0);    

    const vela4 = new THREE.Group();
    vela4.add(mesh,mesh2,mesh3);
    vela4.position.set(x,y,z);

    return vela4;
}
