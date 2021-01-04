
'use strict';

// 2秒おきに画像が切り替わる
// DOMContentLoaded
// document.addEventListener('DOMContentLoaded',() => {
//   setInterval(() => {
//     let target = currentIndex + 1;
//     if (target === images.length) {
//       target = 0;
//     }
//     document.querySelectorAll('.carousel__thumbnails > li')[target].click();
//     console.log(currentIndex);
//   }, 2000);
// });


const images = [
'images/images-1.jpg',
'images/images-2.jpg',
'images/images-3.jpg',
'images/images-4.jpg',
'images/images-5.jpg',
'images/images-6.jpg'
];

let currentIndex = 0;

const mainImage = document.getElementById('carousel__main');
mainImage.src = images[currentIndex];
// console.log(mainImage.src);

// for (let image of images) {
//   画像だけ
//   console.log(image);
// }

// コンソールに何番目と画像はどれかを表示

for (let [index, image] of images.entries()) {
  const img = document.createElement('img');
  img.src = image;

  const li = document.createElement('li');
  if (index === currentIndex) {
    li.classList.add('current');
  }

  li.addEventListener('click', () => {
    mainImage.src = image;
    mainImage.classList.add('active');

    setTimeout(() => {
      mainImage.classList.remove('active');
    }, 800);

    const thumbnails = document.querySelectorAll('.carousel__thumbnails > li');
    thumbnails[currentIndex].classList.remove('current');
    currentIndex = index;
    thumbnails[currentIndex].classList.add('current');

  });

  li.appendChild(img);
  document.querySelector('.carousel__thumbnails').appendChild(li);
}

const next = document.getElementById('carousel__next');
next.addEventListener('click', () => {
  let target = currentIndex + 1;
  if (target === images.length) {
    target = 0;
  }
  document.querySelectorAll('.carousel__thumbnails > li')[target].click();

});

const prev = document.getElementById('carousel__prev');
prev.addEventListener('click', () => {
  let target = currentIndex - 1;
  if (target < 0) {
    target = images.length - 1;
  }
  document.querySelectorAll('.carousel__thumbnails > li')[target].click();
});