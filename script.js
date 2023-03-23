





     



const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

function next(){
  //image slider next button
  prevBtn.removeAttribute("disabled")
  
    slides.forEach((slide) => {
    
      slide.classList.remove("active");
     
    
    });
  

    slideNumber++;

    
 

    if(slideNumber > (numberOfSlides - 1)){
      slideNumber = 0;
   
    
    }
    

    slides[slideNumber].classList.add("active")
    

    if(slideNumber ==0){
      nextBtn.disabled ="true";
      
    }
  
 

}



function prev(){
  //image slider previous button
  
    slides.forEach((slide) => {
      nextBtn.removeAttribute("disabled")
   
      slide.classList.remove("active");
     
    });
   

    slideNumber--;

    if(slideNumber < 0){
      slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add("active");

    if(slideNumber ==0){
      prevBtn.disabled ="true";
      
    }


    

}

  