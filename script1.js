// var slider_img = document.querySelector('.slider-img');
var images = document.getElementsByTagName("figure");
var i = 0;


// Write all the names of images in slideshow
var images = [ "wgu" , "wjr" , "wp6" , "wpf" ];

function prev()
{
 $( '#slideshow_image' ).fadeOut(300,function()
 {
  var prev_val = document.getElementById( "img_no" ).value;
  var prev_val = Number(prev_val) - 1;
  if(prev_val< = -1)
  {
   prev_val = images.length - 1;
  }
  $( '#slideshow_image' ).attr( 'src' , 'images/'+images[prev_val]+'.png' );
  document.getElementById( "img_no" ).value = prev_val;
 });
 $( '#slideshow_image' ).fadeIn(1000);
}

function next()
{
 $( '#slideshow_image' ).fadeOut(300,function()
 {
  var next_val = document.getElementById( "img_no" ).value;
  var next_val = Number(next_val)+1;
  if(next_val >= images.length)
  {
   next_val = 0;
  }
  $( '#slideshow_image' ).attr( 'src' , 'images/'+images[next_val]+'.jpg' );
  document.getElementById( "img_no" ).value = next_val;
 });
 $( '#slideshow_image' ).fadeIn(1000);
}


function prev(){
    for(i=0; i<images.length; i++){
       console.log(images);
    }
    

        // console.log(images.length)
    
}

    	


// function next(){
// 	if(i >= images.length-1) i = -1;
// 	i++;
// 	return setImg();			 
// }

// function setImg(){
// 	return slider_img.setAttribute('src', "images/"+images[i]);
	
// 