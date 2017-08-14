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