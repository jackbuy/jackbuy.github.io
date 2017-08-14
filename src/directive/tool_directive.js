 
 
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
  

