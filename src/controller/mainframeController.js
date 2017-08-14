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