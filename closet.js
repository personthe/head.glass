

  // Preload audio
  const audioFiles = [
    './audio/buy.mp3',
    './audio/refund.mp3',
    './audio/EYES.mp3',
    './audio/on.mp3',
    './audio/trash.mp3',
    './audio/shopday.wav',
    './audio/shopnight.wav', 
    './audio/3am.wav',
    './audio/sel1.mp3',
    './audio/talk1.mp3',
    './audio/talk2.mp3',
    './audio/talk3.mp3',
    './audio/talk4.mp3',
    './audio/talk5.mp3',
    './audio/talk6.mp3',
    './audio/talk7.mp3',
    './audio/talk8.mp3',
    './audio/talk9.mp3',
    './audio/talk10.mp3',
    './audio/talk11.mp3',
    './audio/talk12.mp3',
    './audio/talk13.mp3',
    './audio/talk14.mp3'
  ];
  
  const loadedAudio = {};
  
  function preloadAudio(url) {
    return new Promise(resolve => {
      const audio = new Audio();
      audio.addEventListener('canplaythrough', () => {
        loadedAudio[url] = audio;
        resolve(audio);
      });
      audio.src = url;
      // Load but don't play
      audio.load(); 
    });
  }
  
  // Preload all audios
  audioFiles.forEach(file => {
    preloadAudio(file).then(audio => {
      console.log(audio.src + ' loaded successfully');
    }).catch(error => {
      console.error('Error loading ' + file, error);
    });
  });


const images = [
  './images/manblink.png',
  './images/storemanMAIN.png',
  './images/manmouth.png',
  './images/rnbpre1.png'
];

const loadedImages = {}; 

function preloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      loadedImages[url] = img;
      console.log(url + ' loaded successfully');
      resolve(img);
    };
    img.onerror = () => {
      console.error('Error loading ' + url);
      reject(new Error('Failed to load image ' + url));
    };
    img.src = url;
  });
}

Promise.all(images.map(preloadImage)).then(() => {
  console.log('All images loaded');
  // Images loaded. You can run your dependent code here.
}).catch(error => {
  console.error('Error in image loading:', error);
});


$(window).on('touchstart', function(e) {
  e.preventDefault();
  $(window).trigger('mousedown'); 
});

$(".manimage").attr("src", "./images/manblink.png").attr("alt", "balls");


$(".manimage").attr("src", "./images/storemanMAIN.png").attr("alt", "balls");



window.addEventListener('dragstart', function(event) {
  // prevent the image from being dropped
  event.preventDefault();
});

window.addEventListener("contextmenu", function(event) {
  // Prevent the default context menu from appearing
  event.preventDefault();
});


//=================vars
let buy = new Audio('/audio/buy.mp3');
let rebuy = new Audio('/audio/refund.mp3');
let eyes = new Audio('/audio/EYES.mp3');
let sel2 = new Audio('/audio/on.mp3');
let trash = new Audio('/audio/trash.mp3');


const $shirtBox = $('.shirtbox');
const $hoodiebox = $('.hoodiebox');  
const $sockbox = $('.sockbox');
const $pantbox = $('.pantbox');
const $underwearbox = $('.underwearbox');
const $stuffbox = $('.stuffbox');
let selected;
//====================================================

//===============CSS===========================

const storeMusicDay = new Audio();
storeMusicDay.loop = true;
storeMusicDay.src = 'audio/shopday.wav';

const storeMusicNight = new Audio();
storeMusicNight.loop = true;
storeMusicNight.src = 'audio/shopnight.wav';

const threeAM = new Audio();
threeAM.loop = true;
threeAM.src = 'audio/3am.wav';
let $MUSIC = $('#music');
let $allbuttons = $('button');
let $img = $('img');
let flip = 0;

let sel1 = new Audio('audio/sel1.mp3');

let min = 3.00;
let max = 4.00;

let randomNumberTime3 = (Math.random() * (max - min) + min).toFixed(2);

let randomTime4 = (Math.random() * (max - min) + min).toFixed(2);

let musicON = 0;

let allmusic = {storeMusicDay,storeMusicNight,threeAM};


//---------------------------------------------------------------------------

let blinktiming = 14000;
function BLINKTIMING(){
  let smol = 2000;
  let beg = 16000;
  let range = beg - smol;
  blinktiming = Math.floor(Math.random() * range + smol);
}

let blinkNumber = 0;



