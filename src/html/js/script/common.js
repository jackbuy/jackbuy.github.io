/*!all-2018-07-23 */

$(function(){function a(){$(window).scrollTop()>h?g.addClass("active"):g.removeClass("active")}function b(a,b,c){a.each(function(){$(this).on("click",function(){$(this).addClass("active").siblings().removeClass("active"),b.eq($(this).index()).addClass(c).siblings().removeClass(c)})})}var c=$(".mb-nav"),d=$(".mb-nav-bg"),e=$("header nav"),f=$(".search-box");c.on("click",function(){$(this).hasClass("active")?(e.removeClass("active"),f.removeClass("active"),$(this).removeClass("active"),$("body").css({overflow:"auto"}),d.hide()):(e.addClass("active"),f.addClass("active"),$(this).addClass("active"),$("body").css({overflow:"hidden"}),d.show())});var g=$(".gotop"),h=300;a(),$(window).on("scroll",a),g.on("click",function(){$("body,html").animate({scrollTop:"0px"},300)}),$(".top a").on("click",function(){$(this).hasClass("active")?($(this).removeClass("active"),$(this).parent().next().slideUp(),$("body").css({overflow:"auto"})):($(this).addClass("active"),$(this).parent().next().slideDown(),$("body").css({overflow:"hidden"}))}),$(".header li").hover(function(){$(this).find(".nav-sub").addClass("active")},function(){$(this).find(".nav-sub").removeClass("active")}),$(".search-bar").click(function(){$(".search-box").addClass("active"),$(this).hide(),$(".header nav").hide()}),$(".search-box .icon-close").click(function(){$(".search-box").removeClass("active"),$(".header nav").show(),$(".search-bar").show()});var i=$(".prozone");b(i.find(".item-handle li"),i.find(".item-con"),"active fade");var j=$(".dzbz");b(j.find(".tab-menu span"),j.find(".tab-content"),"active");var k=$(".show-pro");b(k.find(".show-pro-handle li"),k.find(".show-pro-con li"),"active fade"),b($(".pro-tabmenu-tit a"),$(".pro-content-box .pro-content"),"active fade")});