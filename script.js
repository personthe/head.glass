//import * as CANNON from 'cannon';
import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js'
import {GLTFLoader } from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/GLTFLoader.js'
//three@0.126.1 orginal version
//import {OrbitControls} from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js'
//----------------------------------------------------------------------------------------------------

//const world = new CANNON.World()

let bCounter = 0

document.addEventListener('contextmenu', function(e) {
    
    bCounter++;
    
    var dontDoThat = document.createElement('div');
    
    dontDoThat.innerHTML = 'right clicking is for loosers';
    dontDoThat.style.color = 'white'

    if(bCounter > 100){
        dontDoThat.innerHTML = 'right-clicks = (' + (bCounter) + ')';
    }

    if(bCounter > 1000){
        dontDoThat.innerHTML = 'just stop theres nothing to see after this = (' + (bCounter) + ')';
    }
    if(bCounter > 10000){
        dontDoThat.innerHTML = 'why are you doing this??? (' + (bCounter) + ')';
    }
    if(bCounter > 100000){
        dontDoThat.innerHTML = 'ok you are clearly a cheater (' + (bCounter) + ')';
    }
    if(bCounter > 1000000){
        dontDoThat.innerHTML = 'you belong in a mental hospital (' + (bCounter) + ')';
    }
    dontDoThat.style.position = 'absolute';
    dontDoThat.style.top = e.clientY + 'px';
    dontDoThat.style.left = e.clientX + 'px';
    dontDoThat.style.fontSize = '20px';
    console.log(bCounter)

    document.body.appendChild(dontDoThat);
    
    setTimeout(function() {
      document.body.removeChild(dontDoThat);
    }, 3000);

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
var toneb = new Audio('./audio/tylerb.mp3');

var beetle1 = new Audio('./audio/beetle1.mp3');
var beetle2 = new Audio('./audio/beetle2.mp3');
var beetle3 = new Audio('./audio/beetle3.mp3');
var beetle4 = new Audio('./audio/beetle4.mp3');
var beetle5 = new Audio('./audio/beetle5.mp3');

var bsong1 = new Audio('./audio/bsong1.mp3');
var bsong2 = new Audio('./audio/bsong2.mp3');
var bsong3 = new Audio('./audio/bsong3.mp3');

var goin = new Audio('./audio/goin.mp3');
var goout = new Audio('./audio/goout.mp3');

var hello = new Audio('./audio/hello.mp3');



let GLASSHEADaudio;
let BEETLEaudio;
let SONGaudio;

function openWindow(url) {window.open(url, '_blank');} 

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
    invisibleRed.transparent = true
    invisibleRed.opacity = .5
    
    invisibleRed.visible = false
    const headBox = new THREE.Mesh(headBoxGeometry,invisibleRed)
    headBox.position.set(0,1.5,)
    scene.add(headBox)


    const tvBoxGeometry = new THREE.BoxGeometry(.65,.6,.16)
    const tvBox = new THREE.Mesh(tvBoxGeometry,invisibleRed)
    tvBox.position.set(1.27,.6,-1.5)
    scene.add(tvBox)

    const invisibleblue = new THREE.MeshBasicMaterial({color: 'blue'});
    invisibleblue.visible = false
    invisibleblue.transparent = true
    invisibleblue.opacity = .5

    const ytbuttonGeometry = new THREE.BoxGeometry(.5,.05,.02)
    const ytbuttonBox = new THREE.Mesh(ytbuttonGeometry,invisibleblue)
    ytbuttonBox.position.set(1.26,.41,-1.43)
    scene.add(ytbuttonBox)

    const helloGeometry = new THREE.BoxGeometry(.1,.09,.02)
    const helloBox = new THREE.Mesh(helloGeometry,invisibleblue)
    helloBox.position.set(2.15,.3,-.76)
    
    scene.add(helloBox)

    const cabBoxGeometry = new THREE.BoxGeometry(.7,.65,.13)
    const cabBox = new THREE.Mesh(cabBoxGeometry,invisibleRed)
    cabBox.position.set(2.3,.35,-.61)
    cabBox.rotation.set(0,-1.3,0)
    scene.add(cabBox)

    const doorBoxGeometry = new THREE.BoxGeometry(.80,2,.16)
    const doorBox = new THREE.Mesh(doorBoxGeometry,invisibleRed)
    doorBox.position.set(-1.1,.9,-1.8)
    scene.add(doorBox)

    const windowBoxGeometry = new THREE.BoxGeometry(.85,.69,.1)
    const windowBox = new THREE.Mesh(windowBoxGeometry,invisibleRed)
    windowBox.position.set(2.30,1.35,-1)
    windowBox.rotation.set(0,-1.25,0)
    scene.add(windowBox)

    const pictureBoxGeometry = new THREE.BoxGeometry(.60,1,.1)
    const pictureBox = new THREE.Mesh(pictureBoxGeometry,invisibleRed)
    pictureBox.position.set(-2.70,1.2,.59)
    pictureBox.rotation.set(0,-1.8,0)
    scene.add(pictureBox)

    const textArray = ["GLASSHEAD","head.glass","I love GLASSHEAD","HEY its Tone Baloney",'OF COURSE!','YUMMY!!!'];
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

let cabinet;

//songs
let helloCart;
let gtagCart;
let ntsCart;

//cart in pos
let cartIN;


//console buttons
let cartplay;
let cartpause;
let carteject;
let backCab;

gltfloader.load('./objects/MusicCabnet.gltf', function(glb){
    cabinet = glb.scene;  
    groop1.add(cabinet)

    helloCart = cabinet.getObjectByName("helloCart");

    gtagCart = cabinet.getObjectByName("gtagCart");
    gtagCart.visible = false
    ntsCart = cabinet.getObjectByName("ntsCart");
    ntsCart.visible = false
    cartIN = cabinet.getObjectByName("cartIN");
    cartIN.visible = false

    cartplay = cabinet.getObjectByName("play");
    cartplay.visible = false
    carteject = cabinet.getObjectByName("eject");
    carteject.visible = false
    cartpause = cabinet.getObjectByName("pause");
    cartpause.visible = false

    backCab = cabinet.getObjectByName("backCab");
    backCab.visible = false


})
    
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
let london;
  
gltfloader.load('./objects/roomofstuff.gltf', function(glb){

    room = glb.scene;
    
    
    
    groop1.add(room)
    shirt = room.getObjectByName("shirt");
    Room = room.getObjectByName("Room");
    room.matrixAutoUpdate = false
    

    outside = room.getObjectByName("Window");

    london = room.getObjectByName("london");
    london.traverse((o) => {if (o.isMesh) o.material.roughness = 100})

    blinds = room.getObjectByName("blinds");
    blindsopen = room.getObjectByName("blindsopen");
    blindsopen.visible = false

    sky = room.getObjectByName("sky");
    sky2 = room.getObjectByName("sky2");
    pillar = room.getObjectByName("Pillar");
    

    door = room.getObjectByName("Door");   
    

});

let head;
gltfloader.load('./objects/head.gltf', function(glb){

    head = glb.scene;

    head.position.set(0,1.175,0)
    //head.traverse((o) => {if (o.isMesh) o.material.o = glass;});

    groop1.add(head)
    
});

let TV;
let screen;
let backTV;
let glassheadborder
let glassheadtext

gltfloader.load('./objects/TV.gltf', function(glb){
    TV = glb.scene;
    screen = TV.getObjectByName("TVSCREEN");
    backTV = TV.getObjectByName("back");
    backTV.visible = false

    glassheadborder = TV.getObjectByName("glassheadborder");
    glassheadborder.visible = false

    glassheadtext = TV.getObjectByName("glassheadtext");
    glassheadtext.visible = false
    
    
    groop1.add(TV)

});


function headspin(){
    if(sky)sky.rotation.z += .001
    if(sky2)sky2.rotation.y -= .001
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

    scene.add(light3)

    const lightPoint = new THREE.DirectionalLight(0xffffff, .30)  
    const pointHelper = new THREE.DirectionalLightHelper(lightPoint);
    lightPoint.rotation.set(.2,0,0)
    lightPoint.position.set(0,5,0)

    //scene.add(pointHelper)
    scene.add(lightPoint)

    
}

window.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace') {
      // Do something when the backspace key is pressed
    }
    camera.position.set(0,2.45,4)
    camera.rotation.set(-.4,0,0)
})

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
    let cabON = 0;
    let headreset = 0
    let picturereset = 0

    window.addEventListener('click', (event) =>{
        if(currentIntersect){
            //constole.log(currentIntersect)

            if(currentIntersect.object === headBox && headreset === 0 ){
                
                //constole.log('head clicked')
                
                glassTap.pause()
                glassTap.currentTime = 0
                glassTap.play()
                GLASSHEADaudio.play()
                
                if(head)head.position.set(0,1.3,0);
                
                
                    if(head)head.rotation.y ++
                
                headreset = 1
                setTimeout(function() {
                    if(head)head.position.set(0,1.175,0);


                    headreset = 0
                glassLand.play()
                    }, 2000);
                    
            }
            
            else if(currentIntersect.object === pictureBox && picturereset === 0 ){
                
                //constole.log('picture clicked')
                
                BEETLEaudio.play()
                SONGaudio.play()
                picturereset = 1

                camera.position.set(2,1.20,1)
                camera.rotation.set(0,1.35,0)
                camera.fov = 20
                camera.updateProjectionMatrix();


                setTimeout(function() {
                    picturereset = 0
                    camera.position.set(0,2.45,4)
                    camera.rotation.set(-.4,0,0)
                    camera.fov = 35
                    camera.updateProjectionMatrix();
                    }, 5000);
                    
            }
            
            else if(currentIntersect.object === windowBox){
                //constole.log('window clicked')
                
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
                //constole.log('door clicked')
                if(door){
                    if (doorRotation === 0) {
                        doorclose.pause()
                        doorclose.currentTime = 0
                        dooropen.play()
                        door.rotation.set(0, 3.3, 0);
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
                //constole.log('tv clicked')
                if(screen){
                    
                    if (tvON === 0) {

                        
                        glassheadtext.visible = true
                        glassheadborder.visible = true

                        window.addEventListener('click', (event) =>{

                        if(PurrentIntersect.object === ytbuttonBox){                 
                        openWindow('https://www.youtube.com/@GLASSHEAD/videos');
                                            
                        //console.log('button clicked')

                        setTimeout(function() {
                            PurrentIntersect = null
                            tvBox.position.set(1.26,.6,-1.5)
                            tvBox.scale.set(1,.9,1.16)
                            glassheadtext.visible = false
                            glassheadborder.visible = false
                            if(backTV)backTV.visible = false
                            disableCode()
                            music.pause()
                            music.currentTime = 0
                            tvon.pause()
                            tvon.currentTime = 0
                            tvoff.play()
                            screen.traverse((o) => {if (o.isMesh) o.material = m4;});
                            camera.position.set(0,2.45,4)
                            camera.rotation.set(-.4,0,0)
    
                            tvON = 0;
                            
                            }, 1000);
                        
                        }
                        })


                        tvBox.position.set
                        (1.0758627653121948,
                        0.7370007038116455,
                        -1.4301272630691528)
                        tvBox.scale.set(.2,.2,.1)
                        if(backTV)backTV.visible = true
                        glassheadtext.visible = true
                        glassheadborder.visible = true
                        enableCode()
                        tvoff.pause()
                        tvoff.currentTime = 0
                        tvon.play()
                        music.play()
                        screen.traverse((o) => {if (o.isMesh) o.material = videoMat;});
                        camera.position.set(1.26,.6,-.5)
                        camera.rotation.set(0,0,0)
                        tvON = 3;

    


                    } else {
                        tvBox.position.set(1.26,.6,-1.5)
                        tvBox.scale.set(1,.9,1.16)
                        if(backTV)backTV.visible = false
                        glassheadtext.visible = false
                        glassheadborder.visible = false
                        
                        disableCode()
                        music.pause()
                        music.currentTime = 0
                        tvon.pause()
                        tvon.currentTime = 0
                        tvoff.play()
                        screen.traverse((o) => {if (o.isMesh) o.material = m4;});
                        camera.position.set(0,2.45,4)
                        camera.rotation.set(-.4,0,0)

                        tvON = 0;
                    }
                }
            }

            // click cab
            else if(currentIntersect.object === cabBox){
                console.log('cab clicked')
                enableCode()
                
                //cab toggle on
                
                if (cabON === 0) {
                if(backCab)backCab.visible = true
                camera.position.set(1,.4,-.15)
                camera.rotation.set(0,-1.27,0)
                cabBox.position.set(2.05,.608,-.75)
                cabBox.scale.set(.1,.1,.1)               
                cabON = 3;

                //hello cart cliciked
                window.addEventListener('click', (event) =>{
                           
                if(PurrentIntersect.object === helloBox){
                hello.play()
                goin.play()
                goout.pause()
                goout.currentTime = 0
                camera.position.set(1.8,.75,-.4)
                camera.fov = 65
                camera.updateProjectionMatrix();                              
                if(helloCart)helloCart.position.set(0.02808813750743866,1.0787887573242188,0.4893183708190918)
                console.log('hello')
                if(helloCart)helloCart.rotation.set(0,0,0)
                }
            })
        } 
                
                else {
                //cab toogle off reset & carts reset
                if(backCab)backCab.visible = false                       
                goout.play()

                goin.pause()
                goin.currentTime = 0

                hello.pause()
                hello.currentTime = 0

                disableCode()

                if(helloCart)helloCart.position.set(0.6845217347145081,-.26,0.5381841659545898)
                if(helloCart)helloCart.rotation.set(-1.550,0,0)

                cabBox.position.set(2.15,0.3,-0.76)
                cabBox.scale.set(1,1,1)

                camera.fov = 35
                camera.updateProjectionMatrix();
                camera.position.set(0,2.45,4)
                camera.rotation.set(-.4,0,0)

                cabON = 0;
                }
            }
        }

    }) 

//CAMERAS
const camera = new THREE.PerspectiveCamera (35, sizes.width/sizes.height, .01, 45)
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
renderer.shadowMap.enabled = false
//renderer.shadowMap.type = THREE.PCFSoftShadowMap
//renderer.antialias = true
renderer.stencil = false
renderer.depth = false
renderer.logarithmicDepthBuffer = false

let currentIntersect = null
let PurrentIntersect = null

const target = new THREE.Vector3()






//-----------------------------tv buttons---------------------------------------
function tvButtons(){
    const buttons = [ytbuttonBox,helloBox]                  
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


}

console.log(helloBox)
//--------------------------------------------------------------------
function animate(){
    headspin()
    if(codeEnabled){
        tvButtons()
    }

    requestAnimationFrame(animate)
    var timer = Date.now() * 0.0001;



    const GLASSHEADArray = [danb,dyldisb,gingerb,joeyb,tylerb,toneb];
    GLASSHEADaudio = GLASSHEADArray[Math.floor(Math.random() * GLASSHEADArray.length)];

    const BEETLEArray = [beetle1,beetle2,beetle3,beetle4,beetle5,beetle1,beetle2,beetle3,beetle5,];
    BEETLEaudio = BEETLEArray[Math.floor(Math.random() * BEETLEArray.length)];

    const SONGArray = [bsong1,bsong2,bsong3];
    SONGaudio = SONGArray[Math.floor(Math.random() * SONGArray.length)];



   



    if (shirt)shirt.rotation.y += .005;

    target.x += ( mouse.x  - target.x ) * .1;
    target.y += (  mouse.y + 2 - target.y ) * .1;
    target.z = camera.position.z


    if (text)text.lookAt( target );


    raycaster.setFromCamera(mouse,camera)

    const objectToTests = [headBox, tvBox, windowBox,doorBox,cabBox,pictureBox]
    const intersects = raycaster.intersectObjects(objectToTests)

    for(const object of objectToTests){
        if(backTV)backTV.material.color.set('red')
        if(backCab)backCab.material.color.set('red')
        object.material.color.set('red')
    }

    for(const intersect of intersects){
        if(backCab)backCab.material.color.set('green')
        if(backTV)backTV.material.color.set('green')
      intersect.object.material.color.set('green')
      //constole.log('INTERSECTING')
    }

    if(intersects.length){
        if(currentIntersect === null){
            //on.play();
            //constole.log('mouse enter event')
            
        }

        currentIntersect = intersects[0]
        
    } else {
        
        if(currentIntersect){
        //off.play();
        //constole.log('mouse exit event')
    }
    currentIntersect = null
    }
   

    renderer.render(scene, camera)
}
animate()