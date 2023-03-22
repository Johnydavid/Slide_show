// Title of the Webpage

const titleDiv = document.createElement("div");

// titleDiv.className = "bodyClass";
titleDiv.innerText = "WHEELS"

document.body.append(titleDiv);

const mainDiv = document.createElement("div");


const para = document.createElement("p");
para.innerText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit
 Itaque soluta quo recusandae et? Sequi ex fuga,  ad
aspernatur minus temporibus? Aliquid ea qui quod totam eos? Id, dolorum voluptates. Natus.`
mainDiv.appendChild(para);

const layoutDiv = document.createElement("div");

layoutDiv.className = "layoutClass";


const prevBtn = document.createElement("button");
prevBtn.innerText = "<"


layoutDiv.append(prevBtn);



const images = [
    {
      caption:  "17-INCH CAST ALUMINIUM WHEEL, FULLY PAINTED SILVER LITHO Standard on Touring FWD",
      alt: 'Mount',
      url:"./images/wgu.png"
    },
    {
      caption:  "17-INCH CAST ALUMINIUM DIAMOND-CUT WHEEL WITH BALTIC GREY POCKETS",
      alt: 'Riv',
      url:    "./images/wjr.png"
    },
    {
      caption:  "18-INCH CAST ALUMINIUM WHEEL WTIH FORESHADOW FINISH",
      alt: 'Des',
      url:
      "./images/wp6.png"
    },
    {
      caption:  "18-INCH CAST ALUMINIUM WHEEL WTIH FORESHADOW FINISH",
      alt: 'For',
      url:
      "./images/wpf.png"
    }
    
  ];

  const imgDiv = document.createElement("div");
  imgDiv.className = "imgClass ";

  
const nextBtn = document.createElement("button");
nextBtn.innerText = ">"


  
  images.forEach(images=>{
      let figElem = document.createElement('figure');
      let imageElem = document.createElement('img');
      imageElem.alt = images.alt;
      imageElem.src = images.url;
      imageElem.className = "imgDimen";
      let figCaptionElem = document.createElement('figcaption');
      figCaptionElem.textContent = images.caption;
      figCaptionElem.className = "captionDimen"
      figElem.appendChild(imageElem);
      figElem.appendChild(figCaptionElem);

  
      imgDiv.append(figElem);

      layoutDiv.append(nextBtn);


      nextBtn.addEventListener('click', function() {

    
        count++;
      //   document.getElementById("prevBtn").disabled = false;
        if (count >= slides.length-1) {
          // document.getElementById("nxtBtn").disabled = true;
      
          count =0;
          imgTag.className = "zoomImg";
          
          
        } else {
          imgTag.classList.add = "zoomImg";
        }
      });
     })

     layoutDiv.appendChild(imgDiv);


 
 
 




//initial index of the slide
// var activeSlide = 0;

// nextBtn.addEventListener('click', function() {
//    cardSliderContainer.scrollLeft += 300;
//    //Check if user has been moved to the last slide
//    if (activeSlide === slides.length-1) { 
//      //disable the button
//      nextBtn.classList.add('disabled');
//    } else {
//      //enable both buttons
//      nextBtn.classList.remove('disabled');
//      prevBtn.classList.remove('disabled');
//    }
//    //increase active index
//    activeSlide++;
// });

// const cardSliderContainer = document.querySelectorAll('imgDimen');


const cardSliderSlides = document.getElementsByTagName('figure');

const slides = Array.from(cardSliderSlides);

//   slides.forEach(function(slide, index) {
//     slide.setAttribute('index', index);
//     const slideIndex = slide.getAttribute('index');
//     if (slideIndex === 0) {
//         cardSliderSlides.className = "zoomImg";

//       prevBtn.classList.add('disabled');
//     };
//   });

//   nextBtn.addEventListener('click', function() {
//     cardSliderSlides.scrollLeft += 300;
//   });

//   prevBtn.addEventListener('click', function() {
//     cardSliderSlides.scrollLeft -= 300;
//   });


  var imgTag = document.getElementsByTagName("figure")
var count =0;



document.body.append(mainDiv, layoutDiv);






