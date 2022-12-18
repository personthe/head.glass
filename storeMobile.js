var sadsong = new Audio('https://www.televisiontunes.com/uploads/audio/Naruto%20Shippuden%20-%20Sadness%20and%20Sorrow%20-%20Full.mp3');

window.addEventListener('click', (event) =>{
    
    sadsong.play();
})

var img = document.getElementById('myImage');
img.style.width = 365 + 'px';


//ANIMATION
function animate()

{

    

    var timer = Date.now() * 0.0001;   
    requestAnimationFrame(animate)

}

animate()