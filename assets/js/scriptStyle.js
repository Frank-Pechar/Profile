'use strict';

const project = document.querySelectorAll('.proj__li');

project.forEach((proj, i) => {
  const i2 = (i + 1) * 40;
  const i3 = i2 > 180 ? i2 - 180 : i2 + 180;

  proj.children[0].style.backgroundColor = `hsl(${i2}, 35%, 40%)`;
  proj.children[0].children[0].style.color = `hsl(${i2}, 75%, 10%)`;
  proj.children[0].children[1].style.color = `hsl(${i2}, 75%, 10%)`;

  proj.children[1].style.backgroundColor = `hsl(${i2}, 35%, 40%)`;
  proj.children[1].children[0].style.color = `hsl(${i2}, 75%, 10%)`;
  proj.children[1].children[2].style.color = `hsl(${i2}, 75%, 10%)`;
});
