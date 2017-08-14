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



