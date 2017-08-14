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