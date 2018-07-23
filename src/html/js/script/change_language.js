// 选择语言
var languageBox = $('.language-box');
var checkedLanguage = $('.top a');
languageBox.find('a').each(function(){
    $(this).on("click", function(e){
        e.preventDefault();
        checkedLanguage.html($(this).html()+' <i class="icon language down"></i>').removeClass('active');
        languageBox.slideToggle();
    });
});
