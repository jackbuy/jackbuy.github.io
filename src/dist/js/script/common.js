/*!all-2019-01-25 */

$(function(){
    // document.body.addEventListener('touchstart',function(){});
    function a(){$(this).width()<1200&&($(".mb-nav").hasClass("active")?$("body").css({overflow:"hidden"}):$("body").css({overflow:"auto"}))}function b(){$(window).scrollTop()>f?e.addClass("active"):e.removeClass("active")}var c=$(".mb-nav"),d=$(".mb-nav-bg");c.on("click",function(){$(this).hasClass("active")?($(this).removeClass("active"),d.hide(),$(".menu-bar").removeClass("active"),$(".prolist-side-title").removeClass("active")):($(this).addClass("active"),d.show(),$(".menu-bar").addClass("active"),$(".prolist-side-title").addClass("active")),a()}),a(),$(window).resize(function(){a()});var e=$(".gotop"),f=300;b(),$(window).on("scroll",b),e.on("click",function(){$("body,html").animate({scrollTop:"0px"},300)})});