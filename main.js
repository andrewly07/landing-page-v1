window.onload = function () {
  this.setTimeout(logo, 1000);
  this.setTimeout(this.menuOne, 1000);
  this.setTimeout(this.menuTwo, 1000);
  this.setTimeout(this.socialMedia, 1000);
  this.setTimeout(this.indi, 1000);
  this.setTimeout(this.content, 1500);
  this.setTimeout(this.img, 1500);
  this.setTimeout(this.navigator, 1500);
};

function logo() {
  var h = document.querySelector(".logo h1");
  h.style.opacity = "1";
}

function menuOne() {
  var l = document.querySelectorAll(".menu-one li");
  var i;
  for (i = 0; i < l.length; i++) {
    l[i].style.opacity = "1";
    l[i].style.transform = "translate(0)";
  }
}

function menuTwo() {
  var l = document.querySelectorAll(".menu-two li");
  var i;
  for (i = 0; i < l.length; i++) {
    l[i].style.opacity = "1";
    l[i].style.transform = "translate(0)";
  }
}

function socialMedia() {
  var l = document.querySelectorAll(".social-media li");
  var i;
  for (i = 0; i < l.length; i++) {
    l[i].style.opacity = "1";
    l[i].style.transform = "translate(0)";
  }
}

function indi() {
  var l = document.querySelectorAll(".indi li");
  var i;
  for (i = 0; i < l.length; i++) {
    l[i].style.opacity = "1";
    l[i].style.transform = "translate(0)";
  }
}

function content() {
  var he = document.querySelector(".content h1");
  he.style.opacity = "1";
  he.style.transform = "translate(0)";
  var p = document.querySelector(".content p");
  p.style.opacity = "1";
  p.style.transform = "translate(0)";
  var b = document.querySelector(".content button");
  b.style.opacity = "1";
  b.style.transform = "translate(0)";
}

function img() {
  var im = document.querySelector(".img");
  im.style.opacity = "1";
  im.style.transform = "translate(0)";
}

function navigator() {
  var n = document.querySelector(".navigator");
  n.style.opacity = "1";
  n.style.transform = "translate(0)";
}
