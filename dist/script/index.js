"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$('.index_header').load('./header1.html');
$(function ($) {
  var _Swiper;

  var mySwiper = new Swiper('.swiper-container', (_Swiper = {
    direction: 'horizontal',
    loop: true,
    // 循环模式选项
    autoplay: true,
    effect: 'fade'
  }, _defineProperty(_Swiper, "autoplay", {
    delay: 1000 //1秒切换一次

  }), _defineProperty(_Swiper, "pagination", {
    el: '.swiper-pagination'
  }), _defineProperty(_Swiper, "navigation", {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }), _defineProperty(_Swiper, "scrollbar", {
    el: '.swiper-scrollbar'
  }), _Swiper)); //移动到图片时候字变色

  $('.type .wrap').mouseenter(function () {
    $(this).children().eq(1).css('color', '#df6f95');
  }).mouseleave(function () {
    $(this).children().eq(1).css('color', '#111');
  }); //商品详情文字变红
});