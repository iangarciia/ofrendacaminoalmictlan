import * as THREE from "./three.module.js";

export default function BaseOfrenda({x,y,z}){


      
  // Material con color cálido (tipo altar)
  const material = new THREE.MeshStandardMaterial({
    color: 0xc49b63,   // tono madera / barro
    roughness: 0.6,
    metalness: 0.1
  });

  // Nivel 1 
  const base1Geom = new THREE.BoxGeometry(6, 0.6, 3);
  const base1 = new THREE.Mesh(base1Geom, material);
  base1.position.set(0, 0.3, 0);
  grupoBase.add(base1);

  // Nivel 2
  const base2Geom = new THREE.BoxGeometry(4.5, 0.5, 2.2);
  const base2 = new THREE.Mesh(base2Geom, material);
  base2.position.set(0, 0.9, 0);
  grupoBase.add(base2);

  // Nivel 3
  const base3Geom = new THREE.BoxGeometry(3, 0.4, 1.4);
  const base3 = new THREE.Mesh(base3Geom, material);
  base3.position.set(0, 1.4, 0);
  grupoBase.add(base3);

  // Decoración bandas y manteles
  const decorMaterial = new THREE.MeshStandardMaterial({ color: 0xffa500, emissive: 0x331000 });
  const bandaGeom = new THREE.BoxGeometry(6.2, 0.05, 3.2);
  const banda = new THREE.Mesh(bandaGeom, decorMaterial);
  banda.position.set(0, 0.6, 0);
  grupoBase.add(banda);

  // Luz velas 
  const luz = new THREE.PointLight(0xffcc66, 1, 10);
  luz.position.set(0, 2, 0);
  grupoBase.add(luz);


    const BaseOfrenda1 = new THREE.Group();
    BaseOfrenda1.add(marco, Foto);
    BaseOfrenda1.position.set(x,y,z);




    
    return BaseOfrenda1;
}