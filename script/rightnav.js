var r3 = document.querySelector('.right_nav .r3');
// console.log(r3);
window.onscroll = function(){
    if(document.documentElement.scrollTop > 73){
        r3.style.display = 'block';
    }else{
        r3.style.display = 'none';
    }
}
r3.onclick = function(){
    // document.documentElement.scrollTop = 0;
    $(document.documentElement).animate({
        'scrollTop' : 0
    },1000)
}