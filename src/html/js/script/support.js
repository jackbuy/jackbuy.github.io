/*!all-2018-07-23 */

$(function(){function a(){$(window).scrollTop()>=c+75?(b.addClass("active"),b.find(".gotop").addClass("active")):(b.removeClass("active"),b.find(".gotop").removeClass("active")),$(window).scrollTop()>c+85?b.addClass("go"):b.removeClass("go")}var b=$(".sub-header"),c=b.offset().top;a(),$(window).on("scroll",a)});