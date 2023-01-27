const pre = document.querySelector('.prev');
const next = document.querySelector('.next');
const gallery = document.querySelectorAll('.gallery-img');
let currentelement=0;
pre.addEventListener('click',function (){
    gallery[currentelement].classList.remove("active");
    currentelement--;;
    gallery[currentelement].classList.add("active");
    next.disabled=false;
    if(currentelemnet===0){
        pre.disabled=true;
    }
   
});
next.addEventListener('click',function (){
    gallery[currentelement].classList.remove("active");
    currentelement++;
    gallery[currentelement].classList.add("active");
    pre.disabled=false;
    if(gallery.length-1===currentelement){
        next.disabled=true;
    }
});