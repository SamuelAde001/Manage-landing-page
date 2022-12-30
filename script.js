const menuBar = document.getElementById ('menubar');
const menu = document.getElementById ('menu');
const close = document.getElementById ('close');
const darkcovering = document.getElementById ('darkcovering');

menuBar.addEventListener ('click', function () {
  menuBar.classList.toggle ('bg-white');
  if (menu.classList.contains ('hidden')) {
    menu.classList.remove ('hidden');
  } else {
    menu.classList.add ('hidden');
  }
  if (close.classList.contains ('hidden')) {
    close.classList.remove ('hidden');
  } else {
    close.classList.add ('hidden');
  }

  if (darkcovering.classList.contains ('hidden')) {
    darkcovering.classList.remove ('hidden');
    darkcovering.classList.add ('flex');
  } else {
    darkcovering.classList.add ('hidden');
  }
});
