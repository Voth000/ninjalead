import * as THREE from 'https://unpkg.com/three@0.139.2/build/three.module.js';
import * as YUKA from './yuka.module.js'
import {GLTFLoader} from "./GLTFLoader.js"

import { RGBELoader } from 'https://cdn.skypack.dev/three@0.130.1/examples/jsm/loaders/RGBELoader.js'



const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()


///GLTFLoader normal

// Scene, Camera
const hdrUrl = 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/abandoned_greenhouse_1k.hdr'
new RGBELoader().load(hdrUrl, texture => {
  const gen = new THREE.PMREMGenerator(renderer)
  const envMap = gen.fromEquirectangular(texture).texture
  scene.environment = envMap

  texture.dispose()
  gen.dispose()
})

///const loader = new GLTFLoader()
//loader.load('/3.glb', function(glb){
 //   console.log(glb)
 //   const root = glb.scene;
 //   root.scale.set(1, 1, 1)
 //   scene.add(root);
//}, function(xhr){
 //   console.log(xhr.loaded/xhr.total * 100 + "% loaded")
//}, function(error){
 //   console.log("an error has occurred")
//})

//light
const light = new THREE.AmbientLight(0xffffff, 0.6)
light.position.set(2,10,5)
scene.add(light)

const al = new THREE.AmbientLight(0xffffff, 0.25)
light.position.set(20,-10,-5)
scene.add( al )

const wl = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(8,3,8)
scene.add( wl )



//cube

//const geometry = new THREE.BoxGeometry(1,1,1)
//const material = new THREE.MeshBasicMaterial({
//color: 'red'
//})
//const boxMesh = new THREE.Mesh(geometry,material)
//scene.add(boxMesh)

//Boiler 

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 1000)
camera.position.set(8,20,0)
camera.lookAt(scene.position)
scene.add(camera)



const renderer = new THREE.WebGL1Renderer({
    canvas: canvas,
    alpha: true
})

renderer.setSize(window.innerWidth,window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 4))
renderer.shadowMap.enabled = true
renderer.render(scene,camera)
renderer.setClearColor( 0xffffff, 0.25)


///cone vehicle

//const vehicleGeometry = new THREE.ConeBufferGeometry(0.1, 0.5, 8)
//vehicleGeometry.rotateX(Math.PI * 0.5)
//const vehicleMaterial = new THREE.MeshNormalMaterial()
//const vehicleMesh = new THREE.Mesh(vehicleGeometry, vehicleMaterial)
//vehicleMesh.matrixAutoUpdate = false
//scene.add(vehicleMesh)

const vehicle = new YUKA.Vehicle()

function sync(entity, renderComponent) {
renderComponent.matrix.copy(entity.worldMatrix)
}

///path

//const path = new YUKA.Path()
//path.add( new YUKA.Vector3(-4, 0, 4))
//path.add( new YUKA.Vector3(-6, 0, 0))
//path.add( new YUKA.Vector3(-4, 0, -4))
//path.add( new YUKA.Vector3(0, 0, 0))
//path.add( new YUKA.Vector3(4, 0, -4))
//path.add( new YUKA.Vector3(6, 0, 0))
//path.add( new YUKA.Vector3(4, 0, 4))
//path.add( new YUKA.Vector3(0, 0, 6))
//path.loop = true
//vehicle.position.copy(path.current())

///path speed + follow path + vehicle.maxSpeed = 3
//const followPathBehavior = new YUKA.FollowPathBehavior(path, 0.5)
//vehicle.steering.add(followPathBehavior)
//const onPathBehavior = new YUKA.OnPathBehavior(path)
//onPathBehavior.radius = 2
//vehicle.steering.add(onPathBehavior)

const entityManager = new YUKA.EntityManager()
entityManager.add(vehicle)
vehicle.scale.set(2, 2, 2)

///GLTF vehicle

const loader = new GLTFLoader()
const group = new THREE.Group()
loader.load('./1.glb', function(glb){
    const model = glb.scene;
    group.add(model)
    scene.add(group);
    model.matrixAutoUpdate =false;
    vehicle.setRenderComponent(model, sync);
}, function(xhr){
    console.log(xhr.loaded/xhr.total * 100 + "% loaded")
}, function(error){
    console.log("an error has occurred")
})

///target sphere to follow
//const targetGeometry = new THREE.SphereGeometry(0.1);
//const targetMaterial = new THREE.MeshPhongMaterial({color: 0xFFEA00});
//const targetMesh = new THREE.Mesh(targetGeometry, targetMaterial);
//targetMesh.matrixAutoUpdate = false;
//scene.add(targetMesh);

const target = new YUKA.GameEntity();
//target.setRenderComponent(targetMesh, sync);
entityManager.add(target);

//seek behaviour to sphere by replace arrive = seek and otherwise

const arriveBehavior = new YUKA.ArriveBehavior(target.position, 4, 0.8)
vehicle.steering.add(arriveBehavior)
vehicle.maxSpeed = 8
vehicle.position.set(-10, 10, -20)

///Mouse as target position

const mousePosition = new THREE.Vector2()

window.addEventListener('mousemove', function(e) {
    mousePosition.x = (e.clientX / this.window.innerWidth) * 2 - 1;
    mousePosition.y = -(e.clientY / this.window.innerHeight) * 2 + 1;
})

///Plane for mose position

const planeGeo = new THREE.PlaneGeometry(1200, 1200);
const planeMat = new THREE.MeshBasicMaterial({visible: false});
const planeMesh = new THREE.Mesh(planeGeo, planeMat);
planeMesh.rotation.x = -0.5 * Math.PI;
scene.add(planeMesh);
planeMesh.name = 'plane';

///click event configure raycaster

const raycaster = new THREE.Raycaster();

window.addEventListener('mousedown', function() {
    raycaster.setFromCamera(mousePosition, camera);
    const intersects = raycaster.intersectObjects(scene.children);
    for(let i = 0; i < intersects.length; i++) {
        if(intersects[i].object.name === 'plane')
            target.position.set(intersects[i].point.x, 0, intersects[i].point.z);
    }
});

///Interval for randome apperence
//setInterval(function(){
//    const x = Math.random() * 3;
//    const y = Math.random() * 3;
 //   const z = Math.random() * 3;

 //   target.position.set(x, y, z);
//}, 2000);


///loop position path
//const position = []
//for(let i = 0; i < path._waypoints.length; i++) {
//    const waypoint = path._waypoints[i];
//    position.push(waypoint.x, waypoint.y, waypoint.z)
//}
//const lineGeometry = new THREE.BufferGeometry()
//lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(position, 3))
//const lineMaterial = new THREE.LineBasicMaterial({color: 0xFFFFFF})
//const lines = new THREE.LineLoop(lineGeometry, lineMaterial)
//scene.add(lines)

const time = new YUKA.Time()


///animate normal

//function animate(){
//    requestAnimationFrame(animate)
 //   renderer.render(scene,camera)
//}
//animate()

///animate yuka path
function animate(t) {
    const delta = time.update().getDelta();
    group.position.y = 0.05 * Math.sin(t/500);
    entityManager.update(delta);
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate)
requestAnimationFrame(animate)
window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})

document.body.appendChild(renderer.domElement);

///animate yuka follow object

