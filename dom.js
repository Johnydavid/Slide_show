// Title of the Webpage

const titleDiv = document.createElement("div");

// titleDiv.className = "bodyClass";
titleDiv.innerText = "WHEELS";



const mainDiv = document.createElement("div");


const para = document.createElement("p");
para.innerText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit
 Itaque soluta quo recusandae et? Sequi ex fuga,  ad
aspernatur minus temporibus? Aliquid ea qui quod totam eos? Id, dolorum voluptates. Natus.`;
mainDiv.appendChild(para);



const layoutDiv = document.createElement("div");

layoutDiv.className = "slider";

const prevButton = document.createElement("button");
prevButton.innerText = "<";
prevButton.className = "prev-btn";
prevButton.setAttribute("disabled", true);

layoutDiv.append(prevButton);

var images = [
  {
    caption:
      "17-INCH CAST ALUMINIUM WHEEL, FULLY PAINTED SILVER LITHO Standard on Touring FWD",
    alt: "wgu",
    url: "./images/wgu.png"
  },
  {
    caption:
      "17-INCH CAST ALUMINIUM DIAMOND-CUT WHEEL WITH BALTIC GREY POCKETS",
    alt: "wjr",
    url: "./images/wjr.png"
  },
  {
    caption: "18-INCH CAST ALUMINIUM WHEEL WTIH FORESHADOW FINISH",
    alt: "wp6",
    url: "./images/wp6.png"
  },
  {
    caption: "18-INCH CAST ALUMINIUM WHEEL WTIH FORESHADOW FINISH",
    alt: "wpf",
    url: "./images/wpf.png"
  },
];

const imgDiv = document.createElement("div");
imgDiv.className = "slider ";

const nextButton = document.createElement("button");
nextButton.innerText = ">";
nextButton.className="next-btn";

const showWheels = ()=>{



images.forEach((image) => {
  let figElem = document.createElement("figure");
  // figElem.className = "slide";
  let imageElem = document.createElement("img");
  imageElem.alt = image.alt;
  imageElem.src = image.url;
  imageElem.className = "wheelClass";
 
 
  let figCaptionElem = document.createElement("figcaption");
  figCaptionElem.textContent = image.caption;
  figCaptionElem.className = "info";
  figElem.appendChild(imageElem);
  figElem.appendChild(figCaptionElem);

  imgDiv.append(figElem);

  layoutDiv.appendChild(imgDiv);
});
}
showWheels();

layoutDiv.append(nextButton);





var slides = document.getElementsByTagName("figure");
var numberOfSlides = slides.length;
var slideNumber = 0;


function next() {
  //image slider next button
    prevButton.removeAttribute("disabled", false);
 

    images.forEach((image) => {
      let figElem = document.createElement("figure");
      figElem.className = "slideActive";
      let imageElem = document.createElement("img");
      imageElem.alt = image.alt;
      imageElem.src = image.url;
      imageElem.className = "wheelClass";
     
     
      let figCaptionElem = document.createElement("figcaption");
      figCaptionElem.textContent = image.caption;
      figCaptionElem.className = "info";
      figElem.appendChild(imageElem);
      figElem.appendChild(figCaptionElem);
    
      imgDiv.append(figElem);
    
      layoutDiv.appendChild(imgDiv);
    });
    
      // slideNumber++;
    
      // if (slideNumber >= numberOfSlides ) {
      //   slideNumber = 0;
       
      // }
    
      // slides[slideNumber].classList.add("active");
    
      // if (slideNumber >=numberOfSlides-1) {
      //   nextBtn.disabled = "true";
      // }



    // images.forEach((image) => {
    //   let figElem = document.createElement("figure");
    //   figElem.className = "slide";
    //   let imageElem = document.createElement("img");
    //   imageElem.alt = image.alt;
    //   imageElem.src = image.url;
    //   imageElem.className = "wheelClass";
     
     
    //   let figCaptionElem = document.createElement("figcaption");
    //   figCaptionElem.textContent = image.caption;
    //   figCaptionElem.className = "info";
    //   figElem.appendChild(imageElem);
    //   figElem.appendChild(figCaptionElem);
    
    //   imgDiv.append(figElem);
    
    //   layoutDiv.appendChild(imgDiv);
    // });

    // slides.forEach((slide) => {
    //   slide.classList.remove("active");
    // });
  
    // slideNumber++;
  
    // if (slideNumber >= numberOfSlides ) {
    //   slideNumber = 0;
     
    // }
  
    // slides[slideNumber].classList.add("active");
  
    // if (slideNumber >=numberOfSlides-1) {
    //   nextBtn.disabled = "true";
    // }
}





// function prev() {
//   //image slider previous button

//   slides.forEach((slide) => {


//     slide.classList.remove("slideActive");
//   });

//   slideNumber--;

//   if (slideNumber < 0) {
//     slideNumber = numberOfSlides - 1;
//   }

//   slides[slideNumber].classList.add("slideActive");

//   if (slideNumber == 0) {
//     prevBtn.disabled = "true";
//   }
// };

// prevButton.addEventListener("click", ()=>{
//   prev();
// });

nextButton.addEventListener("click", ()=>{
  next();
});



document.body.append(titleDiv, mainDiv, layoutDiv);