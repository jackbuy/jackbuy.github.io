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
