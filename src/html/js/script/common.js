/*!all-2018-07-11 */

$(function(){function a(){$(window).scrollTop()>e?d.addClass("active"):d.removeClass("active")}var b=$(".mb-nav"),c=$(".mb-nav-bg");b.on("click",function(){$(this).hasClass("active")?($(this).removeClass("active"),$("body").off("touchmove"),c.hide(),$(".menu-bar").removeClass("active"),$(".prolist-side").removeClass("active")):($(this).addClass("active"),$("body").on("touchmove",function(a){a.preventDefault()}),c.show(),$(".menu-bar").addClass("active"),$(".prolist-side").addClass("active"))});var d=$(".gotop"),e=300;a(),$(window).on("scroll",a),d.on("click",function(){$("body,html").animate({scrollTop:"0px"},300)})});