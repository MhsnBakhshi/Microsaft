const $ = document;

const navToggelIcon = $.querySelector (".nav__toggel-icon");
const menuElem = $.querySelector ('.menu');
const coverShowStyle = $.querySelector ('.cover');
let clickHandle = false;

navToggelIcon.addEventListener ("click", function () {
  if (clickHandle) {
    navToggelIcon.classList.remove ("nav__toggel-icon--open");
    menuElem.classList.remove ("menu--open");
    coverShowStyle.classList.remove ('cover--show')
    clickHandle = false;
  } else {
    navToggelIcon.classList.add ("nav__toggel-icon--open");
    menuElem.classList.add ("menu--open");
    coverShowStyle.classList.add ('cover--show')
    clickHandle = true;
  }
});
