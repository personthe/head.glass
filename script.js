import * as CANNON from 'https://unpkg.com/cannon@0.6.2/build/cannon.js';
import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js'
import {GLTFLoader} from 'https://unpkg.com/three@0.126.1/examples/jsm/loaders/GLTFLoader.js'
import {OrbitControls} from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js'
import {DragControls} from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/DragControls.js'





document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('contextmenu', function(e) {
    var dontDoThat = document.createElement('div');
    dontDoThat.innerHTML = 'right clicking is for loosers';
    dontDoThat.style.position = 'absolute';
    dontDoThat.style.top = e.clientY + 'px';
    dontDoThat.style.left = e.clientX + 'px';
    dontDoThat.style.fontSize = '10px';
    if (document.body.style.backgroundColor === 'yellow') {
      dontDoThat.style.color = 'black';
    } else {
      dontDoThat.style.color = 'white';
    }
    document.body.appendChild(dontDoThat);
    setTimeout(function() {
      document.body.removeChild(dontDoThat);
    }, 2000);
  });

  var minecraftServer = document.createElement('div');
minecraftServer.innerHTML = 'Minecraft server : 135.148.29.252:25569';
minecraftServer.style.position = 'absolute';
minecraftServer.style.bottom = '10px';
minecraftServer.style.left = '50%';
minecraftServer.style.transform = 'translateX(-50%)';
minecraftServer.style.color = 'white';
minecraftServer.style.fontSize = '10px';
document.body.appendChild(minecraftServer);

minecraftServer.addEventListener('click', function() {
  var textArea = document.createElement('textarea');
  textArea.value = '135.148.29.252:25569';
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  
  

});

var sheep = new Audio('https://www.myinstants.com/media/sounds/minecraft-sheep2.mp3');
minecraftServer.addEventListener('click', function() {
  sheep.play();
});
  
  document.body.style.overflow = 'hidden';
  
  document.body.style.userSelect = 'none';
  
  document.body.addEventListener('dragstart', function(e) {
    e.preventDefault();
  });

  

const fontLoader = new THREE.FontLoader()
const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()

const gltfloader = new GLTFLoader()
const colorchange = new THREE.Color(0xff0000)

//MATERICAL
const glass = new THREE.MeshPhysicalMaterial({})
glass.thickness = 3.0
glass.roughness = 0.9
glass.clearcoat = 0.1
glass.clearcoatRoughness = 0
glass.transmission = 0.99
glass.ior = 1.25
glass.envMapIntensity = 25

const m2 = new THREE.MeshBasicMaterial({color: 'red'});
m2.visible = false
const m4 = new THREE.MeshBasicMaterial();


const m3 = new THREE.MeshStandardMaterial()
m3.roughness = 0.7

const textMat = new THREE.MeshBasicMaterial({color: 'white', wireframe: true})

//OBJECTS


    const box1 = new THREE.BoxGeometry(.01,10,.01)
    const box1mesh = new THREE.Mesh(box1,m2)
    box1mesh.position.set(0,1.2,)
    
    scene.add(box1mesh)

    const intersextion = new THREE.Vector3(box1mesh)

    const box2 = new THREE.BoxGeometry(1,4,1)
    const box2mesh = new THREE.Mesh(box2,m3)
    box2mesh.receiveShadow = true
    //scene.add(box2mesh)
   

    let text;
    fontLoader.load(
        '/font/helvetiker_regular.typeface.json',
        (font) =>
        {
           const textgeo = new THREE.TextBufferGeometry('GLASSHEAD',{
            font: font,
            size: 0.5,
            height: 0.2,
            curveSegments: .1,
            bevelEnabled: false,
            bevelThickness: 0.03,
            bevelSize: .02,
            bevelOffset: 0,
            bevelSegments: 1,
            })
            
            text = new THREE.Mesh(textgeo,textMat)
            textgeo.center()
            scene.add(text)
            text.position.set(0,.2,.9)
            const size = .15
            text.scale.set(size,size,size)
            
        
        }
        
    )
    


    
    let room;
    let door;
    let pillar;
    let Room;
    let sky;

    
    gltfloader.load('./objects/roomofstuff.gltf', function(glb){
    room = glb.scene;
    groop1.add(room)
    Room = room.getObjectByName("Room");
    sky = room.getObjectByName("sky");

 
    
    
    

    room.castShadow = true
    room.reciveShadow = true


    pillar = room.getObjectByName("Pillar");

    


    door = room.getObjectByName("Door");   
    door.addEventListener('click', (leftclick) => {
            door.rotation.set(0,3,0)
    })

    });



    let head;
    gltfloader.load('./objects/head.gltf', function(glb){
    head = glb.scene;

    //material change   
    /*head.traverse((child) => {
        if (child.isMesh) child.material = material;
        });*/
        head.castShadow = true
    groop1.add(head)

    head.position.copy(box1mesh.position);   
    
    });

    



    function headspin(){
        if(head)head.rotation.y += 0.01;

    
    
    }

    
    
    const groop1 = new THREE.Group()
    scene.add(groop1)
    
    const mouse = new THREE.Vector2()
window.addEventListener('mousemove', (event) =>{
    mouse.x = event.clientX / sizes.width * 2 -1
    mouse.y = - (event.clientX / sizes.width) * 2 + 1
})

    const raycaster = new THREE.Raycaster()





//LIGHTS










for(let i = 0; i< 3; i++){
    const light3 = new THREE.DirectionalLight(0xffffff, .40)  
    const lightHelper = new THREE.PointLightHelper(light3);
    light3.position.x = (Math.random() - 0.5 * 1)
    light3.position.z = 2.5
    //scene.add(lightHelper)
    scene.add(light3)
}






// Dookie stuff
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight}

window.addEventListener('resize', () =>{

    
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

})


const camera = new THREE.PerspectiveCamera (35, sizes.width/sizes.height, .01, 1000)
camera.position.set(0,2.45,4)
camera.rotation.x = -.4
scene.add(camera)

const camera2 = new THREE.PerspectiveCamera (35, sizes.width/sizes.height, .01, 1000)
camera2.position.set(0,1,4)
camera2.rotation.x = 0

scene.add(camera2)

const renderer = new THREE.WebGL1Renderer({
    canvas: canvas})
//const controls = new OrbitControls(camera, renderer.domElement)

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio (Math.min (window.devicePixelRatio, 2))
renderer.gammaOuput - true
renderer.shadowMap.enabled = true

function headani(){
    
}




function animate(){

    var timer = Date.now() * 0.0001;
    headspin()

    //raycaster.setFromCamera(mouse, camera2)

   // const intersects = raycaster.intersectObject(box2mesh)

    /*const objectToTest = []


    for(const object of objectToTest){
       object.material.color.set('white')
    }

    for(const intersect of intersects){
       intersect.object.material.color.set('red')
    }*/
    


    requestAnimationFrame(animate)


   //controls.update();
    renderer.render(scene, camera)


}
    

animate()