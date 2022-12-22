document.addEventListener('contextmenu', event => event.preventDefault());



const minecraftServer = document.createElement('nobr');
minecraftServer.innerHTML = '<b>MINECRAFT SERVER IP: 135.148.29.252:25569<b>';
minecraftServer.style.position = 'absolute';
minecraftServer.style.bottom = '10px';
minecraftServer.style.left = '50%';
minecraftServer.style.transform = 'translateX(-50%)';
minecraftServer.style.color = 'white';
minecraftServer.style.fontSize = '11px';
minecraftServer.style.fontFamily = 'Arial';
minecraftServer.style.padding = 0;
document.body.appendChild(minecraftServer);

minecraftServer.addEventListener('click', function() {

  const textArea = document.createElement('textarea');
  textArea.value = '135.148.29.252:25569';
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  minecraftServer.innerHTML = '<strong>SERVER IP COPIED TO CLIPBOARD!<strong>';
  setTimeout(function() {
    minecraftServer.innerHTML = '<b>MINECRAFT SERVER IP: 135.148.29.252:25569<b>';
    }, 2000);

  });

const sheep = new Audio('https://www.myinstants.com/media/sounds/minecraft-sheep2.mp3');
const copy = new Audio('/audio/copySound.mp3');
minecraftServer.addEventListener('click', function() {
  sheep.play();
  copy.play();
});
  
  document.body.style.overflow = 'hidden';
  
  document.body.style.userSelect = 'none';
  
  document.body.addEventListener('dragstart', function(e) {
    e.preventDefault();
  });