/*! - -2017-04-12 */var myApp = angular.module('app', [
    'ngAnimate',
    'ui.router', 
    'ngCookies',
    'ngSanitize',
    'articModule',
    'codeModule',
    'linkModule',
    'toolModule',
    'photoModule',
    'mainFrameModule',
    'myAppDirective'
]);



myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    /*路由重定向 $urlRouterProvider:如果没有路由引擎能匹配当前的导航状态，那它就会默认将路径路由至 home.html,  
     *这个页面就是状态名称被声明的地方. */
    $urlRouterProvider.otherwise('/artic');
    $stateProvider
    .state('artic', { //日志
        url: '/artic',
        templateUrl: 'views/artic.html',
        controller: 'articListCtrl'
    })
    .state('articdetail', { //日志详情
        url: '/artic/:pid',
        Params: { 'pid': null },
        templateUrl: 'views/artic_detail.html',
        controller: 'articDetailCtrl'
    })
    .state('photo', { //相册
        url: '/photo',
        templateUrl: 'views/photo.html',
        // controller: 'photoListCtrl'
    })
    .state('photodetail', { //相册详情
        url: '/photo/:pid',
        Params: { 'pid': null },
        templateUrl: 'views/photo_detail.html',
        controller: 'photoDetailCtrl'
    })
    .state('code', { //代码
        url: '/code',
        templateUrl: 'views/code.html'
    })
    .state('tool', { //工具
        url: '/tool',
        templateUrl: 'views/tool.html'
    })
    .state('link', { //链接
        url: '/link',
        templateUrl: 'views/link.html'
    })
    .state('about', { //关于 
        url: '/about',
        templateUrl: 'views/about.html'
    });
}]);

/*! - -2017-04-12 */
var articModule=angular.module('articModule',[]);

// 文章列表
articModule.controller('articListCtrl',['$scope','$state',function($scope, $state){ 
    $scope.toDetail = function (producerId) { 
        $state.go('articdetail', {'pid': producerId}); 
    }; 
}]);


// 文章详情
articModule.controller('articDetailCtrl', ['$scope','$state','$stateParams','$http',function ($scope, $state, $stateParams,$http) {  
    $scope.goback=function(){
        $state.go('artic'); 
    };
    $scope.show=function(){ 
        $http({
            url:'data/artic.json',
            method:'GET'
        }).success(function(data){ 
            // $scope.artic=data.artic[$stateParams.pid];  
            angular.forEach(data.artic, function(data){ 
                if(data.id===$stateParams.pid){
                    $scope.artic=data; 
                    return;
                } 
            });
        }).error(function(data){ 
            alert('获取文章详情失败！');
        }); 
    }(); 
}]);



// 获取文章列表
articModule.controller('articLists',['$scope','$http',function($scope,$http){  
   
    $http.get("data/artic.json").then(function (response) {
        //数据源
        $scope.data = response.data.artic;
        $scope.order="-id"; //文章列表按时间排序
        $scope.hasactive=true;
        
        //分页总数
        $scope.pageSize = 2;
        $scope.pages = Math.ceil($scope.data.length / $scope.pageSize); //分页数
        $scope.newPages = $scope.pages > 5 ? 5 : $scope.pages;
        $scope.pageList = [];
        $scope.selPage = 1;
        //设置表格数据源(分页)
        $scope.setData = function () {
        $scope.items = $scope.data.slice(($scope.pageSize * ($scope.selPage - 1)), ($scope.selPage * $scope.pageSize));//通过当前页数筛选出表格当前显示数据
        };
        $scope.items = $scope.data.slice(0, $scope.pageSize);
        //分页要repeat的数组
        for (var i = 0; i < $scope.newPages; i++) {
        $scope.pageList.push(i + 1);
        }
        //打印当前选中页索引
        $scope.selectPage = function (page) {
        //不能小于1大于最大
        if (page < 1 || page > $scope.pages) return;
        //最多显示分页数5
        if (page > 2) {
        //因为只显示5个页数，大于2页开始分页转换
        var newpageList = [];
        for (var i = (page - 3) ; i < ((page + 2) > $scope.pages ? $scope.pages : (page + 2)) ; i++) {
        newpageList.push(i + 1);
        }
        $scope.pageList = newpageList;
        }
        $scope.selPage = page;
        $scope.setData();
        $scope.isActivePage(page);
        console.log("选择的页：" + page);
        };
        //设置当前选中页样式
        $scope.isActivePage = function (page) {
        return $scope.selPage == page;
        };
        //上一页
        $scope.Previous = function () {
        $scope.selectPage($scope.selPage - 1);
        };
        //下一页
        $scope.Next = function () {
        $scope.selectPage($scope.selPage + 1);
        };
    });

}]);

var codeModule=angular.module('codeModule',[]);

// 获取链接
codeModule.controller('codeLists', ['$scope','$http',function($scope,$http) {  
    $scope.load=function(){
        $http({
            url:'data/code.json',
            method:'GET'
        }).success(function(data){ 
            $scope.codes=data.code;   
        }).error(function(data){ 
            alert('获取失败！');
        }); 
    }();  
}]); 

 
var linkModule=angular.module('linkModule',[]);

