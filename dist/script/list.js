"use strict";

$('.index_header').load('./header1.html');
$('.rightnav').load('./rightnav.html');
$('.footer').load('./footer.html');
var page_now = 1;
var pages;
var length;
var this_city = [];
var this_type = [];
var data_all;
var status = true;
var all_status = true; // var json;

function init() {
  $.ajax({
    url: '../data/goods.json',
    type: 'get',
    datatype: 'json',
    async: false,
    success: function success(data) {
      length = data.length;
      $('.all_num span').text(length);
      length = parseInt(length);
      pages = Math.ceil(length / 2); // console.log(data);

      $('.all_page').text(pages); // 设置页数

      var str = "";

      for (var i = 0; i < 2; i++) {
        str += "\n        <div class=\"good\">\n            <img src=\"".concat(data[i].src, "\">\n            <div class=\"infor\">\n                <p class=\"title\">").concat(data[i].title, "</p>\n                <p class=\"place\">").concat(data[i].address, "</p>\n                <p class=\"date\">").concat(data[i].data, "</p>\n                <p class=\"price\">").concat(data[i].price.slice(1), "-").concat(data[i].sprice.slice(4), "</p>\n            </div>\n        </div>\n        ");
      } // console.log(str);


      $('.goods').html(str);
      data_all = data;
    }
  });
}

init(); // console.log(data_all);
// 做上面的切换

