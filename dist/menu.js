"use strict";

var root = document.getElementById('root');
var anchorTags = function anchorTags(href, textNode) {
  var result = "<a href=\"#".concat(href, "\">").concat(textNode, "</a>");
  return result;
};
var basicData = {
  bomi: "보미",
  jaemin: "재민",
  ujin: "유진",
  jiyoon: "지윤"
};
var liTags = function liTags(children) {
  var result = "<li>".concat(children, "</li>");
  return result;
};
var totalElement = function totalElement(object) {
  var result = '';
  for (var key in object) {
    // TypeScript가 key가 BasicData의 키인 것을 알게 함
    var value = object[key];
    result += liTags(anchorTags(key, value));
  }
  return result;
};
root.innerHTML = "\n<ul id=\"menu\">\n  ".concat(totalElement(basicData), "\n</ul>\n<main id=\"main-target\"></main>");

//------------------------------------
// * HTML을 대신해서 만든 HTML 작성 코드
// * React, CSR

var mainTarget = document.getElementById('main-target');
console.log(window.location.hash);
window.addEventListener('hashchange', function () {
  var hash = window.location.hash;
  console.log(hash.slice(1));
  mainTarget.innerHTML = basicData.jaemin;
});