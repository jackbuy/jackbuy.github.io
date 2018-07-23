/*!all-2018-07-23 */

$(function(){function a(){$(window).scrollTop()>=c?b.addClass("active"):b.removeClass("active"),$(window).scrollTop()>=e-72&&$(window).scrollTop()<$(document).height()-$("footer").height()-$(window).height()?d.addClass("active"):d.removeClass("active")}var b=$(".pro-tabmenu"),c=b.offset().top,d=$(".product-box-side"),e=d.offset().top;a(),$(window).on("scroll",a)});