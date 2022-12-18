var sadsong = new Audio('https://www.televisiontunes.com/uploads/audio/Naruto%20Shippuden%20-%20Sadness%20and%20Sorrow%20-%20Full.mp3');

window.addEventListener('click', (event) =>{
    
    sadsong.play();
})

function gaypicture(){
    var img = document.getElementById('myImage');
    img.style.width = window.innerWidth + 'px';
    img.style.height = window.innerHeight + 'px';
}

//ANIMATION
function animate()
{
    gaypicture()
    

    var timer = Date.now() * 0.0001;   
    requestAnimationFrame(animate)

}

animate()