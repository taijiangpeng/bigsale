"use strict";

$('.index_header').load('./header1.html');
var page_now = 1;
var pages;
var length; // var json;

function init() {
  $.ajax({
    url: '../data/goods.json',
    type: 'get',
    datatype: 'json',
    success: function success(data) {
      length = data.length;
      $('.all_num span').text(length);
      length = parseInt(length);
      pages = Math.ceil(length / 2); // console.log(pages);

      $('.all_page').text(pages); // 设置页数

      var str = "";

      for (var i = 0; i < 2; i++) {
        str += "\n        <div class=\"good\">\n            <img src=\"".concat(data[i].src, "\">\n            <div class=\"infor\">\n                <p class=\"title\">").concat(data[i].title, "</p>\n                <p class=\"place\">").concat(data[i].address, "</p>\n                <p class=\"date\">").concat(data[i].data, "</p>\n                <p class=\"price\">").concat(data[i].price.slice(1), "-").concat(data[i].sprice.slice(4), "</p>\n            </div>\n        </div>\n        ");
      }

      $('.goods').html(str);
    }
  });
}

init(); // console.log(window.json);
// 做上面的切换

$('.cityb li').click(function () {
  $(this).siblings().removeClass('show').end().addClass('show');

  if ($(this).text() == '全国') {
    init();
  } else {
    var city = $(this).text();
    $.ajax({
      url: '../data/goods.json',
      type: 'get',
      datatype: 'json',
      success: function success(data) {}
    });
  }
});
$('.typeinfor li').click(function () {
  $(this).siblings().removeClass('show').end().addClass('show');
});
$('.timeinfor li').click(function () {
  $(this).siblings().removeClass('show').end().addClass('show');
});
$('.prev').click(function () {
  page_now--;
  page_now = page_now < 1 ? 1 : page_now;
  $('.now_page').text(page_now);
  $.ajax({
    url: '../data/goods.json',
    type: 'get',
    datatype: 'json',
    success: function success(data) {
      var str = "";

      for (var i = 2 * (page_now - 1); i < 2 * page_now; i++) {
        str += "\n        <div class=\"good\">\n            <img src=\"".concat(data[i].src, "\">\n            <div class=\"infor\">\n                <p class=\"title\">").concat(data[i].title, "</p>\n                <p class=\"place\">").concat(data[i].address, "</p>\n                <p class=\"date\">").concat(data[i].data, "</p>\n                <p class=\"price\">").concat(data[i].price.slice(1), "-").concat(data[i].sprice.slice(4), "</p>\n            </div>\n        </div>\n        ");
      }

      $('.goods').html(str);
    }
  });
});
$('.next').click(function () {
  page_now++; // pages = Math.ceil(length / 2);
  // console.log(pages,length);

  page_now = page_now > pages ? pages : page_now;
  $('.now_page').text(page_now);
  $.ajax({
    url: '../data/goods.json',
    type: 'get',
    datatype: 'json',
    success: function success(data) {
      var str = "";

      for (var i = 2 * (page_now - 1); i < 2 * page_now; i++) {
        // console.log(data[i] == undefined);
        if (data[i] == undefined) {
          continue;
        }

        str += "\n        <div class=\"good\">\n            <img src=\"".concat(data[i].src, "\">\n            <div class=\"infor\">\n                <p class=\"title\">").concat(data[i].title, "</p>\n                <p class=\"place\">").concat(data[i].address, "</p>\n                <p class=\"date\">").concat(data[i].data, "</p>\n                <p class=\"price\">").concat(data[i].price.slice(1), "-").concat(data[i].sprice.slice(4), "</p>\n            </div>\n        </div>\n        ");
      }

      $('.goods').html(str);
    }
  });
});
$('.goods').on("click", '.good', function () {
  // console.log(this);
  console.log($(this).children().eq(0).attr('src'));
  setCookie({
    key: 'good',
    val: $(this).children().eq(0).attr('src')
  });
  location.href = "../pages/detail.html";
});