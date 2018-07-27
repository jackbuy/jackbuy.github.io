// requeryJs config配置
// requeryJs 兼容ie6+
// waitSeconds: 0  //加载等待时间（默认为7秒，可以设置为0表示永远不超时，或者大一点的数字）
require.config({
    paths:{
        "jquery": "lib/jquery-1.9.0.min",
        "common": "script/common",
        "home": "script/home",
        "support": "script/support",
        "slider": "script/slider",
        "videoMask": "script/videoMask",
        "changeLanguage": "script/change_language",
        "fzlc": "script/fzlc",
        "tzzgx": "script/tzzgx",
        "newsCenter": "script/news_center",
        "contactUs": "script/contact_us",
        "gjsyq": "script/gjsyq",
        "vryl": "script/vryl",
        "zmsyq": "script/zmsyq",
        "joinUs": "script/join_us",
        "shzr": "script/shzr",
        "proDetail": "script/pro_detail"
    },
    shim:{
        "common": ["jquery"],
        "home": ["jquery"],
        "support": ["jquery"],
        "slider": ["jquery"],
        "videoMask": ["jquery"],
        "changeLanguage": ["jquery"],
        "proDetail": ["jquery"],
        "fzlc": ["jquery"],
        "contactUs": ["jquery"],
        "gjsyq": ["jquery"],
        "vryl": ["jquery"],
        "zmsyq": ["jquery"],
        "shzr": ["jquery"],
        "joinUs": ["jquery"],
        "newsCenter": ["jquery"],
        "tzzgx": ["jquery"]
    },
    urlArgs: "bust=" +  (new Date()).getTime(),
    waitSeconds: 0
});


/*
* 响应式常用插件说明，具体使用方法------请百度
* 注意：文件必须添加在页面的head元素内，因为IE浏览器必须在元素解析前知道这个元素，所以这个js文件不能在页面底部调用。
*/

// respond.js   是为IE9以下浏览器支持css3中屏幕自适应的一个小js插件。注意：要在服务器下才会有效
// html5.js   让IE（包括IE6）支持HTML5元素方法
// modernizr.js   帮助我们检测浏览器是否实现了某个feature，注意：只做检测