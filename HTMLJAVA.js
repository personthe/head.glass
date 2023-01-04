const sheep = new Audio('https://www.myinstants.com/media/sounds/minecraft-sheep2.mp3');
const copy = new Audio('/audio/copySound.mp3');


document.addEventListener('contextmenu', event => event.preventDefault());



const minecraftServer = document.createElement('div');
minecraftServer.innerHTML = 'MINECRAFT SERVER IP: 135.148.29.252:25569';
minecraftServer.style.position = 'absolute';
minecraftServer.style.bottom = '10px';
minecraftServer.style.left = '50%';
minecraftServer.style.transform = 'translateX(-50%)';
minecraftServer.style.color = 'white';

minecraftServer.style.padding = 0;
minecraftServer.className = 'minecraft'

document.body.appendChild(minecraftServer);

minecraftServer.addEventListener('touchend', (event) =>

{        
event.preventDefault(); // prevent the default touch behavior

sheep.play();
copy.play();

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



})

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



minecraftServer.addEventListener('click', function() {
  sheep.play();
  copy.play();
});
  
  document.body.style.overflow = 'hidden';
  
  document.body.style.userSelect = 'none';
  
  document.body.addEventListener('dragstart', function(e) {
    e.preventDefault();
  });