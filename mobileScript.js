//import * as CANNON from 'https://unpkg.com/cannon@0.6.2/build/cannon.js';
import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js'
import {GLTFLoader} from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/GLTFLoader.js'
//import { DAT } from 'https://unpkg.com/dat.gui@0.7.9/build/dat.gui.js'
//import {OrbitControls} from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js'
//----------------------------------------------------------------------------------------------------





var back = document.createElement("div");

back.className = "popup";
back.style.border = "1px solid black";
back.style.backgroundColor = "white";
back.style.position = "fixed";
back.style.top = "50%";
back.style.left = "50%";
back.style.transform = "translate(-50%, -500%)";
back.style.padding = "0px";
back.style.zIndex = "1000";

var sext  = document.createElement("a");
sext.innerHTML = "back";
sext.style.fontFamily = 'Courier New'
sext.style.display = "block";
sext.style.fontSize = "28px";
sext.style.textAlign = "center";
sext.style.textDecoration = "none";
sext.style.color = "black";

let bCounter = 0

document.addEventListener('contextmenu', function(e) {
    
    bCounter++;
    
    var dontDoThat = document.createElement('div');
    
    dontDoThat.innerHTML = 'please dont press and hold';
    dontDoThat.style.color = 'white'

    if(bCounter > 10){
        dontDoThat.innerHTML = 'press and holds = (' + (bCounter) + ')';
    }

    if(bCounter > 100){
        dontDoThat.innerHTML = 'just stop theres nothing to see after this = (' + (bCounter) + ')';
    }
    if(bCounter > 1000){
        dontDoThat.innerHTML = 'why are you doing this??? (' + (bCounter) + ')';
    }
    if(bCounter > 10000){
        dontDoThat.innerHTML = 'ok you are clearly a cheater (' + (bCounter) + ')';
    }
    if(bCounter > 100000){
        dontDoThat.innerHTML = 'you belong in a mental hospital (' + (bCounter) + ')';
    }
    dontDoThat.style.position = 'absolute';
    dontDoThat.style.top = e.clientY - 20 + 'px';
    dontDoThat.style.left = e.clientX + 'px';
    dontDoThat.style.fontSize = '20px';
    console.log(bCounter)

    document.body.appendChild(dontDoThat);
    
    setTimeout(function() {
      document.body.removeChild(dontDoThat);
    }, 1000);

  });



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

var beetle1 = new Audio('./audio/beetle1.mp3');
var beetle2 = new Audio('./audio/beetle2.mp3');
var beetle3 = new Audio('./audio/beetle3.mp3');
var beetle4 = new Audio('./audio/beetle4.mp3');
var beetle5 = new Audio('./audio/beetle5.mp3');

var bsong1 = new Audio('./audio/bsong1.mp3');
var bsong2 = new Audio('./audio/bsong2.mp3');
var bsong3 = new Audio('./audio/bsong3.mp3');

var doyouwannabuy = new Audio('./audio/doyouwannabuy.mp3');
doyouwannabuy.loop = true



let GLASSHEADaudio;
let BEETLEaudio;
let SONGaudio;

let codeEnabled = false;

function disableCode() {
  codeEnabled = false;
}