// 获取链接
linkModule.controller('linkLists', ['$scope','$http',function($scope,$http) {  
    $scope.load=function(){
        $http({
            url:'data/link.json',
            method:'GET'
        }).success(function(data){ 
            $scope.links=data.link;   
        }).error(function(data){ 
            alert('获取失败！');
        }); 
    }();  
}]); 

 
var mainFrameModule=angular.module('mainFrameModule',[]);
// mainframe
mainFrameModule.controller('mainframe',['$rootScope','$scope','webconfig',function($rootScope,$scope,webconfig){ 

    // 获取配置信息
    $rootScope.userInfo=webconfig.userInfo;
    $rootScope.systemInfo=webconfig.systemInfo; 
    $rootScope.systemNotice=webconfig.systemNotice; 
    $rootScope.itemInfo=webconfig.itemInfo;
 
    // 侧边栏开关
    $scope.isSlide=false;
    $scope.isSidebarClose=function(){
        $scope.isSlide=!$scope.isSlide;  
    };
}]);




// 获取栏目
mainFrameModule.controller('items', ['$scope','$http',function($scope,$http) { 
    

    $scope.selected=0; 
    $scope.isActives=function(id){  
        $scope.selected=id;
    };

    $scope.load=function(){
        $http({
            url:'data/item.json',
            method:'GET'
        }).success(function(data){ 
            $scope.items=data.list;  
        }).error(function(data){ 
            alert('获取失败！');
        }); 
    }(); 

}]); 


myApp.filter('trustHtml', ['$sce',function ($sce) {

    return function (input) {

        return $sce.trustAsHtml(input);

    };

}]);
var photoModule=angular.module('photoModule',[]);


// 获取照片
photoModule.controller('photoLists', ['$scope','$state','$http',function($scope,$state,$http) {  
    $scope.load=function(){
        $http({
            url:'data/photo.json',
            method:'GET'
        }).success(function(data){ 
            $scope.photos=data.photo;   
        }).error(function(data){ 
            alert('获取失败！');
        }); 
    }();  

    $scope.showPhoto=function(producerId){
        $state.go('photodetail', {'pid': producerId}); 
    };
}]); 
 
photoModule.controller('photoDetailCtrl',['$scope','$state','$stateParams','$http',function ($scope, $state, $stateParams,$http) {   
    // 返回列表
    $scope.goback=function(){
        $state.go('photo'); 
    };
    // 获取数据
    $scope.show=function(){ 
        $http({
            url:'data/photo.json',
            method:'GET'
        }).success(function(data){ 
            $scope.photo=data.photo[$stateParams.pid]; 
        }).error(function(data){ 
            alert('获取图片详情失败！');
        }); 
    }(); 
    // 初始化遮罩层
    $scope.isShow=false;
    // 显示遮罩层方法
    $scope.showPic=function(index){ 
        $scope.current=index;
        $scope.isShow=true;  
    }; 
    // 关闭遮罩层方法
    $scope.closePicBox=function(){
        $scope.isShow=false;
        $scope.isplay=false;
    };
    // 返回图片数据长度
    $scope.getPicLen=function(){
        return $scope.photo.list.length;
    };

    // 是否自动播放
    $scope.isplay=false;
    $scope.autoPlay=function(){
        $scope.isplay=true;

        $scope.current=0;
        $scope.isShow=true; 
    };
}]);




var toolModule=angular.module('toolModule',[]);



// 获取工具
toolModule.controller('tools', ['$scope','$http','$cookieStore',function($scope,$http,$cookieStore) {  
    $scope.load=function(){
        $http({
            url:'data/tool.json',
            method:'GET'
        }).success(function(data){ 
            $scope.tools=data.tool;  
            $scope.len=$scope.tools.list.length;
        }).error(function(data){ 
            alert('获取失败！');
        }); 
    }();   
    
 
    if(typeof($cookieStore.get("toolShowCookie")) === 'undefined'  && typeof($cookieStore.get("checkShowCookie"))=== 'undefined'){
        $scope.toolShow=false;
        $scope.checkShow=true; 
    }else{ 
        $scope.toolShow=$cookieStore.get("toolShowCookie");
        $scope.checkShow=$cookieStore.get("checkShowCookie"); 
    }
    
    $scope.checkPwd=function(){ 
        if($scope.pwd === 'q2651'){
            $scope.pwd='';
            $cookieStore.put("toolShowCookie", true);
            $cookieStore.put("checkShowCookie", false); 
            $scope.toolShow=$cookieStore.get("toolShowCookie");
            $scope.checkShow=$cookieStore.get("checkShowCookie");
        }else{
            alert('邀请码错误！');  
            $scope.pwd=''; 
        }
    }; 
    $scope.close=function(){ 
        if(confirm('确认登出此工具吗？')){
            $cookieStore.put("toolShowCookie", false);
            $cookieStore.put("checkShowCookie", true);
            $scope.toolShow=$cookieStore.get("toolShowCookie");
            $scope.checkShow=$cookieStore.get("checkShowCookie");
        } 
    };
 
    
}]); 
/*! - -2017-04-12 */// 网站配置信息
myApp.factory('webconfig',function(){
	var webconfig={
		userInfo:{
			userName:"Zhaozj",
	        userImg:"images/tx.jpg" 
		},
		systemInfo:{  
	        copyright:"Copyright © 2016-2017 - Design by jackbuy"
	    },
	    systemNotice:{
	        title:"新版网站正式上线啦！", 
	        url:"#/artic/1"
	    },
	    itemInfo:[
	        {
	            title:'日志',
	            describe:'Life is repeating',
	            src:'images/banner_bg.jpg'
	        },
	        {
	            title:'相册',
	            describe:'Make the site more dynamic',
	            src:'images/banner_bg.jpg'
	        },
	        {
	            title:'链接',
	            describe:'Record important links',
	            src:'images/banner_bg.jpg'
	        },
	        {
	            title:'代码',
	            describe:'Many a little make a mickle',
	            src:'images/banner_bg.jpg'
	        }
	    ] 
	};
	return webconfig; 
}); 
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
  

