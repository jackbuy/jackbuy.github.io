require.config({
	paths:{
		'jquery':'lib/jquery-1.9.0.min' ,
		'common':'script/common',
        'predition':'script/predition',
		'project':'script/project',
		'home':'script/home',
	},
	shim:{
		'common':['jquery'],
		'predition':['jquery'],
		'project':['jquery'],
		'home':['jquery'],
	}
});