// 网站配置信息
myApp.factory('webconfig',function(){
	var webconfig={
		userInfo:{
			userName:"Zhaozj",
	        userImg:"images/tx.jpg" 
		},
		systemInfo:{  
	        copyright:"Copyright © 2016-2017 - Design by jackbuy"
	    },
	    systemNotice:{
	        title:"新版网站正式上线啦！", 
	        url:"#/artic/1"
	    },
	    itemInfo:[
	        {
	            title:'日志',
	            describe:'Life is repeating',
	            src:'images/banner_bg.jpg'
	        },
	        {
	            title:'相册',
	            describe:'Make the site more dynamic',
	            src:'images/banner_bg.jpg'
	        },
	        {
	            title:'链接',
	            describe:'Record important links',
	            src:'images/banner_bg.jpg'
	        },
	        {
	            title:'代码',
	            describe:'Many a little make a mickle',
	            src:'images/banner_bg.jpg'
	        }
	    ] 
	};
	return webconfig; 
}); 