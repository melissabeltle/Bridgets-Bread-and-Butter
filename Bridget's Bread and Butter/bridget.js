

  var i = 0; 
  var images = [];
  var time = 3000;

  // IMG
  images[0] = 'https://github.com/melissabeltle/Bridgets-Bread-and-Butter/blob/master/Bridget's%20Bread%20and%20Butter/img/bread1.jpeg';
  images[1] = 'https://github.com/melissabeltle/Bridgets-Bread-and-Butter/blob/master/Bridget's%20Bread%20and%20Butter/img/brownie.jpeg';
  images[2] = 'https://github.com/melissabeltle/Bridgets-Bread-and-Butter/blob/master/Bridget's%20Bread%20and%20Butter/img/cookie3.jpeg';
  images[3] = 'https://github.com/melissabeltle/Bridgets-Bread-and-Butter/blob/master/Bridget's%20Bread%20and%20Butter/img/muffin2.jpeg';
  images[4] = 'https://github.com/melissabeltle/Bridgets-Bread-and-Butter/blob/master/Bridget's%20Bread%20and%20Butter/img/cake1.jpeg';

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






