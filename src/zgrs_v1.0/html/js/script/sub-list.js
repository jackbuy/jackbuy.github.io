/*!all-2018-05-30 */

$(function(){var a=$(".sub-list").find("li");a.eq(2).css({width:"50%"}),a.eq(3).css({width:"50%"}),a.eq(8).css({width:"50%"}),a.eq(9).css({width:"50%"}),a.each(function(){$(this).find("a").hover(function(){$(this).find("div").css({bottom:0})},function(){$(this).find("div").css({bottom:"-60px"})})})});