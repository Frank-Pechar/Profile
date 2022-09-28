"use strict";

const mainNav = document?.querySelector(".main-nav") ?? null;
const artNav = document?.querySelector(".art-nav") ?? null;

// const open = restaurant.openingHours[day]?.open ?? 'closed';

// if (mainNav) {
//   fetch("/index-nav.html")
//     .then((res) => res.text())
//     .then((data) => {
//       mainNav.innerHTML = data;
//     });
// }

// if (artNav) {
//   fetch("/index-art-nav.html")
//     .then((res) => res.text())
//     .then((data) => {
//       artNav.innerHTML = data;
//     });
// }

if (mainNav) {
  mainNav.innerHTML = `
  <ul class="main-nav__list">
  <li class="main-nav__list-logo">
    <a class="main-nav__list-logo-link" href="index.html">Franks Services</a>
  </li>
  <li class="main-nav__list-item" tabindex="1">
    <a class="main-nav__link" href="index.html">Home</a>
  </li>
  <li class="main-nav__list-item" tabindex="2">
    <a class="main-nav__link" href="index-art.html">Art</a>
  </li>
  <li class="main-nav__list-item main-nav__list-item-pin" tabindex="3">
    <a class="main-nav__link" href="">Pinterest</a>
    <ul class="main-nav__list-item-drop dropdown-toggle">
      <li class="main-nav_list-item-sub">
        <a
          class="main-nav__link-sub"
          target="_blank"
          href="https://www.pinterest.com/FrankPechar/american-leaders-quotes-by-frank-pechar/"
          >Great Leaders</a
        >
      </li>
      <li class="main-nav_list-item-sub">
        <a
          class="main-nav__link-sub"
          target="_blank"
          href="https://www.pinterest.com/FrankPechar/greatest-quotes-all-time-pins-by-frank-pechar/"
          >Great Quotes</a
        >
      </li>
      <li class="main-nav_list-item-sub">
        <a
          class="main-nav__link-sub"
          target="_blank"
          href="https://www.pinterest.com/FrankPechar/greatest-poetry-prose-all-time-pins-by-frank-pecha/"
          >Great Poetry</a
        >
      </li>
    </ul>
  </li>
  <li class="main-nav__list-item" tabindex="4">
    <a class="main-nav__link" href="index-projects.html">Projects</a>
  </li>
</ul>
`;
}

// new code

// const dropdownToggle = document.querySelector(".dropdown-toggle");
// const dropdownMenu = document.querySelector(".main-nav__list-item-drop");
// const dropdownMenuItems = document.querySelectorAll(".main-nav_list-item-sub");
// // const dropdownMenuItems = Array.from(dropdownMenu.children);
// let active = -1;

// dropdownToggle.addEventListener("click", function () {
//   dropdownMenu.classList.toggle("show");
//   active = -1;
// });

// document.addEventListener("keydown", function (e) {
//   console.log(e.key);
//   if (e.keyCode == 40) {
//     if (active < dropdownMenuItems.length - 1) {
//       active++;
//       dropdownMenuItems[active].focus();
//     }
//   } else if (e.keyCode == 38) {
//     if (active > 0) {
//       active--;
//       dropdownMenuItems[active].focus();
//     }
//   }
// });

// dropdownMenuItems.forEach((item) => {
//   item.addEventListener("click", function (e) {
//     console.log(e.target);
//     dropdownMenu.classList.remove("show");
//   });
// });

if (artNav) {
  artNav.innerHTML = `

<!-- <div class="art-nav-gradient"></div> -->

<div class="navigation">
  <div class="logo">
    <img
      class="logo__img"
      src="img/Logo-Frank-Pechar.webp"
      alt="Logo for Frank Pechar. Abstract. Diagonal angular shapes in perspective from foreground to background.  Dominant color is blue."
    />
  </div>

  <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

  <label for="navi-toggle" class="navigation__button">
    <span class="navigation__icon">&nbsp;</span>
  </label>

  <div class="navigation__background">&nbsp;</div>

  <nav class="navigation__nav">
    <ul class="navigation__list">
      <li class="navigation__item">
        <a href="index-art-painting.html" class="navigation__link"
          >Digital Painting</a
        >
      </li>
      <li class="navigation__item">
        <a href="index-art-photo-edit.html" class="navigation__link"
          >Photo Editing</a
        >
      </li>
      <li class="navigation__item">
        <a href="index-art-photo-effects.html" class="navigation__link"
          >Photo Effects</a
        >
      </li>
      <li class="navigation__item">
        <a href="index-art-css-effects.html" class="navigation__link"
          >CSS Effects</a
        >
      </li>
      <li class="navigation__item">
        <a href="index-art-js-effects.html" class="navigation__link"
          >JavaScript Effects</a
        >
      </li>
      <li class="navigation__item">
        <a href="index-art.html" class="navigation__link">Main Art Page</a>
      </li>
      <li class="navigation__item">
        <a href="index.html" class="navigation__link">Home Page</a>
      </li>
    </ul>
  </nav>
</div>
`;
}