$('.cityb li').click(function () {
  $(this).siblings().removeClass('show').end().addClass('show');
  $('.city_this').text($(this).text());
  this_type.length = 0;
  this_city.length = 0;

  if ($('.type .show').text() == '全部') {
    this_type = JSON.parse(JSON.stringify(data_all));
  } else {
    data_all.forEach(function (val, index) {
      if ($('.type .show').text() == val.type) {
        this_type.push(val);
      }
    });
  }

  if ($('.cityb .show').text() == '全部') {
    this_city = JSON.parse(JSON.stringify(this_type));
  } else {
    this_type.forEach(function (val, index) {
      if ($('.cityb .show').text() == val.city) {
        this_city.push(val);
      }
    });
  } // console.log(this_city);
  // page_now = 1;


  pages = Math.ceil(this_city.length / 2);
  page_now = pages == 0 ? 0 : 1;
  $('.now_page').text(page_now);
  $('.all_page').text(pages); //页面渲染

  var i = 0;
  var str = "";
  this_city.forEach(function (val, index) {
    if (i == 2) {
      return;
    }

    str += "\n    <div class=\"good\">\n        <img src=\"".concat(val.src, "\">\n        <div class=\"infor\">\n            <p class=\"title\">").concat(val.title, "</p>\n            <p class=\"place\">").concat(val.address, "</p>\n            <p class=\"date\">").concat(val.data, "</p>\n            <p class=\"price\">").concat(val.price.slice(1), "-").concat(val.sprice.slice(4), "</p>\n        </div>\n    </div>\n    ");
    i++;
  }); // console.log(str);

  status = true;
  all_status = false;
  $('.goods').html(str);
});
$('.typeinfor li').click(function () {
  $(this).siblings().removeClass('show').end().addClass('show');
  this_type.length = 0;
  this_city.length = 0;

  if ($('.cityb .show').text() == '全部') {
    this_city = JSON.parse(JSON.stringify(data_all));
  } else {
    data_all.forEach(function (val, index) {
      if ($('.cityb .show').text() == val.city) {
        this_city.push(val);
      }
    });
  }

  if ($('.type .show').text() == '全部') {
    this_type = JSON.parse(JSON.stringify(this_city));
  } else {
    this_city.forEach(function (val, index) {
      if ($('.type .show').text() == val.type) {
        this_type.push(val);
      }
    });
  } // console.log(this_city);
  // page_now = 1;


  pages = Math.ceil(this_type.length / 2);
  page_now = pages == 0 ? 0 : 1;
  $('.now_page').text(page_now);
  $('.all_page').text(pages); //页面渲染

  var i = 0;
  var str = "";
  this_type.forEach(function (val, index) {
    if (i == 2) {
      return;
    }

    str += "\n    <div class=\"good\">\n        <img src=\"".concat(val.src, "\">\n        <div class=\"infor\">\n            <p class=\"title\">").concat(val.title, "</p>\n            <p class=\"place\">").concat(val.address, "</p>\n            <p class=\"date\">").concat(val.data, "</p>\n            <p class=\"price\">").concat(val.price.slice(1), "-").concat(val.sprice.slice(4), "</p>\n        </div>\n    </div>\n    ");
    i++;
  }); // console.log(str);

  status = false;
  all_status = false;
  $('.goods').html(str);
});
$('.timeinfor li').click(function () {
  $(this).siblings().removeClass('show').end().addClass('show'); // init();

  alert('写了城市和分类的筛选');
});
$('.prev').click(function () {
  page_now--;

  if (page_now == 0) {
    page_now = 1;
    return;
  }

  var data_xuanran;

  if (all_status) {
    data_xuanran = JSON.parse(JSON.stringify(data_all));
  } else if (status) {
    data_xuanran = JSON.parse(JSON.stringify(this_city));
  } else {
    data_xuanran = JSON.parse(JSON.stringify(this_type));
  }

  $('.now_page').text(page_now);
  var i = 0;
  var str = ""; // console.log(this_city);

  data_xuanran.forEach(function (val, index) {
    if (i == 2) {
      return;
    } // console.log(this_city[(page_now - 1) * 2 + i]);


    if (data_xuanran[(page_now - 1) * 2 + i] == undefined) {
      return;
    }

    str += "\n      <div class=\"good\">\n          <img src=\"".concat(data_xuanran[(page_now - 1) * 2 + i].src, "\">\n          <div class=\"infor\">\n              <p class=\"title\">").concat(data_xuanran[(page_now - 1) * 2 + i].title, "</p>\n              <p class=\"place\">").concat(data_xuanran[(page_now - 1) * 2 + i].address, "</p>\n              <p class=\"date\">").concat(data_xuanran[(page_now - 1) * 2 + i].data, "</p>\n              <p class=\"price\">").concat(data_xuanran[(page_now - 1) * 2 + i].price.slice(1), "-").concat(data_xuanran[(page_now - 1) * 2 + i].sprice.slice(4), "</p>\n          </div>\n      </div>\n      ");
    i++;
  });
  $('.goods').html(str);
});
$('.next').click(function () {
  var data_xuanran;

  if (all_status) {
    data_xuanran = JSON.parse(JSON.stringify(data_all));
  } else if (status) {
    data_xuanran = JSON.parse(JSON.stringify(this_city));
  } else {
    data_xuanran = JSON.parse(JSON.stringify(this_type));
  }

  page_now++;

  if (page_now > pages) {
    page_now = pages;
    return;
  }

  $('.now_page').text(page_now);
  var i = 0;
  var str = ""; // console.log(this_city);

  data_xuanran.forEach(function (val, index) {
    if (i == 2) {
      return;
    } // console.log(this_city[(page_now - 1) * 2 + i]);


    if (data_xuanran[(page_now - 1) * 2 + i] == undefined) {
      return;
    }

    str += "\n      <div class=\"good\">\n          <img src=\"".concat(data_xuanran[(page_now - 1) * 2 + i].src, "\">\n          <div class=\"infor\">\n              <p class=\"title\">").concat(data_xuanran[(page_now - 1) * 2 + i].title, "</p>\n              <p class=\"place\">").concat(data_xuanran[(page_now - 1) * 2 + i].address, "</p>\n              <p class=\"date\">").concat(data_xuanran[(page_now - 1) * 2 + i].data, "</p>\n              <p class=\"price\">").concat(data_xuanran[(page_now - 1) * 2 + i].price.slice(1), "-").concat(data_xuanran[(page_now - 1) * 2 + i].sprice.slice(4), "</p>\n          </div>\n      </div>\n      ");
    i++;
  });
  $('.goods').html(str);
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