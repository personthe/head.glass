



import {GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import $ from 'jquery'







let BBODY = document.querySelector('body')




//three@0.126.1 orginal version
//import {OrbitControls} from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js'
//----------------------------------------------------------------------------------------------------

//const world = new CANNON.World()


//const gui = new GUI()


document.addEventListener('mousedown', function(event) {
    if (event.button === 1) {
      event.preventDefault();
    }
  });

  let element = document.getElementById('loader');
 


  element.classList.add('loader-done');



window.addEventListener('load', function() {



    setTimeout(function() {



        let div = document.querySelector('div');
        let h3 = document.querySelector('h3');
        let img = document.querySelector('img');
        h3.style.opacity = 0
        img.style.opacity = 0
        div.style.opacity = 0


        element.classList.add('new-class');
        


        console.log('\r\n                                                                           ,\u2584\u2584N\u2592\u2592\u2555\r\n                                                                      ,\u2554\u2566\u2563\u2593\u2563\u2563\u2593\u2592\u2592\u2592\u2592H\r\n                                                                  ,\u2566\u2563\u256C\u256C\u2563\u2563\u2562\u2592\u2592\u2592\u2562\u258C\u2592\u2592\u2591\u2592\u2592\r\n                                                              \u2553\u2584\u256C\u258C\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u256C\u2580\u256C\u2591A\u2592\u2518\r\n    do you want?                                             \u2554\u2584\u2593\u2563\u2563\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2563\u2563\u256C\u2580`\r\n                                                      \u2553\u2584\u2593\u258C\u2563\u256C\u2563\u2563\u2592\u2592\u2592\u2592\u2591\u2592\u2592\u2592\u256C\u255D`\r\n                                                 .\u2554\u2584\u2593\u2593\u258C\u2563\u2563\u2563\u2592\u2563\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u255C`\r\n                          ,\u2553\u2553\u2556\u2565\u2557NH\u2592\u2592\u2592H\u2556     .\u2553\u2584\u2593\u2593\u2593\u258C\u2563\u2563\u256C\u256C\u2592\u2592\u2562\u256C\u2592\u256C\u256C\u255D\u255C`\r\n                  .\u2557\u2563\u256C\u2563\u2563\u2563\u2563\u2563\u2592\u2592\u2563\u2563\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2592\u2562\u2556\u2584\u2593\u2593\u2593\u258C\u2563\u258C\u256C\u256C\u2592\u2592\u2592\u256C\u2592\u2592\u256B\u2593\u2593\u2580\u2320\r\n                 \u00DF\u2592\u2592\u2592\u2592\u2592\u2563\u256B\u2592\u2592\u256B\u2563\u256C\u2592\u2591\u2591\u2591\u2591\u2591\u2592\u2562\u256C\u2593\u258C\u2580\u256C\u2592\u2592\u2592\u2592\u256C\u2563\u2563\u256C\u2563\u256C\u2563\u2593\u2580\u255D\r\n               \u2553\u2551\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2563\u256C\u2592\u2592\u2592\u2592\u2592\u2563\u256C\u2593\u258C\u258C\u2563\u2563\u2563\u2562\u2563\u2563\u2563\u2563\u2563\u2563\u2563\u2593\u2593\u2593\u2580\r\n              @\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u256C\u2593\u258C\u258C\u256C\u2592\u2592\u2592\u2562\u2563\u2563\u2563\u255C\u2592\u2591\u2591\u2591\u2591\u255C\u2562\u2310\r\n            .\u2563\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2563\u2563\u256C\u256C\u2580\u2563\u2563\u256C\u2592\u2563\u2563\u2563\u2563\u256C\u2569\u2592\u2591\u2591`\u2591`   \u2591\u2591\u2551\r\n           ,\u2563\u2592\u2592\u2591\u2591\u2591\u2592\u2592\u256B\u256C\u2563\u2563\u256C\u2592\u2592\u2592\u2592\u2562\u2563\u2563\u2563\u2563\u256C\u2563\u2592\u2591\u2591`` ,    .\u2591\u2591\u256B\r\n          \u2553\u2592\u2592\u2591\u2591\u2592\u256B\u256C\u2563\u256C\u2592\u2592\u2592\u2592\u2592\u2592\u2562\u2563\u2563\u2563\u2563\u2563\u2563\u2592\u2591\u2591`    ,\u2591 .\u2591\u2591\u2591\u2592\u256B\u256CW\r\n         g\u2592\u256C\u2563\u2562\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2562\u2563\u2592\u256C\u2563\u2563\u2563\u2563\u2563\u2568\u2592\u2591\u2591`    .:\u2591\u2591\u2591\u2591\u2591\u2592\u2592\u2592\u2592\u2562\u256C,\r\n        \u2554\u256C\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2563\u2563\u2562\u2562\u2563\u2563\u2563\u2562\u2592\u2591\u2591\"\'\'.\u2500.  ...,\u2591\u2591\u2591\u2591\u2592\u2591\"\u2591\u2591\u2592\u2562\u2563\u256C\u2555\r\n       \u2553\u2592\u2592\u256C\u2563\u2563\u2563\u2563\u2563\u2563\u2563\u2563\u2563\u2563\u2563\u256B\u2592\u2591\u2591``      ```\'\'.,\u2591\u2591\u2591\"`.,,\u2591\u2592\u2592\u2591\u2592\u2563\r\n      ,\u2563\u256C\u2562\u2563\u2563\u2563\u2563\u256C\u2563\u256C\u2563\u2592\u2592\u2592\u2591\u2591\u2591`             ,\u2591\u2591\u2591`  ..,\u2591\u2592\u2591\u2591\u2591\u2591\u2592\u2562\r\n     \u2553\u256C\u256C\u2580\u2580\u2580\u2563\u256C\u2592\u2592\u2592\u2591\u2591\u2591\u2591\u2591\"`             .\u2591\u2518`      .:\u2592\u2591`\':\u2591\u2592\u2563\u2551\r\n    \u250C\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591:\u2591,           .,\u2591`        .,\u2591\u2591  ..\u2591\u2592\u2592\u2591[\r\n    \u2559\u2592\u2592\u2592\u2592\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591,\'....  ..,\u2591\u2591`          .\u2591\u2591    .\u2591\u2592\u2591\u2591\u2592\r\n    \u2551\u2592\u2592\u2592\u2591\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591            ,\u2591\u2591   ..,\u2591\u2592`:\u2591`\r\n    ]\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591`          `.,,\u2591\u2591    ,\u2591\u2591\u2592\u2591.,\u2591`\r\n     \u2592\u2592\u2591\u2591\u2591\u2592\u2592\u2592\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2592\u2591\u2591\u2591\u2591,\'....,......  :\u2591\u2591\"   .,,\u2591\u2591\u2592 .\u2591\u2591,\r\n      \u255C\u2592\u2592\u2592\u2591\u2591\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2591\u2591\u2591\u2591\u2591,,...,::\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2592\u2591.   .,:\u2591\u2591\u2592\u2591 .\u2591\u2591\u255B\r\n        \u2559\u2562\u2563\u2592\u2592\u2591\u2591\u2591,,,,:\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2592\u255C\u2518  .:,:\u2591\u2591\u2591\u2592\u2592\u2591,\u2591\u2591\u2592\u255C\r\n           `\u2559\u2551\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2592\u2592\u2591\u2591\u2591\u2591\u2592\u2592\u2592\u2592\u2592\u2592\u255C\",  ..,,\u2591\u2591\u2592\u2592\u2568\u2591:\u2591\u2591\u2592\u2518\r\n              \u2559\u2592\u2592\u2592\u2592\u2591\u2591\u2591\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2551\u255C\u2591\u2591\u2591\u2591,,\u2591\u2591\u2591\u2591\u2591\u2592\u2592\u2592\u2592\u2591:,\u2591\u2591\u2592\u255C\r\n                \u2514\u255A\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2591\u2591\u2592\u2592\u2592\u2592\u2551\u2551\u2551\u255D\u2568\u2592\u2591\u2591\u2591\u2592\u2592\u2592\u255C`\r\n                   `\u2559\u2559\u255C\u255C\u2559`\u2559\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2563\u2563\u2562\u2592\u2591\u2591\u2591\u2591\u2592\u2592\u2584\u256C\u2580\r\n                             ``````\u2514\u255D\u2592\u2592\u2592\u2563\u256C\u2569\u255D\'\r\n    \r\n---\r\nhead.glass\r\n');


      }, 4000);
    // Your code here.


  });

  




let bCounter = 0

document.addEventListener('contextmenu', function(e) {
    
    bCounter++;
    
    var dontDoThat = document.createElement('div');
    
    dontDoThat.innerHTML = 'right clicking is for loosers';
    dontDoThat.style.color = 'white'

    if(bCounter > 30){
        dontDoThat.innerHTML = 'right-clicks = (' + (bCounter) + ')';
    }

    if(bCounter > 300){
        dontDoThat.innerHTML = 'just stop theres nothing to see after this = (' + (bCounter) + ')';
    }
    if(bCounter > 3000){
        dontDoThat.innerHTML = 'why are you doing this??? (' + (bCounter) + ')';
    }
    if(bCounter > 30000){
        dontDoThat.innerHTML = 'ok you are clearly a cheater (' + (bCounter) + ')';
    }
    if(bCounter > 300000){
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
    }, 3000);

  });

