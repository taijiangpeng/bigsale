"use strict";

$('.country').mouseenter(function () {
  $('.country_show').css({
    'display': 'block'
  });
}).mouseleave(function () {
  $('.country_show').css('display', 'none');
});
$('.search input').click(function () {
  $(this).css('border', '1px solid #df6f95');
});
$('.header').click(function () {// location.href = './index.html'
});
$('.toindex').click(function () {
  location.href = '../pages/index.html';
});
$('.logo').click(function () {
  location.href = '../pages/index.html';
});
$('.r1').click(function () {
  location.href = '../pages/login.html'; // console.log(this);
});
$('.fenlei').click(function () {
  location.href = '../pages/list.html';
});