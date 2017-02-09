 
// 返回顶部
$(window).on('scroll',function(){
 	if($(window).scrollTop()>200){
 		$('.gotop').show();
 	}else{
 		$('.gotop').hide();
 	}
});
$('.gotop').on('click',function(){
 	$('body,html').animate({
 		'scrollTop':'0px'
 	},300); 
}) 
	 