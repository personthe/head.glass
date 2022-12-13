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
  minecraftServer.innerHTML = 'SERVER IP COPIED TO CLIPBOARD!';
  setTimeout(function() {
    minecraftServer.innerHTML = 'Minecraft server : 135.148.29.252:25569';
    }, 2000);

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