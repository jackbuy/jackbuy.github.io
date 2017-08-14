// 文件配置
require.config({
	paths:{
		'jquery':'lib/jquery-1.9.0.min' ,
		'common':'script/common',
		'joinus':'script/joinus',
		'policy':'script/policy',
		'build':'script/build',
		'home':'script/home',
		'slider':'script/slider',
	},
	shim:{
		'common':['jquery'],
		'joinus':['jquery'],
		'policy':['jquery'],
		'build':['jquery'],
		'home':['jquery'],
		'slider':['jquery'],
	}
});