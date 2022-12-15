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
var glassTap = new Audio('./audio/glassTap.mp3');
var glassLand = new Audio('./audio/glassLand.mp3');

var justWind = new Audio('./audio/justWind.mp3');
justWind.loop = true

var music = new Audio('./audio/bgmusic.mp3');
music.loop = true

var tvon = new Audio('./audio/tvon.mp3');
var tvoff = new Audio('./audio/tvoff.mp3');

const fontLoader = new THREE.FontLoader()
const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()
const gltfloader = new GLTFLoader()
const colorchange = new THREE.Color(0xff0000)

var danb = new Audio('./audio/danb.mp3');
var dyldisb = new Audio('./audio/dyldisb.mp3');
var gingerb = new Audio('./audio/gingerb.mp3');
var joeyb = new Audio('./audio/joeyb.mp3');
var tylerb = new Audio('./audio/tylerb.mp3');
var toneb = new Audio('./audio/tylerb.mp3');



let GLASSHEADaudio;








//MATERICAL


const ENV = new THREE.TextureLoader().load( './imges/envmaper.png' );
ENV.mapping = THREE.SphericalReflectionMapping;
const glass = new THREE.MeshBasicMaterial({color:'green'})

glass.roughness = 0

glass.envMap = ENV
glass.reflectivity = 1
glass.reflective = true
glass.transparent = true
glass.opacity = .8



const m4 = new THREE.MeshBasicMaterial({color: "black"});

const m3 = new THREE.MeshStandardMaterial()
m3.roughness = 0.7

var video = document.getElementById( 'video' );


const videoTex = new THREE.TextureLoader().load( './imges/london.jpg' );
const num = 4;

videoTex.repeat.x = num
videoTex.repeat.y = num
videoTex.offset.x = -1.5
videoTex.offset.y = .050
videoTex.center.x = .5
videoTex.center.y = .5
videoTex.rotation = -1.57




const videoMat = new THREE.MeshBasicMaterial({map: videoTex,lightMapIntensity : 0})


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

    const textArray = ["GLASSHEAD","head.glass","I love GLASSHEAD","HEY its Tone Baloney"];
    const textString = textArray[Math.floor(Math.random() * textArray.length)];

   