//----------------------------------------------------------------------------------------------------  
var off = new Audio('./audio/off.mp3');
var on = new Audio('./audio/on.mp3');



var pig = new Audio('./audio/pig.mp3');

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

var lightOn = new Audio('./audio/lightOn.mp3');
var lightOff = new Audio('./audio/lightOff.mp3');

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

var nothingtosay = new Audio('./audio/nothingtosay.mp3');

var gtag = new Audio('./audio/gtag.mp3');

var cottonmouth = new Audio('./audio/cottonmouth.mp3');

var wiiFit = new Audio('./audio/WiiFit.mp3');

var thiccLikeMewTwo = new Audio('./audio/thiccLikeMewTwo.mp3');

var familygamenight = new Audio('./audio/familygamenight.mp3')

var liverpool = new Audio('./audio/liverpool.mp3')

var flipflopsintherain = new Audio('./audio/flipflopsintherain.mp3')

var creativemode = new Audio('./audio/creativemode.mp3')

var hatersay = new Audio('./audio/hatersay.mp3')

var Philiphoffmin = new Audio('./audio/Philiphoffmin.mp3')

var UP = new Audio('./audio/UP.mp3')

var DOWN = new Audio('./audio/DOWN.mp3')

var bars = new Audio('./audio/bars.mp3')

let SongsVolume = 

    [
    gtag,
    liverpool,
    familygamenight,
    creativemode,
    bars,
    wiiFit,
    thiccLikeMewTwo,
    hello,
    nothingtosay,
    flipflopsintherain,
    cottonmouth,
    hatersay
    ,Philiphoffmin,
    UP,
    DOWN
    ];



let GLASSHEADaudio;
let BEETLEaudio;
let SONGaudio;

var doyouwannabuy = new Audio('./audio/doyouwannabuy.mp3');
doyouwannabuy.loop = true

let enableSelectButtonCode = false;

function disableSelectButtonCode() {
  enableSelectButtonCode = false;
}

function enableCode() {
  enableSelectButtonCode = true;
}

let enableHoverCode = false;

function DisableHoverCode() {
  enableHoverCode = false;
}

function enableCode2() {
  enableHoverCode = true;
}

function DisableYeahCode() {
  enableYeahCode = false;
}

