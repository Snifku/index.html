const currentImage = document.querySelector('#image');
const images = ['img/pic1.jpg', 'img/pic2.jpg', 'img/pic3.jpg', 'img/pic4.jpg'];

function changeImage(){
    console.log("Hello from script file!");
    let rnd = Math.floor(Math.random() * images.length);
    console.log(rnd);
    currentImage.src = images[rnd];

}