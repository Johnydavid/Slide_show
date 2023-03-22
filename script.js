var photos = [
    "./images/wgu.png", 
  "./images/wjr.png",
  "./images/wp6.png",
  "./images/wpf.png",
];



// photos.forEach((photo)=>{
//     const slides = document.createElement("img")
//     slides.src = "photo.png";
//     slides.alt = "photo"
    
// const slideDiv = document.getElementById("slider");
// slideDiv.append(slides);

// })



var imgTag = document.querySelector("img");
var count =0;

function next() {
  count++;
  document.getElementById("prevBtn").disabled = false;
  if (count >= photos.length-1) {
    document.getElementById("nxtBtn").disabled = true;

    count =0;
    imgTag.src = photos[count];
  } else {
    imgTag.src = photos[count];
  }
}

function prev(){
    count--;
    if(count <= 0){
    
        count <= photos.length -1;
        document.getElementById("prevBtn").disabled = false;

     
        imgTag.src = photos[count];
      
     
      
    }
    

   
       

   
    else{
      
        imgTag.src = photos[count];
    }

 
 
}
