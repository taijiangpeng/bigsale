$('.index_header').load('./header1.html');  
$('.right_nav').load('./rightnav.html');
$('.footer').load('./footer.html');
var send_src = getCookie('good');
var num;
var this_index;
var price_one = 1;
$('.ci_r li').click(function(){
    $(this).siblings().removeClass('active').end().addClass('active');
    this_index = $(this).index('.ci_r li');
    console.log(this_index);
    $.ajax({
        url : '../data/goods.json',
        type : 'GET',
        dataType : 'json',
        success : function(data){
            // console.log(data);
            data.forEach((ele,index) => {
                // console.log(ele,index);
                if(ele['src'] == send_src){
                    // console.log(ele);
                    if(this_index == 0){
                        $('.select_pd').text(ele['sprice']);
                        // console.log(ele['sprice'].slice(4));
                        $('.s2').text(parseInt(ele['sprice'].slice(4)) * num +"元");
                        price_one = parseInt($('.s2').text()) / num;
                    }else{
                        $('.select_pd').text('早鸟票' + ele['price']);
                        $('.s2').text(ele['price'].slice(1) * num + '元');
                        price_one = parseInt($('.s2').text()) / num;
                    }
                }
            });
        }
    })
});
$('.city div').click(function(){
    $(this).siblings().removeClass('active').end().addClass('active')
});
//页面渲染
$.ajax({
    url : '../data/goods.json',
    type : 'GET',
    dataType : 'json',
    success : function(data){
        data.forEach((ele,index) => {
            // console.log(send_src,ele['src']);
            // console.log(ele,index);
            if(ele['src'] == send_src){
                // console.log(ele);
                $('.bigimg').attr('src',ele['src']);
                $('.title').text(ele['title']);
                $('.select_pd').text(ele['sprice']);
                $('.s2').text(ele['sprice'].slice(4));
                $('.address').text(ele['address']);
                price_one = parseInt($('.s2').text());
            }
        });
    }
})
var num = 1;
$('.reduce').click(function(){
    num = $('.num_this input').val();
    num--;
    if(num < 1){
        num = 1;
        $(this).attr('disabled','disabled');
    }
    if(num != 6){
        $('.add').removeAttr('disabled');
    }
    // console.log(price_one);
    // console.log(price);
    // console.log(num,price_one);
    $('.num_this input').val(num);
    $('.s2').text(price_one * num + '元');
});
$('.add').click(function(){
    console.log(price_one);
    num = $('.num_this input').val();
    num++;
    if(num > 6){
        num = 6;
        $('.add').attr('disabled','disabled');
    }
    $('.reduce').removeAttr('disabled');
    // console.log(num,price_one);
    $('.num_this input').val(num);
    $('.s2').text(price_one * num + '元');
})


