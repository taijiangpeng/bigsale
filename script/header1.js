$('.country').mouseenter(function(){
    $('.country_show').css(
        {
            'display' : 'block'
        })
}).mouseleave(function(){
    $('.country_show').css('display','none')
})
$('.search input').click(function(){
    $(this).css('border','1px solid #df6f95')
}).blur(function(){
    $(this).css('border','none')
})
$('.header').click(function(){
    // location.href = './index.html'
})
$('.toindex').click(function(){
    location.href = '../pages/index.html'
})
$('.logo').click(function(){
    location.href = '../pages/index.html'
})
$('.r1').click(function(){
    location.href = '../pages/login.html'
    // console.log(this);
}).mouseenter(function(){
    // console.log(111);
    $('.r1 ul').css('display','block')
}).mouseleave(function(){
    $('.r1 ul').css('display','none')
})
$('.fenlei').click(function(){
    location.href = '../pages/list.html'
});
$('.r2').mouseenter(function(){
    // console.log(111);
    $('.r2 img').css('display','block')
}).mouseleave(function(){
    $('.r2 img').css('display','none')
})