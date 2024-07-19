
// currentSlideID = 1;

// sliderElement=document.getElementById("slider");
// totalSlides=sliderElement.childElementCount;

// function next(){
//     if(currentSlideID<totalSlides){
//         currentSlideID++;
//         showSlide();
//     }
// }

// function prev(){
//     if(currentSlideID>1){
//         currentSlideID--;
//         showSlide();
//     }
// }

// function showSlide(){
//     slides=document.getElementById("slides").getElementsByTagName("li");
//     for(let index=0;index<totalSlides;index++){
//         const ele=slides[index];
//         if(currentSlideID===index+1){
//             ele.classList.remove("hidden");
//         }
//         else{
//             ele.classList.add("hidden");
//         }
//     }
// }


//selecting sid Navbar, menuicon

var sidenav=document.getElementById("sidenav");
var menuicon=document.getElementById("menuicon");
var closenav=document.getElementById("closenav");

menuicon.addEventListener("click",function(){
    sidenav.style.left=0;
})

closenav.addEventListener("click",function(){
    sidenav.style.left="-50%";
})