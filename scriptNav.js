'use strict';

const artNav = document?.querySelector('.art-nav') ?? null;

if (artNav) {
  artNav.innerHTML = `

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
        <a href="index-art-photo-effects.html" class="navigation__link"
          >Photo Effects</a
        >
      </li>			
      <li class="navigation__item">
        <a href="index-art-photo-edit.html" class="navigation__link"
          >Photo Editing</a
        >
      </li>
      <li class="navigation__item">
        <a href="index-art-digital-fusion.html" class="navigation__link"
          >Digital Fusion Art</a
        >
      </li>
      <li class="navigation__item">
        <a href="index-art-js-css-effects.html" class="navigation__link"
          >JavaScript / CSS Effects</a
        >
      </li>
      <li class="navigation__item">
        <a href="index.html" class="navigation__link">Main Art Page</a>
      </li>
    </ul>
  </nav>
</div>
`;
}
