'use strict';

const modal = document.querySelector('.modal');
modal.innerHTML = `    
  <div class="modalContent">
    <img src="" class="modalImg" />
    <span class="modalTxt"></span>
    <div class="modalNav">
      <button type="button" class="button prevBtn">&#8592;</button>
      <button type="button" class="button nextBtn">&#8594;</button>
      <button class="close">&times;</button>
    </div>
  </div>
`;

const images = document.querySelectorAll('.card__img-thumb');
let modalImg = document.querySelector('.modalImg');
const modalTxt = document.querySelector('.modalTxt');
const close = document.querySelector('.close');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

function onAnimationEnd() {
  modalImg.style.animationName = 'none';
}

function animate(i) {
  modalImg.src = images[i].src;
  modalImg.style.animationName = 'fadeInImg';
  modalImg.addEventListener('animationend', onAnimationEnd);
}

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    modalImg.src = image.src;
    modal.classList.add('appear');
    modalImg.style.animationName = 'fadeInImg';
    modalImg.addEventListener('animationend', onAnimationEnd);
    let imageIndex = index;
    let next = imageIndex + 1;
    let prev = imageIndex - 1;

    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        if (prev < 0) prev = images.length - 1;
        prevImg();
      } else if (e.key === 'ArrowRight') {
        if (next >= images.length) next = 0;
        nextImg();
      } else if (e.key === 'Escape') {
        modal.classList.remove('appear');
      }
    });

    prevBtn.addEventListener('click', () => {
      if (prev < 0) prev = images.length - 1;
      prevImg();
    });

    nextBtn.addEventListener('click', () => {
      if (next >= images.length) next = 0;
      nextImg();
    });

    close.addEventListener('click', () => {
      modal.classList.remove('appear');
    });

    function nextImg() {
      animate(next);
      next++;
      prev = next - 2;
    }

    function prevImg() {
      animate(prev);
      prev--;
      next = prev + 2;
    }
  });
});