function enableCode() {
  codeEnabled = true;
}










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
    invisibleRed.transparent = true
    invisibleRed.opacity = .5

    const headBox = new THREE.Mesh(headBoxGeometry,invisibleRed)
    headBox.position.set(-.65,1.5,-.5)
    headBox.rotation.set(0,1.28,0)
    scene.add(headBox)

    const invisibleblue = new THREE.MeshBasicMaterial({color: 'blue'});
    invisibleblue.visible = false
    invisibleblue.transparent = true
    invisibleblue.opacity = .5

    const ytbuttonGeometry = new THREE.BoxGeometry(.5,.12,.02)
    const ytbuttonBox = new THREE.Mesh(ytbuttonGeometry,invisibleblue)
    ytbuttonBox.position.set(0.57,0.18,-0.36)
    ytbuttonBox.rotation.set(0,5,0)
    scene.add(ytbuttonBox)

    const shirtGeometry = new THREE.BoxGeometry(.5,.6,.02)
    const shirtBox = new THREE.Mesh(shirtGeometry,invisibleblue)
    shirtBox.position.set(0,1,-2.6752665042877197)
    scene.add(shirtBox)

    const pictureBoxGeometry = new THREE.BoxGeometry(.60,1,.1)
    const pictureBox = new THREE.Mesh(pictureBoxGeometry,invisibleRed)
    pictureBox.position.set(-0.73,2.8,0.0)
    pictureBox.rotation.set(0,-1.8,0)
    scene.add(pictureBox)


    const tvBoxGeometry = new THREE.BoxGeometry(.65,.6,.16)
    const tvBox = new THREE.Mesh(tvBoxGeometry,invisibleRed)
    tvBox.position.set(0.6,0.4,-0.30)
    tvBox.rotation.set(0,2,0)
    scene.add(tvBox)

    const doorBoxGeometry = new THREE.BoxGeometry(.80,2,.16)
    const doorBox = new THREE.Mesh(doorBoxGeometry,invisibleRed)
    doorBox.position.set(0,.9,-1.8)
    scene.add(doorBox)

    const windowBoxGeometry = new THREE.BoxGeometry(.85,.69,.1)
    const windowBox = new THREE.Mesh(windowBoxGeometry,invisibleRed)
    windowBox.position.set(.8,1.35,-1)
    windowBox.rotation.set(0,-1.25,0)
    scene.add(windowBox)

    const textArray = ["GLASSHEAD","GLASSHEAD","GLASSHEAD","GLASSHEAD","GLASSHEAD","GLASSHEAD","head.glass","I love GLASSHEAD","HEY its Tone Baloney",'OF COURSE!','YUMMY!!!','DAD ASS SERIOUS',];
    const textString = textArray[Math.floor(Math.random() * textArray.length)];

   
let text;
fontLoader.load('/font/helvetiker_regular.typeface.json',(font) =>{
    const textgeo = new THREE.TextGeometry('textString',{
        font: font,
        size: 0.6,
        height: 0.2,
        curveSegments: .1,
        bevelEnabled: false,
        })
            
    text = new THREE.Mesh(textgeo,textMat)
        textgeo.center()
        scene.add(text)
        text.position.set(0,.1,.5)
        const size = .15
        text.scale.set(size,size,size)  

              
        }
)


let room;
let door;
let pillar;
let Room;
let sky;
let sky2;
let outside;
let blinds;
let blindsopen;
let shirt;
let photo;

  
gltfloader.load('./objects/mobileroomofstuff.gltf', function(glb){

    room = glb.scene;
    
    
    
    groop1.add(room)
    Room = room.getObjectByName("Room");
    room.matrixAutoUpdate = false

    outside = room.getObjectByName("Window");

    shirt = room.getObjectByName("shirt");
    
    blinds = room.getObjectByName("blinds");

    blindsopen = room.getObjectByName("blindsopen");

    photo = room.getObjectByName('beetle');
    console.log(photo.position)
    blindsopen.visible = false

    sky = room.getObjectByName("sky");
    sky2 = room.getObjectByName("sky2");
    //console.log(sky2.position)
    pillar = room.getObjectByName("Pillar");
    

    door = room.getObjectByName("Door");   

 

    

});

let head;
gltfloader.load('./objects/head.gltf', function(glb){

    head = glb.scene;

    head.position.copy({ x: -0.60, y: 1.16, z: -.65 })
    head.rotation.set(0,1,0)
    //head.traverse((o) => {if (o.isMesh) o.material.o = glass;});

    groop1.add(head)
    console.log(head.position)
    
});

let TV;
let screen;
let backTV;
let glassheadborder
let glassheadtext

gltfloader.load('./objects/mobileTV.gltf', function(glb){
    TV = glb.scene;
    screen = TV.getObjectByName("TVSCREEN");

    backTV = TV.getObjectByName("back");
    backTV.visible = false

    glassheadborder = TV.getObjectByName("glassheadborder");
    glassheadborder.visible = false

    glassheadtext = TV.getObjectByName("glassheadtext");
    glassheadtext.material.emissive.set('white')
    glassheadtext.visible = false

    
    groop1.add(TV)

});


