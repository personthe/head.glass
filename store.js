var sadsong = new Audio('audio/TheLife@tonibalone90BPM.mp3');
sadsong.loop = true
let cry = new Audio('https://www.myinstants.com/media/sounds/asdasd_xyorzJ8.mp3')

$(document).ready(function() {
    $('button').click(function() {
    sadsong.play();
    })
    var audio = $(cry).get(0);
    $('button').click(function() {
      var audioClone = audio.cloneNode();
      audioClone.volume = .2
      audioClone.play();
    });
  });
  


