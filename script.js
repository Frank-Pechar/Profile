"use strict";

const nav = document.querySelector(".nav");
fetch("/index-nav.html")
  .then((res) => res.text())
  .then((data) => {
    nav.innerHTML = data;
  });

const images = document.querySelectorAll(".img-thumb");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");
const close = document.querySelector(".close");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    modalImg.src = image.src;
    modalTxt.innerHTML = image.alt;
    modal.classList.add("appear");
    let imageIndex = index;
    let next = imageIndex + 1;
    let prev = imageIndex - 1;

    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        if (prev < 0) prev = images.length - 1;
        prevImg();
      } else if (e.key === "ArrowRight") {
        if (next >= images.length) next = 0;
        nextImg();
      } else if (e.key === "Escape") {
        modal.classList.remove("appear");
      }
    });

    prevBtn.addEventListener("click", () => {
      if (prev < 0) prev = images.length - 1;
      prevImg();
    });

    nextBtn.addEventListener("click", () => {
      if (next >= images.length) next = 0;
      nextImg();
    });

    close.addEventListener("click", () => {
      modal.classList.remove("appear");
    });

    function nextImg() {
      modalImg.src = images[next].src;
      modalTxt.innerHTML = images[next].alt;
      next++;
      prev = next - 2;
    }

    function prevImg() {
      modalImg.src = images[prev].src;
      modalTxt.innerHTML = images[prev].alt;
      prev--;
      next = prev + 2;
    }
  });
});
