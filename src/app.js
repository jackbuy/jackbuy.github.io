var myApp = angular.module('app', [
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
