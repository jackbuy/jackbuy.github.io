$(function(){
	// 视频弹出层
	$('.side-video .img').on('click',function(){  
		var mask=$('.mask'),
			con=mask.find('.con'),
			video=mask.find('video'),
			videoUrl=$(this).find('img').data('url');

		video.attr('src', videoUrl);
		mask.show(); 
		$('html').on('touchmove',function(e){e.preventDefault();});
		setTimeout(function(){  
			mask.addClass('active');
		},50);
		mask.on('click',function(){
			mask.removeClass('active').hide();
			$('html').off('touchmove');
		});  
		con.on('click',function(e){
			e.stopPropagation();
		});
	});
});