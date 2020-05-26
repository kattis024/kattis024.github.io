var data0 = {
photo: 'img/Elizabeth04.jpg',
title: 'Book of Hours',
description: 'c. 1450-1460, MS M.78 fol. 162v, The Morgan Library and Museum'
};

var data1 = {
photo: 'img/Elizabeth05.jpg',
title: 'Book of Hours',
description: 'c. 1515,  MS M.399 fol. 328, The Morgan Library and Museum'
};

var data2 = {
photo: 'img/Elizabeth08.png',
title: 'Book of Hours',
description: 'c. 1500, Add MS 35313, fol. 235v, The British Library'
};

var data3 = {
photo: 'img/Elizabeth09.jpg',
title: 'Book of Hours',
description: 'c. 1480, Add MS 54782, fol. 64v, The British Library'

};

var data4 = {
photo: 'img/Elizabeth11.png',
title: 'Book of Hours',
description: 'c. 1497, Add MS 18851, fol. 488v, The British Library'
};

var data5 = {
photo: 'img/Elizabeth12.png',
title: 'Book of Hours',
description: 'c. 1500, 1963.256.197.b, fol. 197v, The Cleveland Museum of Arts'
};

var data6 = {
photo: 'img/Elizabeth13.jpg',
title: 'Book of Hours',
description: 'post 1480, Mss. I15503, fol. 46v, Fundación Lázaro Galdiano'
};

var data7 = {
photo: 'img/Elizabeth14.jpg',
title: 'Book of Hours',
description: 'c. 1440, MS M.357. fol. 14v, The Morgan Library and Museum'
};

var data8 = {
photo: 'img/Elizabeth16.jpg',
title: 'Book of Hours',
description: 'c. 1470, MS M.285 fol. 257, The Morgan Library and Museum'
};

var imagesData = [data0, data1, data2, data3, data4, data5, data6, data7, data8];
var currentPhoto = 0;
var loadData = function(dataNumber) {
$('#photoImg').attr('src', imagesData[currentPhoto].photo);
$('#photo-title').text(imagesData[currentPhoto].title);
$('#photo-description').text(imagesData[currentPhoto].description);
}

loadData(currentPhoto);

// nyilak működtetése

$('#rightArrow').click (function(){
if (currentPhoto < 9) {
currentPhoto++;
}
loadData(currentPhoto);
});

$('#leftArrow').click (function(){
if (currentPhoto > 0) {
  currentPhoto--
}
loadData(currentPhoto);
});

// kiindulási pont $('#thumbnails').attr('src', element.photo);
 
imagesData.forEach(function(element, index) {
  var thumbImg = document.createElement("img");
  thumbImg.src = element.photo;
  thumbImg.classList.add('tv-item');
  thumbImg.setAttribute('data-ind', index);
  
  document.getElementsByClassName('thumbs')[0].appendChild(thumbImg);
  
});
$('.tv-item').click((event) => {
    let indexClicked = $(event.target).attr('data-ind');
    let numberIndex = parseInt(indexClicked);
    currentPhoto = numberIndex;
    loadData(currentPhoto); 
  })
