/*!all-2017-08-14 */

$(function(){$(".content-zp").find(".content-zp-list").each(function(){$(this).on({click:function(){$(this).hasClass("active")?$(this).removeClass("active"):$(this).addClass("active").siblings().removeClass("active")}})})});