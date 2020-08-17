"use strict";

$('.header_wrap').load('./header2.html');
$('.bottom_wrap').load('./footer.html');
var phone_status = false;
var pass_status = false;
var pass_judge_status = false;
var yz_status = false;
var agree = false; //验证码块phone_status pass_status pass_judge_status yz_status agree

var kuai = document.querySelector('.kuai');
var yz = document.querySelector('.yanzheng');
var green = document.querySelector('.green');
var g_l = parseInt(getComputedStyle(green, null)['left']);

kuai.onmousedown = function (ev) {
  var e = ev || event;
  var to_left = e.clientX - kuai.offsetLeft; // var to_left = e.offsetX;

  var to_top = e.clientY - kuai.offsetTop; // var to_top = e.offsetY;

  document.onmousemove = function (ev) {
    var e = ev || event;
    var l = e.clientX - to_left;

    if (l <= 0) {
      l = 0;
    }

    if (l >= yz.clientWidth - kuai.clientWidth) {
      l = yz.clientWidth - kuai.clientWidth;
    }

    kuai.style.left = l + 'px';
    green.style.left = g_l + l + 'px';

    if (green.style.left == '0px') {
      green.innerHTML = '验证通过'; // console.log(green.style.backgroundImage);
      // background: url('../image/greenbefore.jpg') no-repeat;

      $(".kuai").css({
        'background': "url('../image/green.jpg')no-repeat"
      });
    } else {
      green.innerHTML = '';
      $(".kuai").css({
        'background': "url('../image/greenbefore.jpg')no-repeat"
      });
    }

    console.log(green.style.left, g_l); // console.log(arrPos);
  };

  document.onmouseup = function () {
    if (green.style.left !== '0px') {
      $('.green').animate({
        left: '-245px'
      });
      $('.kuai').animate({
        left: '0px'
      });
    } else {
      // console.log("正确");
      yz_status = true;
    }

    document.onmousemove = null; //移除事件
  };
}; //做注册的检测


var phone = document.querySelector('.phone input');

phone.onchange = function () {
  var val = phone.value; // console.log(this);
  // console.log($(this).find('p'));

  if (/^1[3456789]\d{9}$/.test(val)) {
    // console.log($(this).find('p'));
    phone_status = true;
    $(this).parent().children().eq(3).css('display', 'none');
    $(this).parent().children().eq(1).css('border', '1px solid #c7c9d1');
    $(this).parent().children().eq(2).css('border', '1px solid #c7c9d1');
  } else {
    // console.log($(this).parent().children().eq(3));
    phone_status = false;
    $(this).parent().children().eq(3).css('display', 'block');
    $(this).parent().children().eq(1).css('border', '1px solid #ff4029');
    $(this).parent().children().eq(2).css('border', '1px solid #ff4029');
  }
};

$(".password input").change(function () {
  var val = $(this).val();
  var reg = /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))(?!^.*[\u4E00-\u9FA5].*$)^\S{6,20}$/;

  if (reg.test(val)) {
    pass_status = true;
    $(this).parent().children().eq(1).css('border', '1px solid #c7c9d1');
    $(this).parent().children().eq(2).css('display', 'none');
  } else {
    pass_status = false;
    $(this).parent().children().eq(1).css('border', '1px solid #ff4029');
    $(this).parent().children().eq(2).css('display', 'block');
  }
});
$(".password input").focus(function () {
  $(this).parent().children().eq(3).show();
}).blur(function () {
  $(this).parent().children().eq(3).hide();
});
$(".judgepassword input").change(function () {
  var pass1 = $(".password input").val();

  if ($(this).val() == pass1) {
    // console.log('相同');
    $(this).parent().children().eq(1).css('border', '1px solid #c7c9d1');
    $(this).parent().children().eq(2).css('display', 'none');
    pass_judge_status = true;
  } else {
    $(this).parent().children().eq(1).css('border', '1px solid #ff4029');
    $(this).parent().children().eq(2).css('display', 'block');
  }
});
$(".receive input").click(function () {
  if ($(this)[0].checked) {
    agree = true;
  } else {
    agree = false;
  }
});
$('.submit').click(function () {
  if (phone_status && pass_status && pass_judge_status && yz_status && agree) {
    console.log("全部正确");
    var username = $('.phone input').val();
    var password = $('.password input').val(); // console.log(username,password);

    if (localStorage.getItem(username)) {
      alert('已经存在用户了');
    } else {
      localStorage.setItem(username, password);
      alert('注册成功');
      location.href = "./login.html";
    }
  } else {
    alert('注册失败，请检查格式');
  }
});