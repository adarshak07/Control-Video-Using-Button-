const  btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

btn.addEventListener('click', () => {
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide');
        video.pause(); 
    }
    else {
        btn.classList.remove('slide'); 
        video.play();  //feel 
    }
});

//while the video loads , preloader will be shown 
//so we need to hide the preloader when the video is loaded 
//we will be using the load event . 

const preloader = document.querySelector('.preloader');
window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader');  //it makes the visiblity to none , see css etc . 
})

