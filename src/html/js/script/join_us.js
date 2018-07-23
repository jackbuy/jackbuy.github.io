/*!all-2018-07-23 */

$(function(){$(".fwwt-list").each(function(){var a=$(this);$(this).find(".fwwt-detail span").on("click",function(){$(this).hasClass("active")?$(this).removeClass("active"):$(this).addClass("active"),a.find(".detail-con").slideToggle()})})});