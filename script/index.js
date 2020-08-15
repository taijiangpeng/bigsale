$('.index_header').load('./header1.html');  
$('.bottom').load('./footer.html');
$('.right_nav').load('./rightnav.html')    
$(function($) {
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true, // 循环模式选项
    autoplay:true,
    effect : 'fade',
    autoplay: {
      delay: 1000,//1秒切换一次
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
  //移动到图片时候字变色
  $('.type .wrap').mouseenter(function(){
    $(this).children().eq(1).css('color','#df6f95');      
  }).mouseleave(function(){
    $(this).children().eq(1).css('color','#111'); 
  })
  
});        