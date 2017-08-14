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

 