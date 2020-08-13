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
})