$(function(){
    // 自动切换
    var index=0,
        banner=$('.home-banner .li'),
        img_len=banner.length;
    function show(){
        if(index==(img_len-1)){
            index=-1;
            banner.eq(img_len-1).fadeTo(1000,0);
            banner.eq(index+1).fadeTo(2000,1);
        }
        else{
            banner.eq(index).fadeTo(1000,0);
            banner.eq(index+1).fadeTo(2000,1);
        }
        index++;
    }
    banner.eq(0).fadeTo(2000,1);
    setInterval(show,5000);
});