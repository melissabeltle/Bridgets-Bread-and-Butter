

  var i = 0; 
  var images = [];
  var time = 3000;

  // IMG
  images[0] = 'img/bread1.jpeg';
  images[1] = 'img/brownie.jpeg';
  images[2] = 'img/cookie3.jpeg';
  images[3] = 'img/muffin2.jpeg';
  images[4] = 'img/cake1.jpeg';

  // img change

function changeImg(){
  document.slide.src = images[i];

  if(i < images.length - 1){
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);

}

window.onload = changeImg;






