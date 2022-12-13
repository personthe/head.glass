import * as CANNON from 'https://unpkg.com/cannon@0.6.2/build/cannon.js';
import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js'
import {GLTFLoader} from 'https://unpkg.com/three@0.126.1/examples/jsm/loaders/GLTFLoader.js'
import {OrbitControls} from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js'
import {DragControls} from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/DragControls.js'
//----------------------------------------------------------------------------------------------------  

var off = new Audio('./audio/off.mp3');
var on = new Audio('./audio/on.mp3');
var windowopen = new Audio('./audio/windowopen.mp3');
var windowclose = new Audio('./audio/windowclose.mp3');
var dooropen = new Audio('./audio/dooropen.mp3');
var doorclose = new Audio('./audio/doorclose.mp3');

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



const m4 = new THREE.MeshBasicMaterial();

const m3 = new THREE.MeshStandardMaterial()
m3.roughness = 0.7

const textMat = new THREE.MeshBasicMaterial({color: 'white', wireframe: true})

//OBJECTS
    const headBoxGeometry = new THREE.BoxGeometry(.47,.6,.47)
    const invisibleRed = new THREE.MeshBasicMaterial({color: 'red'});
    invisibleRed.visible = false
    const headBox = new THREE.Mesh(headBoxGeometry,invisibleRed)
    headBox.position.set(0,1.5,)
    scene.add(headBox)

    const tvBoxGeometry = new THREE.BoxGeometry(.65,.6,.16)
    const tvBox = new THREE.Mesh(tvBoxGeometry,invisibleRed)
    tvBox.position.set(1.27,.6,-1.5)
    scene.add(tvBox)

    const doorBoxGeometry = new THREE.BoxGeometry(.80,2,.16)
    const doorBox = new THREE.Mesh(doorBoxGeometry,invisibleRed)
    doorBox.position.set(-1.1,.9,-1.8)
    scene.add(doorBox)

    const windowBoxGeometry = new THREE.BoxGeometry(.85,.69,.1)
    const windowBox = new THREE.Mesh(windowBoxGeometry,invisibleRed)
    windowBox.position.set(2.30,1.35,-1)
    windowBox.rotation.set(0,-1.25,0)
    scene.add(windowBox)



   
let text;
fontLoader.load('/font/helvetiker_regular.typeface.json',(font) =>{
    const textgeo = new THREE.TextBufferGeometry('GLASSHEAD',{
        font: font,
        size: 0.5,
        height: 0.2,
        curveSegments: .1,
        bevelEnabled: false,
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
let outside;
  
gltfloader.load('./objects/roomofstuff.gltf', function(glb){

    room = glb.scene;
    groop1.add(room)
    Room = room.getObjectByName("Room");
    outside = room.getObjectByName("Window");
    sky = room.getObjectByName("sky");
    pillar = room.getObjectByName("Pillar");
    door = room.getObjectByName("Door");   
    

});

let head;
gltfloader.load('./objects/head.gltf', function(glb){

    head = glb.scene;
    head.castShadow = true
    head.position.set(0,1.2,0)
    groop1.add(head)
    
});

let TV;

gltfloader.load('./objects/TV.gltf', function(glb){
    TV = glb.scene;
    screen = TV.getObjectByName("TVSCREEN");
    groop1.add(TV)

});


function headspin(){

    if(head)head.rotation.y += 0.01;
    
}

const groop1 = new THREE.Group()
scene.add(groop1)
    

//LIGHTS
for(let i = 0; i< 3; i++){
    const light3 = new THREE.DirectionalLight(0xffffff, .70)  
    const lightHelper = new THREE.PointLightHelper(light3);
    light3.position.x = (Math.random() - 0.5 * 1)
    light3.position.z = 2.5
    //scene.add(lightHelper)
    scene.add(light3)
}


// Dookie stuff
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const raycaster = new THREE.Raycaster()

window.addEventListener('resize', () =>{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

})



const mouse = new THREE.Vector2()

    window.addEventListener('mousemove', (event) =>{
    mouse.x = event.clientX / sizes.width * 2 - 1
    mouse.y = - (event.clientY / sizes.height) * 2 + 1
    
    })

    let doorRotation = 0;
    let windowPos = 0;

    window.addEventListener('click', (event) =>{
        if(currentIntersect){
            console.log(currentIntersect)

            if(currentIntersect.object === headBox){
                console.log('head clicked')
            }
            else if(currentIntersect.object === windowBox){
                console.log('window clicked')
                if(outside){
                    if (windowPos === 0) {
                        outside.position.set(-.502,.6,-1.088);
                        windowclose.pause()
                        windowclose.currentTime = 0
                        windowopen.play()
                        windowPos = 3;
                    } else {
                        outside.position.set(-.502,.432,-1.088);
                        windowPos = 0;
                        windowopen.pause()
                        windowopen.currentTime = 0
                        windowclose.play()
                    }
                }
                
            }
            else if(currentIntersect.object === doorBox){
                console.log('door clicked')
                if(door){
                    if (doorRotation === 0) {
                        doorclose.pause()
                        doorclose.currentTime = 0
                        dooropen.play()
                        door.rotation.set(0, 3, 0);
                        doorRotation = 3;
                    } else {
                        dooropen.pause()
                        dooropen.currentTime = 0
                        doorclose.play()
                        door.rotation.set(0, 1.55, 0);
                        doorRotation = 0;
                    }
                }
            }
            else if(currentIntersect.object === tvBox){
                console.log('tv clicked')
            }

        }
    }) 

//CAMERAS
const camera = new THREE.PerspectiveCamera (35, sizes.width/sizes.height, .01, 1000)
camera.position.set(0,2.45,4)
camera.rotation.x = -.4
scene.add(camera)


const renderer = new THREE.WebGL1Renderer({
    canvas: canvas})
//const controls = new OrbitControls(camera, renderer.domElement)

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio (Math.min (window.devicePixelRatio, 2))
renderer.gammaOuput - true
renderer.shadowMap.enabled = true

let currentIntersect = null

function animate(){

    var timer = Date.now() * 0.0001;
    headspin()



    raycaster.setFromCamera(mouse,camera)

    const objectToTests = [headBox, tvBox, windowBox,doorBox]
    const intersects = raycaster.intersectObjects(objectToTests)

    for(const object of objectToTests){
        object.material.color.set('red')
    }

    for(const intersect of intersects){
      intersect.object.material.color.set('green')
      console.log('yes')
    }

    if(intersects.length){
        if(currentIntersect === null){
            //on.play();
            console.log('enter')
            
        }

        currentIntersect = intersects[0]
        
    } else {
        
        if(currentIntersect){
        //off.play();
        console.log('exit')
    }
    currentIntersect = null
    }

    


 //   if (intersects){
 //       headBox.material.color.set('green')
 //       console.log('yes')
//  } else {headBox.material.color.set('red'); console.log('no')}

    
    
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}
animate()