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

layoutDiv.append(prevButton);

const images = [
  {
    caption:
      "17-INCH CAST ALUMINIUM WHEEL, FULLY PAINTED SILVER LITHO Standard on Touring FWD",
    alt: "Mount",
    url: "./images/wgu.png",
  },
  {
    caption:
      "17-INCH CAST ALUMINIUM DIAMOND-CUT WHEEL WITH BALTIC GREY POCKETS",
    alt: "Riv",
    url: "./images/wjr.png",
  },
  {
    caption: "18-INCH CAST ALUMINIUM WHEEL WTIH FORESHADOW FINISH",
    alt: "Des",
    url: "./images/wp6.png",
  },
  {
    caption: "18-INCH CAST ALUMINIUM WHEEL WTIH FORESHADOW FINISH",
    alt: "For",
    url: "./images/wpf.png",
  },
];

const imgDiv = document.createElement("div");
imgDiv.className = "slider ";

const nextButton = document.createElement("button");
nextButton.innerText = ">";
nextButton.className="next-btn"

images.forEach((images) => {
  let figElem = document.createElement("figure");
  let imageElem = document.createElement("img");
  imageElem.alt = images.alt;
  imageElem.src = images.url;
  imageElem.className = "slide";
  // figElem.classList.add("slide active");
  figElem.className = "slider";
  let figCaptionElem = document.createElement("figcaption");
  figCaptionElem.textContent = images.caption;
  figCaptionElem.className = "info";
  figElem.appendChild(imageElem);
  figElem.appendChild(figCaptionElem);

  imgDiv.append(figElem);

  layoutDiv.appendChild(imgDiv);
});

layoutDiv.append(nextButton);


const slider = document.querySelector("layoutClass");
const nextBtn = document.querySelector("next-btn");
const prevBtn = document.querySelector("prev-btn");
const slides = document.querySelectorAll("slide");
const numberOfSlides = slides.length;
var slideNumber = 0;

function next() {
  //image slider next button
  prevBtn.removeAttribute("disabled");

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slideNumber++;

  if (slideNumber > numberOfSlides - 1) {
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");

  if (slideNumber == 0) {
    nextBtn.disabled = "true";
  }
}

function prev() {
  //image slider previous button

  slides.forEach((slide) => {
    nextBtn.removeAttribute("disabled");

    slide.classList.remove("active");
  });

  slideNumber--;

  if (slideNumber < 0) {
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");

  if (slideNumber == 0) {
    prevBtn.disabled = "true";
  }
}


document.body.append(titleDiv, mainDiv, layoutDiv);