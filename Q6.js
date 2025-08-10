const images =document.querySelectorAll(".carousel img");
let currentIndex = 0;

document.getElementById('nextbtn').addEventListener('click',() =>{
   images[currentIndex].classList.remove('active');
   currentIndex = (currentIndex + 1) % images.length;
   images[currentIndex].classList.add('active');
});

document.getElementById('prevbtn').addEventListener('click', ()=>{
    images[currentIndex].classList.remove('active');
    currentIndex =(currentIndex -1 + images.length) % images.length;
    images[currentIndex].classList.add('active')
});