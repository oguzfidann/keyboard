let text = document.querySelector("#text-area");

let qQ = document.querySelector("#q");
let wW = document.querySelector("#w");
let eE = document.querySelector("#e");
let rR = document.querySelector("#r");
let tT = document.querySelector("#t");
let yY = document.querySelector("#y");
let uU = document.querySelector("#u");
let iI = document.querySelector("#i");
let oO = document.querySelector("#o");
let pP = document.querySelector("#p");
let aA = document.querySelector("#a");
let sS = document.querySelector("#s");
let dD = document.querySelector("#d");
let fF = document.querySelector("#f");
let gG = document.querySelector("#g");
let hH = document.querySelector("#h");
let jJ = document.querySelector("#j");
let kK = document.querySelector("#k");
let lL = document.querySelector("#l");
let zZ = document.querySelector("#z");
let xX = document.querySelector("#x");
let cC = document.querySelector("#c");
let vV = document.querySelector("#v");
let bB = document.querySelector("#b");
let nN = document.querySelector("#n");
let mM = document.querySelector("#m");

qQ.onclick = function () {
  text.value += qQ.value;
};

wW.onclick = function () {
  text.value += wW.value;
};

eE.onclick = function () {
  text.value += eE.value;
};

rR.onclick = function () {
  text.value += rR.value;
};

tT.onclick = function () {
  text.value += tT.value;
};

yY.onclick = function () {
  text.value += yY.value;
};

uU.onclick = function () {
  text.value += uU.value;
};

iI.onclick = function () {
  text.value += iI.value;
};

oO.onclick = function () {
  text.value += oO.value;
};

pP.onclick = function () {
  text.value += pP.value;
};

aA.onclick = function () {
  text.value += aA.value;
};

sS.onclick = function () {
  text.value += sS.value;
};

dD.onclick = function () {
  text.value += dD.value;
};

fF.onclick = function () {
  text.value += fF.value;
};

gG.onclick = function () {
  text.value += gG.value;
};

hH.onclick = function () {
  text.value += hH.value;
};

jJ.onclick = function () {
  text.value += jJ.value;
};

kK.onclick = function () {
  text.value += kK.value;
};

lL.onclick = function () {
  text.value += lL.value;
};

zZ.onclick = function () {
  text.value += zZ.value;
};

xX.onclick = function () {
  text.value += xX.value;
};

cC.onclick = function () {
  text.value += cC.value;
};

vV.onclick = function () {
  text.value += vV.value;
};

bB.onclick = function () {
  text.value += bB.value;
};

nN.onclick = function () {
  text.value += nN.value;
};

mM.onclick = function () {
  text.value += mM.value;
};

function Display(punctuation) {
  text.value += punctuation;
}

function Backspace() {
  text.value = text.value.slice(0, -1);
}

function Enter() {
  let ulDOM = document.querySelector("#list");
  let liDOM = document.createElement("li");
  liDOM.innerHTML = text.value;
  ulDOM.append(liDOM);
  text.value = "";
}

function Clear() {
  text.value = "";
}

let leftShiftButton = document.querySelector("#left-shift");

leftShiftButton.onclick = function () {
  rightShiftButton.style.backgroundColor = "pink";
  leftShiftButton.style.display = "none";
  rightShiftButton.style.display = "inline-block";
  let inputButton = document.querySelectorAll("input");
  let i;
  for (i = 0; i < inputButton.length; i++) {
    inputButton[i].style.textTransform = "lowercase";
    inputButton[i].style.backgroundColor = "skyblue";
  }

  qQ.value = qQ.value.toLowerCase();
  wW.value = wW.value.toLowerCase();
  eE.value = eE.value.toLowerCase();
  rR.value = rR.value.toLowerCase();
  tT.value = tT.value.toLowerCase();
  yY.value = yY.value.toLowerCase();
  uU.value = uU.value.toLowerCase();
  iI.value = iI.value.toLowerCase();
  oO.value = oO.value.toLowerCase();
  pP.value = pP.value.toLowerCase();
  aA.value = aA.value.toLowerCase();
  sS.value = sS.value.toLowerCase();
  dD.value = dD.value.toLowerCase();
  fF.value = fF.value.toLowerCase();
  gG.value = gG.value.toLowerCase();
  hH.value = hH.value.toLowerCase();
  jJ.value = jJ.value.toLowerCase();
  kK.value = kK.value.toLowerCase();
  lL.value = lL.value.toLowerCase();
  zZ.value = zZ.value.toLowerCase();
  xX.value = xX.value.toLowerCase();
  cC.value = cC.value.toLowerCase();
  vV.value = vV.value.toLowerCase();
  bB.value = bB.value.toLowerCase();
  nN.value = nN.value.toLowerCase();
  mM.value = mM.value.toLowerCase();
};

let rightShiftButton = document.querySelector("#right-shift");

rightShiftButton.onclick = function () {
  rightShiftButton.style.backgroundColor = "darkgrey";
  rightShiftButton.style.display = "none";
  leftShiftButton.style.display = "inline-block";
  let inputButton = document.querySelectorAll("input");
  let i;
  for (i = 0; i < inputButton.length; i++) {
    inputButton[i].style.textTransform = "uppercase";
    inputButton[i].style.backgroundColor = "darkgrey";
  }

  qQ.value = qQ.value.toUpperCase();
  wW.value = wW.value.toUpperCase();
  eE.value = eE.value.toUpperCase();
  rR.value = rR.value.toUpperCase();
  tT.value = tT.value.toUpperCase();
  yY.value = yY.value.toUpperCase();
  uU.value = uU.value.toUpperCase();
  iI.value = iI.value.toUpperCase();
  oO.value = oO.value.toUpperCase();
  pP.value = pP.value.toUpperCase();
  aA.value = aA.value.toUpperCase();
  sS.value = sS.value.toUpperCase();
  dD.value = dD.value.toUpperCase();
  fF.value = fF.value.toUpperCase();
  gG.value = gG.value.toUpperCase();
  hH.value = hH.value.toUpperCase();
  jJ.value = jJ.value.toUpperCase();
  kK.value = kK.value.toUpperCase();
  lL.value = lL.value.toUpperCase();
  zZ.value = zZ.value.toUpperCase();
  xX.value = xX.value.toUpperCase();
  cC.value = cC.value.toUpperCase();
  vV.value = vV.value.toUpperCase();
  bB.value = bB.value.toUpperCase();
  nN.value = nN.value.toUpperCase();
  mM.value = mM.value.toUpperCase();
};