function enableYeahCode() {
  enableYeahCode = true;
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

//boxes
    const headBoxGeometry = new THREE.BoxGeometry(.47,.6,.47)
    const invisibleRed = new THREE.MeshBasicMaterial({color: 'red'});
    invisibleRed.transparent = true
    invisibleRed.opacity = .5
    
    invisibleRed.visible = false
    //gui.add(invisibleRed,'visible',0,1,1).name('Red Debug')
    const headBox = new THREE.Mesh(headBoxGeometry,invisibleRed)
    headBox.position.set(0,1.5,)
    scene.add(headBox)


    const tvBoxGeometry = new THREE.BoxGeometry(.65,.6,.16)
    let tvBox = new THREE.Mesh(tvBoxGeometry,invisibleRed)
    tvBox.position.set(1.27,.6,-1.5)
    scene.add(tvBox)

    const mapGeometry = new THREE.BoxGeometry(.620,.5,.1)
    const mapBox = new THREE.Mesh(mapGeometry,invisibleRed)
    mapBox.position.set(0.698,1.448,-1.84)

    scene.add(mapBox)

    
    
    const SwitchGeometry = new THREE.BoxGeometry(.1,.25,.1)
    const SwitchBox = new THREE.Mesh(SwitchGeometry,invisibleRed)
    SwitchBox.position.set(-0.51,1.015,-1.777)

    scene.add(SwitchBox)

    const invisibleblue = new THREE.MeshBasicMaterial({color: 'blue'});
    invisibleblue.visible = false
    //gui.add(invisibleblue,'visible',0,1,1).name('Blue Debug')
    invisibleblue.transparent = true
    invisibleblue.opacity = .5

    const ytbuttonGeometry = new THREE.BoxGeometry(.5,.05,.02)
    const ytbuttonBox = new THREE.Mesh(ytbuttonGeometry,invisibleblue)
    ytbuttonBox.position.set(1.26,.41,-1.43)
    scene.add(ytbuttonBox)

    const shirtGeometry = new THREE.BoxGeometry(.5,.6,.02)
    const shirtBox = new THREE.Mesh(shirtGeometry,invisibleblue)
    shirtBox.position.set(-1.2376863956451416,1,-2.6752665042877197)
    scene.add(shirtBox)

    const helloGeometry = new THREE.BoxGeometry(.1,.09,.02)
    const helloBox = new THREE.Mesh(helloGeometry,invisibleblue)
    helloBox.position.set(2.15,.3,-.75)
    helloBox.rotation.set(0,-.1,0)
    
    scene.add(helloBox)

    const ejectGeometry = new THREE.BoxGeometry(.025,.012,.035)
    const ejectBox = new THREE.Mesh(ejectGeometry,invisibleblue)
    ejectBox.position.set(2.1,0.656,-0.57)
    ejectBox.rotation.set(0,0.2639,0)

    scene.add(ejectBox)

    const pPauseGeometry = new THREE.BoxGeometry(.025,.012,.035)
    const pPauseBox = new THREE.Mesh(pPauseGeometry,invisibleblue)
    pPauseBox.position.set(2.1,0.6599,-0.525)
    pPauseBox.rotation.set(0,0.2639,0)

    scene.add(pPauseBox)
    const pPlayGeometry = new THREE.BoxGeometry(.025,.012,.035)
    const pPlayBox = new THREE.Mesh(pPlayGeometry,invisibleblue)
    pPlayBox.position.set(2.1,0.663,-0.48300000000000004)
    pPlayBox.rotation.set(0,0.2639,0)

    scene.add(pPlayBox)

  
    const ntsBox = new THREE.Mesh(helloGeometry,invisibleblue)
    ntsBox.position.set(2.15,.3,-.660)
    ntsBox.rotation.set(0,-.1,0)
    
    scene.add(ntsBox)

    
    const gtagBox = new THREE.Mesh(helloGeometry,invisibleblue)
    gtagBox.position.set(2.18,.3,-.592)
    gtagBox.rotation.set(0,-.1,0)
    
    scene.add(gtagBox)

    
    
    const thiccLikeMewBox = new THREE.Mesh(helloGeometry,invisibleblue)
    thiccLikeMewBox.position.set(2.22,.3,-.525)
    thiccLikeMewBox.rotation.set(0,-.1,0)

    scene.add(thiccLikeMewBox)

    const volumeGeometry = new THREE.BoxGeometry(.01,.02,.02)
    const volumebuttonBox = new THREE.Mesh(volumeGeometry,invisibleblue)
    volumebuttonBox.position.set(2.128,.645,-.444)
    volumebuttonBox.rotation.set(0,.3,0)
    scene.add(volumebuttonBox)
    
    const volumebuttonBox2 = new THREE.Mesh(volumeGeometry,invisibleblue)
    volumebuttonBox2.position.set(2.09,.645,-.62)
    volumebuttonBox2.rotation.set(0,.3,0)
    
    scene.add(volumebuttonBox2)

    
    const wiiFitBox = new THREE.Mesh(helloGeometry,invisibleblue)
    wiiFitBox.position.set(2.22,.3,-.455)
    wiiFitBox.rotation.set(0,-.1,0)
    
    scene.add(wiiFitBox)
    
    const familygamenightBox = new THREE.Mesh(helloGeometry,invisibleblue)
    familygamenightBox.position.set(2.22,.3,-.39)
    familygamenightBox.rotation.set(0,-.1,0)
    
    scene.add(familygamenightBox)
    
    const cabBoxGeometry = new THREE.BoxGeometry(.7,.65,.13)
    const cabBox = new THREE.Mesh(cabBoxGeometry,invisibleRed)
    cabBox.position.set(2.327,0.306,-0.58)
    cabBox.rotation.set(0,-1.3,0)
    scene.add(cabBox)

    
    const doorBoxGeometry = new THREE.BoxGeometry(.80,2,.16)
    const doorBox = new THREE.Mesh(doorBoxGeometry,invisibleRed)
    doorBox.position.set(-1.1,.9,-1.8)
    scene.add(doorBox)
    
    const cottonMouthBox = new THREE.Mesh(helloGeometry,invisibleblue)
    cottonMouthBox.position.set(2.1,.15,-.73)
    cottonMouthBox.rotation.set(0,0,0)
    
    scene.add(cottonMouthBox)

    const liverpoolbox = new THREE.Mesh(helloGeometry,invisibleblue)
    liverpoolbox.position.set(2.1,.15,-.645)
    liverpoolbox.rotation.set(0,0,0)
    
    scene.add(liverpoolbox)

    const flipflopsintherainBox = new THREE.Mesh(helloGeometry,invisibleblue)
    flipflopsintherainBox.position.set(2.1,.155,-.575)
    flipflopsintherainBox.rotation.set(0,0,0)
    
    scene.add(flipflopsintherainBox)

    const creativemodeBox = new THREE.Mesh(helloGeometry,invisibleblue)
    creativemodeBox.position.set(2.22,.3,-.335)
    creativemodeBox.rotation.set(0,-.1,0)
    
    scene.add(creativemodeBox)

    const hatersayBox = new THREE.Mesh(helloGeometry,invisibleblue)
    hatersayBox.position.set(2.1,.16,-.51)
    hatersayBox.rotation.set(0,0,0)
    
    scene.add(hatersayBox)

    const PhiliphoffminBox = new THREE.Mesh(helloGeometry,invisibleblue)
    PhiliphoffminBox.position.set(2.1,.16,-.45)
    PhiliphoffminBox.rotation.set(0,0,0)
    
    scene.add(PhiliphoffminBox)

    const barsBox = new THREE.Mesh(helloGeometry,invisibleblue)
    barsBox.position.set(2.1,.16,-.385)
    barsBox.rotation.set(0,-.2,0)
    
    scene.add(barsBox)

    function RESETCARTS(){
        if(helloCart)helloCart.position.set(0.6845217347145081,-.20,0.5381841659545898)
        if(helloCart)helloCart.rotation.set(0,-1.1,0)

        if(ntsCart)ntsCart.position.set(0.4,-.20,0.6)
        if(ntsCart)ntsCart.rotation.set(0,-1.1,0)

        if(gtagCart)gtagCart.rotation.set(0,-1.1,3.14)
        if(gtagCart)gtagCart.position.set(.15,-.20,0.6)
        
        if(cottonMouthCart)cottonMouthCart.rotation.set(0,-1.25,3.14)
        if(cottonMouthCart)cottonMouthCart.position.set(0.657220184803009,-0.7026517987251282,0.718595027923584)
        
        if(wiiFitCart)wiiFitCart.rotation.set(0,-1.1,3.14)
        if(wiiFitCart)wiiFitCart.position.set(-0.3143464922904968,-0.19119787216186523,0.5665731430053711)

        if(thiccLikeMewTwoCart)thiccLikeMewTwoCart.rotation.set(0,-1.1,3.14)
        if(thiccLikeMewTwoCart)thiccLikeMewTwoCart.position.set(-0.08537335693836212,-0.18832868337631226,0.5930662155151367)

        if(familygamenightCart)familygamenightCart.rotation.set(0,-1.1,3.14)
        if(familygamenightCart)familygamenightCart.position.set(-0.5208156704902649,-0.1916351318359375,0.5428767204284668)
        
        if(flipflopsintherainCart)flipflopsintherainCart.rotation.set(0,-1.1,3.14)
        if(flipflopsintherainCart)flipflopsintherainCart.position.set(0.18647770583629608,-0.7092075347900391,0.708808422088623)

        if(creativemodeCart)creativemodeCart.rotation.set(0,-1.2,3.14)
        if(creativemodeCart)creativemodeCart.position.set(-0.7084792256355286,-0.19124191999435425,0.5211467742919922)
        
        if(hatersayCart)hatersayCart.rotation.set(0,-1.2,3.14)
        if(hatersayCart)hatersayCart.position.set(-0.025738433003425598,-0.7035372257232666,0.7074694633483887)
        
        if(PhiliphoffminCart)PhiliphoffminCart.rotation.set(0,-1.2,3.14)
        if(PhiliphoffminCart)PhiliphoffminCart.position.set(-0.22537000477313995,-0.7094168066978455,0.6649813652038574)
        
        if(barsCart)barsCart.rotation.set(0,-1.2,3.14)
        if(barsCart)barsCart.position.set(-0.452989399433136,-0.7069311141967773,0.6877660751342773)

        if(liverpoolCart)liverpoolCart.rotation.set(0,-1.2,3.14)
        if(liverpoolCart)liverpoolCart.position.set(0.4148997664451599,-0.707334041595459,0.7095093727111816)
        }
//--------------------------------------------------------------------------------

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

    const textArray = ["GLASSHEAD","GLASSHEAD","GLASSHEAD","GLASSHEAD","GLASSHEAD","GLASSHEAD","head.glass","I love GLASSHEAD","HEY its Tone Baloney",'OF COURSE!','YUMMY!!!','DAD ASS SERIOUS',];
    const textString = textArray[Math.floor(Math.random() * textArray.length)];

   
let text;
fontLoader.load('/font/helvetiker_regular.typeface.json',(font) =>{
    const textgeo = new THREE.TextGeometry(textString,{
        font: font,
        size: 0.7,
        height: 0.2,
        curveSegments: .1,
        bevelEnabled: false,
        })
            
    text = new THREE.Mesh(textgeo,textMat)
        textgeo.center()
        scene.add(text)
        text.position.set(0,.1,.6)
        const size = .15
        text.scale.set(size,size,size)  

              
        }
)

let cabinet;


//musiccab
//songs
let helloCart;
let gtagCart;
let ntsCart;
let cottonMouthCart
let wiiFitCart
let thiccLikeMewTwoCart
let familygamenightCart
let flipflopsintherainCart
let liverpoolCart
let creativemodeCart
let hatersayCart
let PhiliphoffminCart
let barsCart

//cart in pos
let cartIN;


//console buttons
let cartplay;
let cartpause;
let carteject;
let volumebutton;
let backCab;


gltfloader.load('./objects/MusicCabnet.gltf', function(glb){
    cabinet = glb.scene;  
    groop1.add(cabinet)

    helloCart = cabinet.getObjectByName("helloCart");

    gtagCart = cabinet.getObjectByName("gtagCart");
    //gtagCart.visible = false
    ntsCart = cabinet.getObjectByName("ntsCart");
    //ntsCart.visible = false
    cartIN = cabinet.getObjectByName("cartIN");
    cartIN.visible = false

    cottonMouthCart = cabinet.getObjectByName("cottonMouth");

    wiiFitCart = cabinet.getObjectByName("wiiFit");
    //wiiFitCart.visible = false

    thiccLikeMewTwoCart = cabinet.getObjectByName("thiccLikeMew");
    //thiccLikeMewTwoCart.visible = false

    liverpoolCart = cabinet.getObjectByName("liverpool");
    //liverpoolCart.visible = false

    familygamenightCart = cabinet.getObjectByName("familygamenight");
    //familygamenightCart.visible = false

    flipflopsintherainCart = cabinet.getObjectByName("flipflopsintherain");
    //flipflopsintherainCart.visible = false

    creativemodeCart = cabinet.getObjectByName("creativeModeCart");
    //flipflopsintherainCart.visible = false

    hatersayCart = cabinet.getObjectByName("hatersayCart");
    //flipflopsintherainCart.visible = false

    PhiliphoffminCart = cabinet.getObjectByName("piliphoffmanCart");
    //flipflopsintherainCart.visible = false

    barsCart = cabinet.getObjectByName("barsCart");
    //flipflopsintherainCart.visible = false


    cartplay = cabinet.getObjectByName("play");
    //cartplay.visible = false
    //cartplay.traverse((o) => {if (o.isMesh) o.material.roughness = 1})


    carteject = cabinet.getObjectByName("eject");
    //carteject.visible = false

    cartpause = cabinet.getObjectByName("pause");
    //cartpause.visible = false

    volumebutton = cabinet.getObjectByName("volumebutton");
    //cartpause.visible = false

    backCab = cabinet.getObjectByName("backCab");
    backCab.visible = false


    //make button // emissive.set('white')})


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
    london.traverse((o) => {if (o.isMesh) o.material.roughness = 30})

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
    glassheadtext.material.emissive.set('white')
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
let light3 = new THREE.DirectionalLight(0xffffff, 1.5)  
let lightPoint  
for(let i = 0; i< 3; i++){
    const lightHelper = new THREE.PointLightHelper(light3);
    
    light3.position.x = (Math.random() - 0.5 * 1)
    light3.position.z = 3.5
    light3.position.y = 2
    //scene.add(lightHelper)

    scene.add(light3)

    lightPoint = new THREE.DirectionalLight(0xffffff, .30)  
    const pointHelper = new THREE.DirectionalLightHelper(lightPoint);
    lightPoint.rotation.set(.2,0,0)
    lightPoint.position.set(0,5,0)
    //scene.add(pointHelper)
    scene.add(lightPoint)   
    
    
}


 /*window.addEventListener('keydown', function(event) {
     if (event.key === 'Backspace') {
       // Do something when the backspace key is pressed
     }
     camera.position.set(0,2.45,4)
     camera.rotation.set(-.4,0,0)
 })*/

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
                doyouwannabuy.play()
                if(PurrentIntersect.object === shirtBox)
                {                 
                    window.location.assign('store');
                
                }
                if(door){
                    if (doorRotation === 0) {
                        enableSelectButtonCode = true;



                        doorclose.pause()
                        doorclose.currentTime = 0
                        dooropen.play()
                        door.rotation.set(0, 3.3, 0);
                        doorRotation = 3;
                    } else {
                        doyouwannabuy.pause()
                        doyouwannabuy.currentTime = 0
                        enableSelectButtonCode = false;
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
                        window.location.assign('https://www.youtube.com/@GLASSHEAD/videos') - 1;
                                            
                        //console.log('button clicked')       
                        }
                        })
                        enableCode()


                        tvBox.position.set
                        (1.0758627653121948,
                        0.7370007038116455,
                        -1.4301272630691528)
                        tvBox.scale.set(.2,.2,.1)
                        if(backTV)backTV.visible = true
                        glassheadtext.visible = true
                        glassheadborder.visible = true
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
                        
                        disableSelectButtonCode()
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


            else if(currentIntersect.object === mapBox)
            {   
                pig.pause()  
                pig.currentTime = 0
                pig.play()                          
            window.open('http://135.148.29.252:7341/#world:-121:0:291:1500:0:0:0:0:perspective');
            } 

            // click cab //musiccab logic
            else if(currentIntersect.object === cabBox){
                //console.log('cab clicked')
                enableCode()
                enableCode2()
        
                enableYeahCode = true
                
                

                
                if (cabON === 0) {
                    RESETCARTS()
                    
                for (var i = 0; i < SongsVolume.length; i++) 
                {

                    goout.play()
                    SongsVolume[i].pause()
                    SongsVolume[i].currentTime = 0}
                
                //cab toggle on
                    
                if(backCab)backCab.visible = true
                camera.position.set(1,.4,-.15)
                camera.rotation.set(0,-1.27,0)
                cabBox.position.set(2.04,0.6,-0.76)
                cabBox.scale.set(.1,.1,.1)               
                cabON = 3;



                //hello cart cliciked

                window.addEventListener('click', (event) =>{
                           
                if(PurrentIntersect.object === helloBox){
                DisableHoverCode()
                hello.play()
                goin.play()
                goout.pause()
                goout.currentTime = 0
                camera.position.set(1.8,.75,-.4)
                camera.fov = 65
                camera.updateProjectionMatrix();                              
                if(helloCart)helloCart.position.set(0.02808813750743866,1.0787887573242188,0.4893183708190918)
                //console.log('hello')
                if(helloCart)helloCart.rotation.set(0,0,0)
                }

                if(PurrentIntersect.object === ntsBox){
                DisableHoverCode()
                nothingtosay.play()
                goin.play()
                goout.pause()
                goout.currentTime = 0
                camera.position.set(1.8,.75,-.4)
                camera.fov = 65
                camera.updateProjectionMatrix();                              
                if(ntsCart)ntsCart.position.set(0.02808813750743866,1.0787887573242188,0.4893183708190918)
                //console.log('nts')
                if(ntsCart)ntsCart.rotation.set(0,0,0)
                }

                if(PurrentIntersect.object === cottonMouthBox){
                DisableHoverCode()
                cottonmouth.play()
                goin.play()
                goout.pause()
                goout.currentTime = 0
                camera.position.set(1.8,.75,-.4)
                camera.fov = 65
                camera.updateProjectionMatrix();                              
                if(cottonMouthCart)cottonMouthCart.position.set(0.02808813750743866,1.1,0.4893183708190918)
                //console.log('nts')
                if(cottonMouthCart)cottonMouthCart.rotation.set(0,0,3.14)
                }

                
                if(PurrentIntersect.object === gtagBox){
                DisableHoverCode()
                gtag.play()
                goin.play()
                goout.pause()
                goout.currentTime = 0
                camera.position.set(1.8,.75,-.4)
                camera.fov = 65
                camera.updateProjectionMatrix();
                                          
                if(gtagCart)gtagCart.position.set(0.02808813750743866,1.1,0.4893183708190918)
                //console.log('nts')
                if(gtagCart)gtagCart.rotation.set(0,0,3.14)
                }

                if(PurrentIntersect.object === wiiFitBox){
                DisableHoverCode()
                wiiFit.play()
                goin.play()
                goout.pause()
                goout.currentTime = 0
                camera.position.set(1.8,.75,-.4)
                camera.fov = 65
                camera.updateProjectionMatrix();
                                          
                if(wiiFitCart)wiiFitCart.position.set(0.02808813750743866,1.1,0.4893183708190918)
                //console.log('nts')
                if(wiiFitCart)wiiFitCart.rotation.set(0,0,3.14)
                }

                if(PurrentIntersect.object === thiccLikeMewBox){
                DisableHoverCode()
                thiccLikeMewTwo.play()
                goin.play()
                goout.pause()
                goout.currentTime = 0
                camera.position.set(1.8,.75,-.4)
                camera.fov = 65
                camera.updateProjectionMatrix();
                                          
                if(thiccLikeMewTwoCart)thiccLikeMewTwoCart.position.set(0.02808813750743866,1.1,0.4893183708190918)
                //console.log('nts')
                if(thiccLikeMewTwoCart)thiccLikeMewTwoCart.rotation.set(0,0,3.14)
                }

                if(PurrentIntersect.object === familygamenightBox){
                DisableHoverCode()
                familygamenight.play()
                goin.play()
                goout.pause()
                goout.currentTime = 0
                camera.position.set(1.8,.75,-.4)
                camera.fov = 65
                camera.updateProjectionMatrix();
                                          
                if(familygamenightCart)familygamenightCart.position.set(0.02808813750743866,1.1,0.4893183708190918)
                //console.log('nts')
                if(familygamenightCart)familygamenightCart.rotation.set(0,0,3.14)
                }

                if(PurrentIntersect.object === liverpoolbox){
                DisableHoverCode()
                liverpool.play()
                goin.play()
                goout.pause()
                goout.currentTime = 0
                camera.position.set(1.8,.75,-.4)
                camera.fov = 65
                camera.updateProjectionMatrix();
                                          
                if(liverpoolCart)liverpoolCart.position.set(0.02808813750743866,1.1,0.4893183708190918)
                //console.log('nts')
                if(liverpoolCart)liverpoolCart.rotation.set(0,0,3.14)
                }

                if(PurrentIntersect.object === flipflopsintherainBox){
                DisableHoverCode()
                flipflopsintherain.play()
                goin.play()
                goout.pause()
                goout.currentTime = 0
                camera.position.set(1.8,.75,-.4)
                camera.fov = 65
                camera.updateProjectionMatrix();
                                          
                if(flipflopsintherainCart)flipflopsintherainCart.position.set(0.02808813750743866,1.1,0.4893183708190918)
                //console.log('nts')
                if(flipflopsintherainCart)flipflopsintherainCart.rotation.set(0,0,3.14)
                }

                if(PurrentIntersect.object === creativemodeBox){
                DisableHoverCode()
                creativemode.play()
                goin.play()
                goout.pause()
                goout.currentTime = 0
                camera.position.set(1.8,.75,-.4)
                camera.fov = 65
                camera.updateProjectionMatrix();
                                          
                if(creativemodeCart)creativemodeCart.position.set(0.02808813750743866,1.1,0.4893183708190918)
                //console.log('nts')
                if(creativemodeCart)creativemodeCart.rotation.set(0,0,3.14)
                }

                if(PurrentIntersect.object === hatersayBox){
                DisableHoverCode()
                hatersay.play()
                goin.play()
                goout.pause()
                goout.currentTime = 0
                camera.position.set(1.8,.75,-.4)
                camera.fov = 65
                camera.updateProjectionMatrix();
                                          
                if(hatersayCart)hatersayCart.position.set(0.02808813750743866,1.1,0.4893183708190918)
                //console.log('nts')
                if(hatersayCart)hatersayCart.rotation.set(0,0,3.14)
                }
                
                if(PurrentIntersect.object === PhiliphoffminBox){
                DisableHoverCode()
                Philiphoffmin.play()
                goin.play()
                goout.pause()
                goout.currentTime = 0
                camera.position.set(1.8,.75,-.4)
                camera.fov = 65
                camera.updateProjectionMatrix();
                                          
                if(PhiliphoffminCart)PhiliphoffminCart.position.set(0.02808813750743866,1.1,0.4893183708190918)
                //console.log('nts')
                if(PhiliphoffminCart)PhiliphoffminCart.rotation.set(0,0,3.14)
                }

                if(PurrentIntersect.object === barsBox){
                DisableHoverCode()
                bars.play()
                goin.play()
                goout.pause()
                goout.currentTime = 0
                camera.position.set(1.8,.75,-.4)
                camera.fov = 65
                camera.updateProjectionMatrix();
                                          
                if(barsCart)barsCart.position.set(0.02808813750743866,1.1,0.4893183708190918)
                //console.log('nts')
                if(barsCart)barsCart.rotation.set(0,0,3.14)
                }
            
            
            })


        } 
                
                else {
                //cab toogle off reset & carts reset

                if(backCab)backCab.visible = false
                DisableHoverCode()
                disableSelectButtonCode()
                DisableYeahCode()
                

                //reset cart positions

                cabBox.position.set(2.327,0.306,-0.58)
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

let currentIntersect = 0
let PurrentIntersect = 0
let SurrentIntersect = 0

const target = new THREE.Vector3()

window.addEventListener("pageshow", function(event) {
    var historyTraversal = event.persisted || 
                           (typeof window.performance != "undefined" && 
                            window.performance.navigation.type === 2);
    if (historyTraversal) {
      // Reset the page
      window.location.reload();
    }
  });




//-----------------------------tv buttons---------------------------------------
function tvButtons(){
    //raybuttons
    const buttons = [ytbuttonBox,helloBox,shirtBox,ntsBox,gtagBox,cottonMouthBox,wiiFitBox,thiccLikeMewBox,familygamenightBox,flipflopsintherainBox,liverpoolbox,creativemodeBox,hatersayBox,PhiliphoffminBox,barsBox,volumebuttonBox]                  
    const mouseOn = raycaster.intersectObjects(buttons)

    for(const object of buttons)
    {object.material.color.set('blue')
    if(glassheadborder)glassheadborder.material.color.set('red')
    if (shirt)shirt.material.color.set('green')
    //console.log('not Hovering Tv Buttons')
}


for(const intersect of mouseOn)
{

    if (shirt)shirt.material.color.set('yellow')
    if(glassheadborder)glassheadborder.material.color.set('green')
    
    intersect.object.material.color.set('green')
    //console.log('Hovering Tv Buttons')
}

if(mouseOn.length){
    if(PurrentIntersect === 0){
        BBODY.style.cursor = 'url("./imges/mouse1.png"), auto ';

    on.play();
    //console.log('mouse enter event')
        }
    PurrentIntersect = mouseOn[0]

}   else {
    
    if(PurrentIntersect){

        on.pause();
        on.currentTime = 0;
        //console.log('mouse exit event')
        }
    PurrentIntersect = 0
    }


}

function backcolor(){
    const sbuttons = [backCab,backTV,]                  
    const selectedback = raycaster.intersectObjects(sbuttons)

    for(const object of sbuttons)
    {object.material.color.set('red')
    //console.log('turning first color')
    }
    for(const intersect of selectedback)
    {
    intersect.object.material.color.set('green')
    //console.log('Hovering Tv Buttons')
    }
    if(selectedback.length){
    if(SurrentIntersect === 0){
    //on.play();
    //console.log('back selected')
    if(backTV)backTV.material.color.set('red')
    if(backCab)backCab.material.color.set('red')
    }
    SurrentIntersect = selectedback[0]
    } 
    else {   
    if(SurrentIntersect){
        //off.play();
        //console.log('back un selected')
        }
    SurrentIntersect = 0
    }

}

function hover(){
    let on = 0

    
    const ntsintersections = raycaster.intersectObject(ntsBox);
    if (ntsintersections.length > 0) 
    {
      //console.log('nts hover')
      ntsCart.position.set(0.4,-.15,0.6);
    } 

    else if(ntsCart)
    {
        ntsCart.position.set(0.4,-.20,0.6)
    }

    const hellointersections = raycaster.intersectObject(helloBox);
    if (hellointersections.length > 0) 
    {
      //console.log('hello hover')
      helloCart.position.set(0.6845217347145081,-.15,0.5381841659545898);
    } 
    else if(helloCart)
    {
        helloCart.position.set(0.6845217347145081,-.20,0.5381841659545898)
    }

    const gtagintersections = raycaster.intersectObject(gtagBox);
    if (gtagintersections.length > 0) 
    {
      //console.log('hello hover')
      gtagCart.position.set(.15,-.15,0.6);
    } 
    else if(gtagCart)
    {
        gtagCart.position.set(.15,-.20,0.6);         
    }

    const cottonintersections = raycaster.intersectObject(cottonMouthBox); 
    if (cottonintersections.length > 0) 
    {
      //console.log('hello hover')
      cottonMouthCart.position.set(0.657220184803009,-0.65,0.718595027923584);  
    } 
    else if(cottonMouthCart)
    {
        cottonMouthCart.position.set(0.657220184803009,-0.7026517987251282,0.718595027923584);     
    }

    const thiccintersections = raycaster.intersectObject(thiccLikeMewBox); 
    if (thiccintersections.length > 0) 
    {
      //console.log('hello hover')
      thiccLikeMewTwoCart.position.set(-0.08537335693836212,-0.15,0.5930662155151367);  
    } 
    else if(thiccLikeMewTwoCart)
    {
        thiccLikeMewTwoCart.position.set(-0.08537335693836212,-0.18832868337631226,0.5930662155151367);     
    }

    const WIIintersections = raycaster.intersectObject(wiiFitBox); 
    if (WIIintersections.length > 0) 
    {
      //console.log('hello hover')
      wiiFitCart.position.set(-0.3143464922904968,-0.15,0.5665731430053711);  
    } 
    else if(wiiFitCart)
    {
        wiiFitCart.position.set(-0.3143464922904968,-0.19119787216186523,0.5665731430053711);     
    }

    const familyintersections = raycaster.intersectObject(familygamenightBox); 
    if (familyintersections.length > 0) 
    {
      //console.log('hello hover')
      familygamenightCart.position.set(-0.5208156704902649,-0.15,0.5428767204284668);  
    } 
    else if(familygamenightCart)
    {
        familygamenightCart.position.set(-0.5208156704902649,-0.1916351318359375,0.5428767204284668);     
    }

    const liverintersections = raycaster.intersectObject(liverpoolbox); 
    if (liverintersections.length > 0) 
    {
      //console.log('hello hover')
      liverpoolCart.position.set(0.4148997664451599,-0.65,0.7095093727111816);  
    } 
    else if(liverpoolCart)
    {
        liverpoolCart.position.set(0.4148997664451599,-0.707334041595459,0.7095093727111816);     
    }

    const flipintersections = raycaster.intersectObject(flipflopsintherainBox); 
    if (flipintersections.length > 0) 
    {
      //console.log('hello hover')
      flipflopsintherainCart.position.set(0.18647770583629608,-0.65,0.708808422088623);  
    } 
    else if(flipflopsintherainCart)
    {
        flipflopsintherainCart.position.set(0.18647770583629608,-0.7092075347900391,0.708808422088623);     
    }

    const creativeintersections = raycaster.intersectObject(creativemodeBox); 
    if (creativeintersections.length > 0) 
    {
      //console.log('hello hover')
      creativemodeCart.position.set(-0.7084792256355286,-0.15,0.5211467742919922);  
    } 
    else if(creativemodeCart)
    {
        creativemodeCart.position.set(-0.7084792256355286,-0.19124191999435425,0.5211467742919922);     
    }

    const haterintersections = raycaster.intersectObject(hatersayBox); 
    if (haterintersections.length > 0) 
    {
      //console.log('hello hover')
      hatersayCart.position.set(-0.025738433003425598,-0.65,0.7074694633483887);  
    } 
    else if(hatersayCart)
    {
        hatersayCart.position.set(-0.025738433003425598,-0.7035372257232666,0.7074694633483887);     
    }

    const phlipintintersections = raycaster.intersectObject(PhiliphoffminBox); 
    if (phlipintintersections.length > 0) 
    {
      //console.log('hello hover')
      PhiliphoffminCart.position.set(-0.22537000477313995,-0.65,0.6649813652038574);  
    } 
    else if(PhiliphoffminCart)
    {
        PhiliphoffminCart.position.set(-0.22537000477313995,-0.7094168066978455,0.6649813652038574);     
    }

    const barsintersections = raycaster.intersectObject(barsBox); 
    if (barsintersections.length > 0) 
    {
      //console.log('hello hover')
      barsCart.position.set(-0.452989399433136,-0.65,0.6877660751342773);  
    } 
    else if(barsCart)
    {
        barsCart.position.set(-0.452989399433136,-0.7069311141967773,0.6877660751342773);     
    }

}


    
for (var i = 0; i < SongsVolume.length; i++) {
    SongsVolume[i].volume = 0.05;}
//------------------button stuff-------------------------------------------------


    
        

const Tcart = [ntsBox,
    helloBox,gtagBox,
    cottonMouthBox,
    thiccLikeMewBox,
    wiiFitBox,
    familygamenightBox,
    flipflopsintherainBox,
    liverpoolbox,
    creativemodeBox,
    hatersayBox,barsBox,
    PhiliphoffminBox]

   function YeahButtons(){
    document.addEventListener('click',(o)=>{

})
   } 
  let lightOon = true
addEventListener('click',(o)=>{

    const switchcast= raycaster.intersectObject(SwitchBox);
    if (switchcast.length > 0 && lightOon === true) {
        lightOn.pause()
        lightOn.currentTime = 0
        lightOff.play()

        light3.position.z = -40
        light3.position.x = 40
        light3.intensity = 0
        lightPoint.position.z = -90
        console.log("off")
        lightOon = false
        } 
        
        else if (switchcast.length > 0 && lightOon === false) {
        lightOff.pause()
        lightOff.currentTime = 0
        lightOn.play()

        light3.position.x = (Math.random() - 0.5 * 1)
        light3.position.z = 3.5
        light3.position.y = 2
        light3.intensity = 1.5
        lightPoint.position.set(0,5,0)
console.log("on")
lightOon = true
        }
    
            raycaster.setFromCamera(mouse,camera)

        const ejectcast= raycaster.intersectObject(ejectBox);
            
            if (ejectcast.length > 0) {
                enableHoverCode = true
                RESETCARTS()

                for (var i = 0; i < SongsVolume.length; i++) 
                {

                        camera.position.set(1,.4,-.15)
                        camera.rotation.set(0,-1.27,0)
                        camera.fov = 35
                        camera.updateProjectionMatrix();

                    goout.play()
                    SongsVolume[i].pause()
                    SongsVolume[i].currentTime = 0
                }



                
   
            }

            const pplaycast= raycaster.intersectObject(pPlayBox);
            if (pplaycast.length > 0) {
                for (var i = 0; i < SongsVolume.length; i++) 
                {


                    UP.play()
                    if(SongsVolume[i].currentTime > 0){
                        SongsVolume[i].play() 
                    }
                }
            }
            
            const pppausecast= raycaster.intersectObject(pPauseBox);
            if (pppausecast.length > 0) {
                for (var i = 0; i < SongsVolume.length; i++) 
                {
                    
                    
                    UP.play()
                    
                    
                        SongsVolume[i].pause() 
                    
                    } 
            } 
            
            
            const poop = raycaster.intersectObject(volumebuttonBox);
           if (poop.length > 0) {

            

            
            
            if(volumebutton && volumebutton.position.z < 0.6){
                
                volumebutton.position.z += 0.15
            //console.log(volumebutton.position.z)
        }
            
            

            for (var i = 0; i < SongsVolume.length; i++) 
            
                {
                    
                    if (SongsVolume[i].volume < 0.9){
                        UP.pause
                        UP.currentTime=0
                        UP.play()
                        SongsVolume[i].volume += 0.1;
                    }


                }

                
                
             
                
                //console.log('up',poop[0].point.z)

                }

            const poop2 = raycaster.intersectObject(volumebuttonBox2);
              
           if (poop2.length > 0) {

            
            if(volumebutton && volumebutton.position.z > -.6){
                volumebutton.position.z -= 0.15
            }
            

            for (var i = 0; i < SongsVolume.length; i++) 
            
                {
                    if (SongsVolume[i].volume > 0.1){
                        DOWN.pause
                        DOWN.currentTime=0
                        DOWN.play()  
                        
                        SongsVolume[i].volume -= 0.1;
                    }


                }

                
                
             
                
                //console.log('down',poop2[0].point.z)

                }


                })
                

      

//----------------------head stuff----------------------------------------------
document.addEventListener('wheel', function(event) {
    if (event.deltaY < 0) {     
        if(head)head.rotation.y +=.1

        if (event.deltaY < 0 && event.shiftKey) {
        if(head)head.rotation.y +=.3   
        }
    }

    if (event.deltaY > 0) {
      
        if(head)head.rotation.y -=.1

        if (event.deltaY > 0 && event.shiftKey) {
            if(head)head.rotation.y -=.3   
            }
    }
  });

document.addEventListener('mousedown', function(event) {
    if (event.button === 1) {
      
        if(head)head.position.set(0,1.3,0);
      
    }
  });
document.addEventListener('mouseup', function(event) {
    if (event.button === 1) {

        glassLand.play()
        if(head)head.position.set(0,1.175,0);
    } else         glassLand.pause
    glassLand.currentTime = 0
  });







//----------------------head stuff----------------------------------------------

if(enableYeahCode){

    YeahButtons()
}
//--------------------------------------------------------------------
function animate(){
    

    headspin()
    if(enableSelectButtonCode){
        
        tvButtons()
        backcolor()
    }

    if(enableHoverCode){
        hover()

    }
    
    window.requestAnimationFrame(animate)






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



    const objectToTests = [headBox, tvBox, windowBox,doorBox,cabBox,pictureBox,mapBox]
    const intersects = raycaster.intersectObjects(objectToTests)

    for(const object of objectToTests){
        object.material.color.set('red')
        BBODY.style.cursor = 'url("./imges/mousemain.png"), auto ';
    }

    for(const intersect of intersects){
        BBODY.style.cursor = 'url("./imges/mouse1.png"), auto ';
        if(backCab)backCab.material.color.set('green')
        if(backCab)backCab.material.color.set('green')
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