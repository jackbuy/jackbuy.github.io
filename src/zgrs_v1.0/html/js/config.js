// requeryJs config配置
require.config({
    paths:{
        "jquery": "lib/jquery-1.9.0.min",
        "radioJs": "lib/custom_checkbox_and_radio",
        "common": "script/common",
        "postVerification": "script/postVerification",
        "subList": "script/sub-list",
        "pagenation": "script/pagenation",
        "detail": "script/detail",
        "alertJs": "script/alert",
    },
    shim:{
        "common": ["jquery"],
        "radioJs": ["jquery"],
        "postVerification": ["jquery"],
        "subList": ["jquery"],
        "pagenation": ["jquery"],
        "alertJs": ["jquery"],
        "detail": ["jquery"],
    },
    waitSeconds: 0  //加载等待时间（默认为7秒，可以设置为0表示永远不超时，或者大一点的数字）
});