$('.index_header').load('./header2.html');
$('.bottom_wrap').load('./footer.html');
$('.login_to').click(function(){
    var password = localStorage.getItem($('.user input').val());
    if($(".password input").val() == password){
        alert("登录成功");
        location.href = './index.html';
    }else{
        alert('登陆失败')
    }
})