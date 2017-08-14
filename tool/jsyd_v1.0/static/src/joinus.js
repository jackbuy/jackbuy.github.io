$(function(){
	// 招聘信息手风琴
	$('.content-zp').find('.content-zp-list').each(function(){
		$(this).on({
			'click': function(){
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                } else {
				    $(this).addClass('active').siblings().removeClass('active');
                }
			}
		});
	});
});