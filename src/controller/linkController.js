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

 