let text;
fontLoader.load('/font/helvetiker_regular.typeface.json',(font) =>{
    const textgeo = new THREE.TextGeometry(textString,{
        font: font,
        size: 0.5,
        height: 0.2,
        curveSegments: .1,
        bevelEnabled: false,
        })
            
    text = new THREE.Mesh(textgeo,textMat)
        textgeo.center()
        scene.add(text)
        text.position.set(0,.1,.9)
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
let blinds;
let blindsopen;
  
gltfloader.load('./objects/roomofstuff.gltf', function(glb){

    room = glb.scene;
    
    
    
    groop1.add(room)
    Room = room.getObjectByName("Room");
    room.matrixAutoUpdate = false
    Room.traverse((o) => {if (o.isMesh) o.receiveShadow = true;});
    outside = room.getObjectByName("Window");
    
    blinds = room.getObjectByName("blinds");
    blindsopen = room.getObjectByName("blindsopen");
    blindsopen.visible = false

    sky = room.getObjectByName("sky");
    pillar = room.getObjectByName("Pillar");
    
    pillar.traverse((o) => {if (o.isMesh) o.receiveShadow = true;});
    door = room.getObjectByName("Door");   
    

});

let head;
gltfloader.load('./objects/head.gltf', function(glb){

    head = glb.scene;
    head.castShadow = true
    head.position.set(0,1.21,0)
    //head.traverse((o) => {if (o.isMesh) o.material.o = glass;});
    head.traverse((o) => {if (o.isMesh) o.castShadow = true;});
    groop1.add(head)
    
});

let TV;
let screen;

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
    const light3 = new THREE.DirectionalLight(0xffffff, .40)  
    const lightHelper = new THREE.PointLightHelper(light3);
    
    light3.position.x = (Math.random() - 0.5 * 1)
    light3.position.z = 3.5
    light3.position.y = 2
    //scene.add(lightHelper)
    light3.castShadow = true
    scene.add(light3)

    const lightPoint = new THREE.DirectionalLight(0xffffff, .30)  
    const pointHelper = new THREE.DirectionalLightHelper(lightPoint);
    lightPoint.rotation.set(.2,0,0)
    lightPoint.position.set(0,5,0)
    lightPoint.castShadow = true
    //scene.add(pointHelper)
    scene.add(lightPoint)
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
    let tvON = 0;

    window.addEventListener('click', (event) =>{
        if(currentIntersect){
            console.log(currentIntersect)

            if(currentIntersect.object === headBox){
                
                console.log('head clicked')
                
                glassTap.pause()
                glassTap.currentTime = 0
                glassTap.play()
                GLASSHEADaudio.play()
                if(head)head.position.set(0,1.3,0);

                setTimeout(function() {
                    if(head)head.position.set(0,1.21,0);


                glassLand.play()
                    }, 2000);
                    
            }else if(currentIntersect.object === windowBox){
                console.log('window clicked')
                
                if(outside){
                    if (windowPos === 0) {
                        outside.position.set(-.502,.6,-1.088);
                        blinds.visible = false
                        blindsopen.visible = true
                        windowclose.pause()
                        windowclose.currentTime = 0
                        windowopen.play()
                        justWind.play()
                        windowPos = 3;
                    } else {
                        outside.position.set(-.502,.432,-1.088);
                        blindsopen.visible = false
                        blinds.visible = true
                        windowPos = 0;
                        windowopen.pause()
                        windowopen.currentTime = 0
                        windowclose.play()
                        justWind.pause()
                        
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
                if(screen){
                    if (tvON === 0) {
                        tvoff.pause()
                        tvoff.currentTime = 0
                        tvon.play()
                        music.play()
                        screen.traverse((o) => {if (o.isMesh) o.material = videoMat;});
                        camera.position.set(1.26,.6,-.5)
                        camera.rotation.set(0,0,0)
                        tvON = 3;
                    } else {
                        music.pause()
                        music.currentTime = 0
                        tvon.pause()
                        tvon.currentTime = 0
                        tvoff.play()
                        screen.traverse((o) => {if (o.isMesh) o.material = m4;});
                        camera.position.set(0,2.45,4)
                        camera.rotation.x = -.4

                        tvON = 0;
                    }
                }
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
renderer.setPixelRatio (Math.min (window.devicePixelRatio, 1))
// renderer.gammaInput + true;
// renderer.gammaOutput = true;
 renderer.gammaFactor = 1.7;
renderer.outputEncoding = THREE.GammaEncoding
renderer.shadowMap.enabled = true
//renderer.shadowMap.type = THREE.PCFSoftShadowMap
//renderer.antialias = true
renderer.stencil = false
renderer.depth = false
renderer.logarithmicDepthBuffer = false

let currentIntersect = null

const target = new THREE.Vector3()





function animate(){


    const GLASSHEADArray = [danb,dyldisb,gingerb,joeyb,tylerb,toneb];

    GLASSHEADaudio = GLASSHEADArray[Math.floor(Math.random() * GLASSHEADArray.length)];

    var timer = Date.now() * 0.0001;
    headspin()





    target.x += ( mouse.x  - target.x ) * 1;
    target.y += (  mouse.y + 2 - target.y ) * 1;
    target.z = camera.position.z

    if (text)text.lookAt( target );


    raycaster.setFromCamera(mouse,camera)

    const objectToTests = [headBox, tvBox, windowBox,doorBox]
    const intersects = raycaster.intersectObjects(objectToTests)

    for(const object of objectToTests){
        object.material.color.set('red')
    }

    for(const intersect of intersects){
      intersect.object.material.color.set('green')
      console.log('INTERSECTING')
    }

    if(intersects.length){
        if(currentIntersect === null){
            //on.play();
            console.log('mouse enter event')
            
        }

        currentIntersect = intersects[0]
        
    } else {
        
        if(currentIntersect){
        //off.play();
        console.log('mouse exit event')
    }
    currentIntersect = null
    }
   
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}
animate()