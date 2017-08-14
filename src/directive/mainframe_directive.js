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

 
