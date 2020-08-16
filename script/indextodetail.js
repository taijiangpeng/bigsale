$(".common_infor li").click(function(){
    var src =  $(this).children(0)[0].src;
    console.log(src);
    setCookie({
        key : 'good',
        val : src
    })
    location.href = "./detail.html";
});
$(".big_infor").click(function(){
    var src = $(this).children(0)[0].src;
    console.log(src);
    setCookie({
        key : 'good',
        val : src
    })
    location.href = "./detail.html";
});
$(".type .wrap").click(function(){
    console.log(111);
    location.href = "./list.html";
})