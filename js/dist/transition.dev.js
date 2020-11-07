"use strict";

function updateTransitionE() {
  var el = document.querySelector("div.letter-E");

  if (el) {
    el.className = "letter-E1";
  }

  return el;
}

function updateTransitionL() {
  var el = document.querySelector("div.letter-L");

  if (el) {
    el.className = "letter-L1";
  }

  return el;
}

function updateTransitionA() {
  var el = document.querySelector("div.letter-A");

  if (el) {
    el.className = "letter-A1";
  }

  return el;
}

function updateTransitionN() {
  var el = document.querySelector("div.letter-N");

  if (el) {
    el.className = "letter-N1";
  }

  return el;
}

var intervalID = window.setInterval(updateTransitionE, 1000);
var intervalID = window.setInterval(updateTransitionL, 2000);
var intervalID = window.setInterval(updateTransitionA, 3000);
var intervalID = window.setInterval(updateTransitionN, 4000);