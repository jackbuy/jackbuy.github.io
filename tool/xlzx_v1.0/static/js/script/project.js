/*!all-2017-08-19 */

$(function(){$(".question .item").each(function(){var a=$(this);$(this).find(".item-tit").click(function(){$(this).parent().hasClass("active")?a.removeClass("active"):a.addClass("active")})})});