"use strict";

$(".common_infor li").click(function () {
  var src = $(this).children(0)[0].src;
  console.log(src);
  setCookie({
    key: 'good',
    val: src
  });
  location.href = "./detail.html";
});