// JavaScript Document
console.log("howdy");

var Selected = "schoen2";

var hoverColor = "rgb(199, 209, 214)";
var savedColor = "";

var Kleur1 = "rgb(247, 98, 35)";
var Kleur2 = "rgb(255, 219, 158)";
var Kleur3 = "rgb(157, 213, 242)";
var Kleur4 = "rgb(19, 72, 112)";

// Ik weet dat dit hieronder veel korter kan, maar ik begrijp javascript nog niet goed genoeg om dit te doen en het uit te kunnen leggen, daarom heb ik geen forEach gebruikt.

const schoen = document.getElementById("schoen2");
schoen.addEventListener("click", schoen2func);
schoen.addEventListener("mouseover", schoen2hover);
schoen.addEventListener("mouseout", schoen2out);

function schoen2func() {
  document.getElementById("selected").innerText = "SCHOEN";
  Selected = "schoen2"
}

function schoen2hover() {
  savedColor = document.getElementById("schoen2").style.stroke
  document.getElementById("schoen2").style.stroke=hoverColor;
}

function schoen2out() {
  document.getElementById("schoen2").style.stroke=savedColor;
}

const veters = document.getElementById("veters2");
veters.addEventListener("click", veters2func);
veters.addEventListener("mouseover", veters2hover);
veters.addEventListener("mouseout", veters2out);

function veters2func() {
  document.getElementById("selected").innerText = "VETERS";
  Selected = "veters2"
}

function veters2hover() {
  savedColor = document.getElementById("veters2").style.stroke
  document.getElementById("veters2").style.stroke=hoverColor;
}

function veters2out() {
  document.getElementById("veters2").style.stroke=savedColor;
}

const zool = document.getElementById("zool2");
zool.addEventListener("click", zool2func);
zool.addEventListener("mouseover", zool2hover);
zool.addEventListener("mouseout", zool2out);

function zool2func() {
  document.getElementById("selected").innerText = "ZOOL";
  Selected = "zool2"
}

function zool2hover() {
  savedColor = document.getElementById("zool2").style.stroke
  document.getElementById("zool2").style.stroke=hoverColor;
}

function zool2out() {
  document.getElementById("zool2").style.stroke=savedColor;
}

const enkel = document.getElementById("enkel2");
enkel.addEventListener("click", enkel2func);
enkel.addEventListener("mouseover", enkel2hover);
enkel.addEventListener("mouseout", enkel2out);

function enkel2func() {
  document.getElementById("selected").innerText = "ENKEL";
  Selected = "enkel2"
}

function enkel2hover() {
  savedColor = document.getElementById("enkel2").style.stroke
  document.getElementById("enkel2").style.stroke=hoverColor;
}

function enkel2out() {
  document.getElementById("enkel2").style.stroke=savedColor;
}

const color1 = document.querySelector("body > section:nth-child(4) > button:nth-child(1)");
color1.addEventListener("click", color1func);

function color1func() {
    document.getElementById(Selected).style.stroke=Kleur1;
}

const color2 = document.querySelector("body > section:nth-child(4) > button:nth-child(2)");
color2.addEventListener("click", color2func);

function color2func() {
    document.getElementById(Selected).style.stroke=Kleur2;
}

const color3 = document.querySelector("body > section:nth-child(4) > button:nth-child(3)");
color3.addEventListener("click", color3func);

function color3func() {
    document.getElementById(Selected).style.stroke=Kleur3;
}

const color4 = document.querySelector("body > section:nth-child(4) > button:nth-child(4)");
color4.addEventListener("click", color4func);

function color4func() {
    document.getElementById(Selected).style.stroke=Kleur4;
}