/*!all-2018-07-23 */

$(function(){function a(){if($(window).scrollTop()>c){var a=0;a<b.find("li").length&&setInterval(function(){b.find("li").eq(a).addClass("active"),a++},350)}}var b=$(".photo-list"),c=b.offset().top-$(window).height()+300;$(window).on("scroll",a),a()});