function headspin(){

    if(sky)sky.rotation.z += .001
    if(sky2)sky2.rotation.z += .001
    
}

const groop1 = new THREE.Group()
scene.add(groop1)
    

//LIGHTS
for(let i = 0; i< 3; i++){
    const light3 = new THREE.DirectionalLight(0xffffff, .45)  
    const lightHelper = new THREE.PointLightHelper(light3);
    
    light3.position.x = (Math.random() - 0.5 * .1)
    light3.position.z = 3.5
    light3.position.y = 2
    //scene.add(lightHelper)
    scene.add(light3)

    const lightPoint = new THREE.DirectionalLight(0xffffff, .30)  
    const pointHelper = new THREE.DirectionalLightHelper(lightPoint);
    lightPoint.rotation.set(.2,0,0)
    lightPoint.position.set(0,5,0)

    //scene.add(pointHelper)

    
    const lightPoint2 = new THREE.PointLight(0xffffff, .15)  
    const pointHelper2 = new THREE.PointLightHelper(lightPoint2);
    lightPoint2.rotation.set(.2,0,0)
    lightPoint2.position.set(7.631196975708008,4.806565761566162,-5.424283027648926)

    //scene.add(pointHelper)
    scene.add(lightPoint2)
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

let clickEvent = new MouseEvent('click')


window.addEventListener('touchstart',  (event) => {




    if (event.changedTouches && event.changedTouches.length > 0) {
      const touch = event.changedTouches[0];
      mouse.x = touch.clientX / sizes.width * 2 - 1;
      mouse.y = - (touch.clientY / sizes.height) * 2 + 1;
    } 

   
  }, false);

  window.addEventListener('mousemove', (event) =>{
    mouse.x = event.clientX / sizes.width * 2 - 1
    mouse.y = - (event.clientY / sizes.height) * 2 + 1
    
    })





    let doorRotation = 0;
    let windowPos = 0;
    let tvON = 0;
    let headreset = 0
    let picturereset = 0




  

    
    window.addEventListener('touchstart',(o) =>{
        o.preventDefault()
        window.dispatchEvent(clickEvent);

    })



    window.addEventListener('click', (event) =>{
        
        
        

        //const tap = event.
   


        //console.log(currentIntersect)

        if(currentIntersect){
            //console.log(currentIntersect)

            if(currentIntersect.object === headBox && headreset === 0 ){
                
                //constole.log('head clicked')
                
                glassTap.pause()
                glassTap.currentTime = 0
                glassTap.play()
                GLASSHEADaudio.play()
                if(head)head.position.set(0,1.3,0);
                headreset = 1
                if(head)head.rotation.y --
                setTimeout(function() {
                    if(head)head.position.set(-0.6,1.16,-0.65);
                    


                    headreset = 0
                glassLand.play()
                
                    }, 2000);
                   
            }
            
            else if(currentIntersect.object === pictureBox && picturereset === 0 ){
                
                //constole.log('picture clicked')
                
                BEETLEaudio.play()
                SONGaudio.play()
                picturereset = 1

                camera.position.set(0,2.7,-.35)
                camera.rotation.set(0,1.20,0)
                camera.fov = 80
                camera.updateProjectionMatrix();


                setTimeout(function() {
                    picturereset = 0
                    camera.fov = 40
                    camera.updateProjectionMatrix();
                    camera.position.set(0, 2.8,4)
                    camera.rotation.set(-0.4,0,0)
                    }, 5000);
                    
            }

            else if(currentIntersect.object === windowBox){
                //console.log('window clicked')
                
                if(outside){
                    if (windowPos === 0) {
                        outside.position.set(-0.5039966106414795,0.63288713693618774,-0.39803987741470337);

                        blinds.visible = false
                        blindsopen.visible = true
                        windowclose.pause()
                        windowclose.currentTime = 0
                        windowopen.play()
                        justWind.play()
                        windowPos = 3;
                    } else {
                        outside.position.set(-0.5039966106414795,0.43288713693618774,-0.39803987741470337);
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
            else if(currentIntersect.object === doorBox && shirtBox){
                //console.log('door clicked')
                enableCode()
                doyouwannabuy.play()
                camera.position.set(0,3.6,4)
                camera.fov = 20
                camera.updateProjectionMatrix();
                window.addEventListener('click', (event) =>{
                    event.preventDefault();

                if(PurrentIntersect.object === shirtBox)
                {                 
                    window.location.assign('/store');
                    doyouwannabuy.pause()
                    setTimeout(function() {
                        disableCode()
                        dooropen.pause()
                        dooropen.currentTime = 0
                        doorclose.play()
                        door.rotation.set(0, 1.55, 0);
                        doorRotation = 0;
                        camera.fov = 40
                        camera.updateProjectionMatrix();
                        camera.position.set(0, 2.8,4)
                        camera.rotation.set(-0.4,0,0)


                      }, 1000);
                }
            })
                if(door){
                    if (doorRotation === 0) {
                        doorclose.pause()
                        doorclose.currentTime = 0
                        dooropen.play()
                        door.rotation.set(0, 3.5, 0);
                        doorRotation = 3;
                    } else {
                        camera.fov = 40
                        camera.updateProjectionMatrix();
                        camera.position.set(0, 2.8,4)
                        camera.rotation.set(-0.4,0,0)
                        doyouwannabuy.pause()
                        doyouwannabuy.currentTime = 0
                        dooropen.pause()
                        dooropen.currentTime = 0
                        doorclose.play()
                        door.rotation.set(0, 1.55, 0);
                        doorRotation = 0;
                    }
                }
            }
            else if(currentIntersect.object === tvBox){
                //console.log('tv clicked')
                if(screen){
                    if (tvON === 0) {

                        window.addEventListener('click', (event) =>{
                            event.preventDefault();
                        if(PurrentIntersect.object === ytbuttonBox)
                        {                 
                            window.location.assign('https://www.youtube.com/@GLASSHEAD/videos') - 1;
                            //console.log('button clicked')  
                            
                            
                            setTimeout(function() {
                                glassheadtext.visible = false
                                glassheadborder.visible = false
                                if(backTV)backTV.visible = false
                                tvBox.position.set(.6,.49,-.1)
                                tvBox.scale.set(1,1,1)
        
                                music.pause()
                                music.currentTime = 0
                                tvon.pause()
                                tvon.currentTime = 0
                                tvoff.play()
                                screen.traverse((o) => {if (o.isMesh) o.material = m4;});
                                camera.fov = 40
                                camera.updateProjectionMatrix();
                                camera.position.set(0, 2.8,4)
                                camera.rotation.set(-0.4,0,0)
        
                                tvON = 0; 
                              }, 1000);

                        }
                        })
                        enableCode()
                        tvBox.position.set(.5,.49,-.58)
                        tvBox.scale.set(.2,.2,.1)
                        if(backTV)backTV.visible = true
                        glassheadtext.visible = true
                        glassheadborder.visible = true
                        
                        tvoff.pause()
                        tvoff.currentTime = 0
                        tvon.play()
                        music.play()
                        screen.traverse((o) => {if (o.isMesh) o.material = videoMat;});
                        camera.fov = 99
                        camera.updateProjectionMatrix();
                        camera.position.set(0, .24,-.18)
                        camera.rotation.set(0,-1.265,0)
                        tvON = 3;
                    } else {
                       disableCode()
                        glassheadtext.visible = false
                        glassheadborder.visible = false
                        if(backTV)backTV.visible = false
                        tvBox.position.set(.6,.49,-.1)
                        tvBox.scale.set(1,1,1)

                        music.pause()
                        music.currentTime = 0
                        tvon.pause()
                        tvon.currentTime = 0
                        tvoff.play()
                        screen.traverse((o) => {if (o.isMesh) o.material = m4;});
                        camera.fov = 40
                        camera.updateProjectionMatrix();
                        camera.position.set(0, 2.8,4)
                        camera.rotation.set(-0.4,0,0)

                        tvON = 0;
                    }
                }
            }

        }
    }) 

//CAMERAS
const camera = new THREE.PerspectiveCamera (40, sizes.width/sizes.height, .01, 45)
camera.position.set(0,2.8,4)
camera.rotation.x = -.4
scene.add(camera)


const renderer = new THREE.WebGL1Renderer({
    canvas: canvas})
    
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio (Math.min (window.devicePixelRatio, 1))
    // renderer.gammaInput + true;
     renderer.gammaOutput = true;
    renderer.gammaFactor = 1.8;

    renderer.shadowMap.enabled = false
    //renderer.shadowMap.type = THREE.PCFSoftShadowMap
//renderer.antialias = true
renderer.stencil = false
renderer.depth = false
renderer.logarithmicDepthBuffer = false


const target = new THREE.Vector3()




//const controls = new OrbitControls(camera, renderer.domElement)

//---------------------------------------------------------------------------
let currentIntersect = 0
let PurrentIntersect = 0
let SurrentIntersect = 0

window.addEventListener("pageshow", function(event) {
    var historyTraversal = event.persisted || 
                           (typeof window.performance != "undefined" && 
                            window.performance.navigation.type === 2);
    if (historyTraversal) {
      // Reset the page
      window.location.reload();
    }
  });

function tvButtons(){
    const buttons = [ytbuttonBox,shirtBox]                  
    const mouseOn = raycaster.intersectObjects(buttons)

    for(const object of buttons)
    {object.material.color.set('blue')
    if(glassheadborder)glassheadborder.material.color.set('red')
    //console.log('not Hovering Tv Buttons')
    }

    for(const intersect of mouseOn)
    {
         
        if(glassheadborder)glassheadborder.material.color.set('green')
        
        intersect.object.material.color.set('green')
      //console.log('Hovering Tv Buttons')
    }

    if(mouseOn.length){
    if(PurrentIntersect === 0){
    //on.play();
    //console.log('mouse enter event')
        }
    PurrentIntersect = mouseOn[0]

}   else {
    
    if(PurrentIntersect){
        //off.play();
        console.log('mouse exit event')
        }
    PurrentIntersect = 0
    }
//-----------------------------------------------------------------------

window.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace') {
      // Do something when the backspace key is pressed
    }
    camera.fov = 40
    camera.updateProjectionMatrix();
    camera.position.set(0, 2.8,4)
    camera.rotation.set(-0.4,0,0)
})

}

console.log(tvBox.position)


function animate(){

    if(codeEnabled)
    {
        tvButtons()
    }

    const BEETLEArray = [beetle1,beetle2,beetle3,beetle4,beetle5,beetle1,beetle2,beetle3,beetle5,];
    BEETLEaudio = BEETLEArray[Math.floor(Math.random() * BEETLEArray.length)];

    const SONGArray = [bsong1,bsong2,bsong3];
    SONGaudio = SONGArray[Math.floor(Math.random() * SONGArray.length)];
    

const GLASSHEADArray = [danb,dyldisb,gingerb,joeyb,tylerb,toneb];
GLASSHEADaudio = GLASSHEADArray[Math.floor(Math.random() * GLASSHEADArray.length)];

    var timer = Date.now() * 0.0001;
    headspin()

//console.log(mouse)





target.x += ( mouse.x  - target.x ) * .1;
target.y += (  mouse.y + 2 - target.y ) * .1;
target.z = camera.position.z


if (text)text.lookAt( target );
if (shirt)shirt.rotation.y += .005;




    raycaster.setFromCamera(mouse,camera)

    const objectToTests = [headBox, tvBox, windowBox,doorBox,pictureBox]
    const intersects = raycaster.intersectObjects(objectToTests)

    for(const object of objectToTests){
        object.material.color.set('red')
    }

    for(const intersect of intersects){
      intersect.object.material.color.set('green')
      //console.log('INTERSECTING')
    }

    if(intersects.length){
        if(currentIntersect === null){
            //on.play();
            //console.log('mouse enter event')
            
        }

        currentIntersect = intersects[0]
        
    } else {
        
        if(currentIntersect){
        //off.play();
        //console.log('mouse exit event')
    }
    currentIntersect = null
    }
   
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}
animate()