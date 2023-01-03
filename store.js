var sadsong = new Audio('https://www.televisiontunes.com/uploads/audio/Naruto%20Shippuden%20-%20Sadness%20and%20Sorrow%20-%20Full.mp3');
sadsong.loop = true
let cry = new Audio('https://www.myinstants.com/media/sounds/asdasd_xyorzJ8.mp3')

$(document).ready(function() {
    sadsong.play();

    var audio = $(cry).get(0);
    $('button').click(function() {
      var audioClone = audio.cloneNode();
      audioClone.play();
    });
  });
  


