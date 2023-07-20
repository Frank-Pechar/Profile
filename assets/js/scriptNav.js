'use strict';

const nav = document.querySelector('.nav-js');
const bodyBackground = document.querySelector('.body-background-js');

if (bodyBackground) {
  bodyBackground.innerHTML = `
    <div class="body-background">
      <div class="starfield">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>`;
}

const src =
  document.body.class === 'body-home'
    ? 'assets/img/Logo-Frank-Pechar3c.webp'
    : '../assets/img/Logo-Frank-Pechar3c.webp';

nav.innerHTML = `
  <div class="navigation">
    <div class="logo">
    <a href="../index.html"> 
      <img
        class="logo__img"
        src=${src}
        alt="Logo for Frank Pechar. Abstract. Diagonal angular shapes in perspective from foreground to background.  Dominant color is blue."
      />
    </a>
  </div>

  <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

  <label for="navi-toggle" class="navigation__button">
    <span class="navigation__icon">&nbsp;</span>
  </label>

  <div class="navigation__background">&nbsp;</div>

  <nav class="navigation__nav">
    <ul class="navigation__list">
      <li class="navigation__item">
        <a href="../html-pages/web-projects.html" class="navigation__link"
          >JavaScript/CSS/React</a
        >
      </li>
      <li class="navigation__item">
        <a href="../html-pages/digital-painting.html" class="navigation__link"
          >Digital Painting</a
        >
      </li>
      <li class="navigation__item">
        <a href="../html-pages/photo-effects.html" class="navigation__link"
          >Photo Effects</a
        >
      </li>			
      <li class="navigation__item">
        <a href="../html-pages/photo-editing.html" class="navigation__link"
          >Photo Editing</a
        >
      </li>
      <li class="navigation__item">
        <a href="../html-pages/digital-fusion-art.html" class="navigation__link"
          >Digital Fusion Art</a
        >
      </li>
      <li class="navigation__item">
      <a href="../html-pages/other-interests.html" class="navigation__link"
        >Other Interests</a
      >
    </li>
      <li class="navigation__item">
        <a href="../index.html" class="navigation__link">Main Page</a>
      </li>
    </ul>
  </nav>
</div>
`;

function check() {
  const checkButton = document.getElementById('navi-toggle');
  checkButton.checked = true;
}

// window.onload = function () {
//   window.addEventListener('load', check, false);
// };

// const triangleBtn = document.getElementsByClassName('rounded-triangle--2');
// triangleBtn[0].addEventListener('click', checkBtn);