setInterval(function() {
  BLINKTIMING();
  eyes.play();
  blinkNumber += 1;
  console.log("Store Man blinked", " ", blinkNumber, " ", "times");




  if (flip === 0) {

    $(".manimage").attr("src", "./images/manblink.png").attr("alt", "balls");

    setTimeout(function() {
      if (flip === 1) {
        
      }
      $(".manimage").attr("src", "./images/storemanMAIN.png").attr("alt", "balls");
    }, 400);
  }
}, blinktiming);


$allbuttons.on('click', ()=>{
  sel1.pause();
  sel1.currentTime = 0;
  sel1.play();
});


var currentBime = new Date();
var currentHour = currentBime.getHours();

// Store the roombox in a jQuery object
var $roombox = $('#roombox');

// Day
if (currentHour >= 8 && currentHour < 22) {
    $roombox.attr({src: "./images/room.png", alt: "balls"});
}

// 3am
else if (currentHour >= 3 && currentHour < 4) {
    $roombox.attr({src: "./images/roomnight.png", alt: "balls"});
}

// Night  
else {
    $roombox.attr({src: "./images/roomnight.png", alt: "balls"});
}




const $button = $('#play-button');
const $cum = $('#cum');
const $GUI = $('#mainGUI');
const $BACK = $('#back');

const $MIN = $('#MIN');  

const $cartQ = $('#cart');
let shrinkSwitch = 0;

// Instead of document.getElementById("back").addEventListener

$("#back").click(function() {
  window.location.href = "http://head.glass";
});



// Instead of button.addEventListener

$button.on('click', () => {

  // Check if the audio is currently paused  

  $GUI.css("transform", "translateX(0)");

  $BACK.css("transform", "translateX(0)");

  $MUSIC.css("transform", "translateX(0)");

  $cum.remove();

  $button.remove();
  

  // Your code

  if (currentHour >= 8 && currentHour < 22) {
    // Play DAY if it's between 12am and 10pm
    storeMusicDay.play();
  }


  else if (currentHour>= randomNumberTime3 && currentHour < randomTime4) {
    // Play 3AM if it's between 3am and 4pm
    threeAM.play();
  }

  else {
    // Play NIGHT if it's outside of that time range  
    storeMusicNight.play();
  }

    // Play the audio
    storeMusicDay.volume=.5;
    storeMusicNight.volume=.5;
});


$MUSIC.on('click', function(event) {
  if(musicON === 0) {
    storeMusicDay.volume = 0;
    storeMusicNight.volume = 0; 
    threeAM.volume = 0;

    sel1.play();
    musicON = 1;
    $MUSIC.css("backgroundColor", "#800c0c");
  }

  else if(musicON === 1){
    storeMusicDay.volume = .5;
    storeMusicNight.volume = .5;
    threeAM.volume = .5;

    $MUSIC.css("backgroundColor", "#34ce1f");
    musicON = 0;
  }
  
});




  // const mouth = document.querySelector('.manmouth');
  
  // const soundFiles = Array.from({length: 14}, (_, i) => `./audio/talk${i + 1}.mp3`);

  // const playRandomSound = () => {
  //   console.log('play random called');
  //   const soundFile = soundFiles[Math.floor(Math.random() * soundFiles.length)];
  //   const audio = new Audio(soundFile);
    
  //   console.log('Store Man speaks')
  //   audio.onplay = () => mouth.style.display = 'block';
  //   audio.onended = () => mouth.style.display = 'none';
    
  //   audio.play();
  //   setTimeout(playRandomSound, 20000);
  // };

  // playRandomSound();






  $(document).ready(function(){
    $('.music').hover(function(e) {
        $('#chat-box').css({'top': e.pageY + 20, 'left': e.pageX + 20}).fadeIn('slow');
    }, function() {
        $('#chat-box').hide();
    });

    $('.music').mousemove(function(e) {
        $('#chat-box').css({'top': e.pageY + 20, 'left': e.pageX + 20});
    });
});




let lastTimestamp = 0;

function tick(timestamp) {
    let deltaTime = timestamp - lastTimestamp; // calculate the difference in time since the last frame
    lastTimestamp = timestamp; // update the lastTimestamp

    // Animation logic...
    // You can use deltaTime here

    requestAnimationFrame(tick);
}

requestAnimationFrame(tick);



//!=======================================================================PREVIEW==========================================================


$('#rnbshirt').on('mousedown touchstart', function(e) {
  if(e.which === 3 || e.type === 'touchstart') {
    $('.show-image').find('img').attr('src', 'images/rnbpre1.png');
    $('.show-image').show();
  }
});



$(window).on('mouseup touchend', function(e) {
  if(e.which === 3 || e.type === 'touchend') {
    $('.show-image').hide();
  }
});

$(document).on('keydown', event => {
  if (event.code === 'KeyK') {
      $('.show-image').show();
  }
});
