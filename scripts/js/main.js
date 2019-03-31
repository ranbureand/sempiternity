/* Copyright (c) 2017 Andrea Buran [www.andreaburan.com]. All rights reserved */

/*
** Colors
*/

var colorsCanvas = document.createElement('div');
colorsCanvas.classList.add('colors-canvas');

var footer = document.querySelector('.footer-canvas');
footer.before(colorsCanvas);

var colors = document.createElement('div');
colors.classList.add('colors');
colors.classList.add('layout-1d');
colorsCanvas.appendChild(colors);

for (i = 0; i < 24; i++) {
  var color = document.createElement('div');
  color.classList.add('color-h' + i);
  var colorLink = document.createElement('a');
  color.appendChild(colorLink);

  colors.appendChild(color);
}

/*
** Footnotes
*/

var footnote = document.getElementsByClassName('reversefootnote');

for (i = 0; i < footnote.length; i++) {
    footnote[i].textContent = 'Back to Number';
}