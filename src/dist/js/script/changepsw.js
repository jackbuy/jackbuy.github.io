/*!all-2018-09-12 */

$(function(){var a=$(".account"),b=$(".psw"),c=$(".change"),d=b.next().val().length,e="";for(i=0;i<d;i++)e+="*";a.html(a.next().val()),b.html(e),c.on("click",function(){$(this).hide(),$(this).prev().removeClass("hide"),$(this).prev().prev().hide()})});