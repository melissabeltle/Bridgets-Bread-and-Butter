

  var i = 0; 
  var images = [];
  var time = 3000;

  // IMG
  images[0] = 'https://user-images.githubusercontent.com/50235978/61487830-cd77ed00-a974-11e9-912d-7c6cbe59df6e.jpeg';
  images[1] = 'https://user-images.githubusercontent.com/50235978/61487858-da94dc00-a974-11e9-9bea-942e81a988b4.jpeg';
  images[2] = 'https://user-images.githubusercontent.com/50235978/61487895-ed0f1580-a974-11e9-9901-c59bb77ab6ab.jpeg';
  images[3] = 'https://user-images.githubusercontent.com/50235978/61487916-fb5d3180-a974-11e9-9842-963a501a994f.jpg';
  images[4] = 'https://user-images.githubusercontent.com/50235978/61487949-1465e280-a975-11e9-9f79-9a0a2bda60a8.jpeg';

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






