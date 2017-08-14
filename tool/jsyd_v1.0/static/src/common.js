 $(function(){
 	// 菜单
 	$('.mb-nav').on('click',function(){
 		if($(this).hasClass('active')){
 			$(this).removeClass('active');
 			$('.header-content-nav').hide();
			$('.mb-nav-bg').hide();
			$('body').off('touchmove');
			// $('body').css({'overflow':'auto'});
 		}else{
 			$(this).addClass('active');
 			$('.header-content-nav').show();
 			$('body').on('touchmove',function(e){e.preventDefault();});
			// $('body').css({'overflow':'hidden'});
			$('.mb-nav-bg').show();
 		}
 	});

 	// 遮罩关闭
 	$('.mb-nav-bg').on('click',function(){
		$('.mb-nav').removeClass('active');
		$('.header-content-nav').hide();
		$('.mb-nav-bg').hide();
		$('body').off('touchmove');
 	});

 	// 返回顶部显示/隐藏
 	$(window).on('scroll',function(){
	 	if($(this).scrollTop()>300){
	 		$('.gotop').addClass('active');
	 	}else{
	 		$('.gotop').removeClass('active');
	 	}
	});

	// 返回顶部点击事件
	$('.gotop').on('click',function(){
	 	$('body,html').animate({
	 		'scrollTop':'0px'
	 	},300);
	});

	// 拷贝二级菜单字段
	$('.mb-side-nav').html($('.side-item .active a').html())
	.on('click', function(){
		if ($(this).hasClass('on')) {
			$(this).removeClass('on');
			$('.side-item ul').hide();
		} else {
			$(this).addClass('on');
			$('.side-item ul').show();
		}
	});
 });