/*! - -2017-04-12 */// 定义一个指令基本路径
var directiveBaseUrl="views_directive/";

 

// banner
myApp.directive('banner',function(){
    return {
        restrict:'AE',
        scope:{
           title:'@',
           discribe:'@',
           bg:'@',
           myMsg:'@',
           myMsgUrl:'@'
        },
        templateUrl:directiveBaseUrl+"banner.html", 
        replace: true,
        transclude: true 
    };
});  

// 窗口高度
myApp.directive('autoHeight',['$window',function ($window) {
    return {
        restrict : 'AE',
        scope : {}, 
        controller:function(){ 
            this.toolheight=491;
            this.toolMtop=function(){ 
                return ($window.innerHeight - this.toolheight)/2;
            };

            this.checkheight=200;
            this.checkMtop=function(){ 
                return ($window.innerHeight - this.checkheight)/2;
            };
        },
        link : function(scope, element, attrs) { 
            element.css({ 
                'height':$window.innerHeight + 'px'  
            });   
        }
    };
}]);


// gotop
myApp.directive('gotop',[function(){
    return {
        restrict:'AE',
        scope:{
            scrolltop : '@',
            scrollbox:'@'
        },
        templateUrl:directiveBaseUrl+'gotop.html',
        link:function(scope,ele,attrs){
            ele.on('click',function(){
                jQuery(scope.scrollbox).animate({scrollTop:0}, 300); 
            });
            scope.scrolltop = scope.scrolltop ? scope.scrolltop : 600;
            jQuery(scope.scrollbox).scroll(function() {
              var s = jQuery(scope.scrollbox).scrollTop();
              if( s > scope.scrolltop) {
                  jQuery(".gotop").fadeIn(100);
              } else {
                  jQuery(".gotop").fadeOut(200);
              }
            });
        }
    };
}]);
 

// picbox
myApp.directive('picbox',['$timeout','$interval',function($timeout,$interval){
    return {
        restrict:"AE",
        scope:{ 
            current:"@",
            isPlay:"@",
            picLength:"&"
        },   
        link:function(scope,ele,attrs){ 

            // scope.main=function(index){
            //     ele.find('ul').css({
            //         marginLeft:(-900*index)+'px'
            //     }); 
            // };

            scope.main=function(index){ 
                ele.find('li').css({
                    opacity:0
                });
                ele.find('li').eq(index).css({
                    opacity:1
                }); 
            };

            ele.find('.prev').on('click',function(){
                if(scope.current>0){
                    scope.current--;
                    scope.main(scope.current); 
                } 
            });

            ele.find('.next').on('click',function(){ 
                if(scope.current<scope.picLength()-1){
                    scope.current++;
                    scope.main(scope.current);
                } 
            });
            // 动态监听变化
            scope.$watch('current',function(newVal,oldVal){
                scope.main(newVal);
            });

            scope.$watch('isPlay',function(newVal,oldVal){
                if(newVal==='true'){
                    scope.timer=$interval(function(){
                        if(scope.current>=scope.picLength()-1){
                            scope.current=0;
                             scope.main(scope.current); 
                        }else{
                            scope.main(scope.current++); 
                        } 
                    },2000); 
                }else{
                    $interval.cancel(scope.timer);
                }
            });
            
            

            console.log(scope.isPlay+'555');
            

        }
    };
}]);
var myAppDirective=angular.module('myAppDirective',[]);
// sidebar
myAppDirective.directive('sideBar',function(){
    return {
        restrict:'AE', 
        scope:{
            userName:'@',
            userImg:'@',
            copyright:'@',
            isSidebarClose:'&'
        },
        templateUrl:directiveBaseUrl+'sidebar.html'
    };
});

 

 
 
// 工具输入框高度
myApp.directive('checkHeight',function () {
    return {
        restrict : 'AE',
        require:'^autoHeight',
        scope : {},  
        link : function(scope, element, attrs,ctrl) { 
            element.css({ 
                'height':ctrl.checkheight + 'px',
                'marginTop':(ctrl.checkMtop()-60) + 'px'  
            });  
        }
    };
});

// 工具列表高度
myApp.directive('toolHeight',function () {
    return {
        restrict : 'AE',
        require:'^autoHeight',
        scope : {},  
        link : function(scope, element, attrs,ctrl) { 
            element.css({ 
                'height':ctrl.toolheight + 'px',
                'marginTop':ctrl.toolMtop() + 'px'  
            }); 
        }
    };
});


// 自动聚焦
myApp.directive('autoFocusInput',function(){
    return {
        restrict:'AE',  
        scope:{},
        link:function(scope,ele,attrs){   
            ele[0].focus(); 
        }
    };
});


// 已查看列表
myApp.directive('showActive',function(){
    return {
        restrict:'AE',  
        scope:{},
        link:function(scope,ele,attrs){   
            ele.on('click',function(){
                ele.addClass('active');
            });
        }
    };
});
  

