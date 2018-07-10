;(function(win,doc,$){
	/*
		*使用jQuery.each(obj,callback) 循环遍历对象（数组）
		*遍历对象function(key,val){}  
			key:   属性名   
			val：  属性值
		*遍历数组function(index,item){}  
			index：索引    
			item： 元素
	*/ 
	function showList(ele,options){
		var settings={ 
			data:null
		}
		$.extend(true,settings,options||{}); 
		
		this.data=settings.data;
		this.$box=$(ele);
		this.$btn=this.$box.find('.btn a');
		this.$tit=this.$box.find('.project-name');
		this.$close=null;

		this.mask=null; 
		this.itemLists=null; 

		this.$itemImg=null;
		this.$itemNme=null;
		this.$itemDescribe=null;
		this.$itemListsLens=null;
		this.$itemListsCon=null;

		this.init();
	}
	showList.prototype={
		init:function(){
			var _this=this; 

			// 渲染html
			this.renderHtml(); 

			// 加载数据
			this.loadData();
			  
			// “立即查看”按钮事件绑定 
			this.$btn.on('click',function(){
				if(!$(this).hasClass('disable')){
					_this.amtFadeOut();
					_this.mask.show();
				}
			}); 
		},
		// 渲染弹出层
		renderHtml:function(){
			var HTML='<div class="newMask"><div class="newMask-bg amt fade-in"></div><div class="con row amt slidedown"><div class="side"><div class="img amt updown"></div><div class="title"></div><div class="describe"></div></div><div class="content"><div class="t"><div class="name"></div><div class="close" title="关闭"></div></div><div class="c"></div></div></div></div>',
				_this=this;
			this.mask=$(HTML).appendTo('body'); 
			this.$itemImg=this.mask.find('.img');
			this.$itemNme=this.mask.find('.title');
			this.$itemDescribe=this.mask.find('.describe'); 
			this.$itemListsLens=this.mask.find('.t .name'); 
			this.$itemListsCon=this.mask.find('.c'); 
			 
			this.mask.find('.close').on('click',function(e){
				_this.amtFadeIn();
				_this.mask.hide(); 
			});
			this.mask.find('.con').on('click',function(e){e.stopPropagation();});
		},   
		//加载数据
		loadData:function(){
			var _this=this;
			$.getJSON(this.data,function(data){ 
				_this.setItemName(data);
				_this.setItemListsLens(data);
				_this.setItemsInfo(data);
				_this.setLists(data);
			});
		},
		// 设置已查看模板
		setListActive:function(){
			this.itemLists.find('li').each(function(){
				$(this).on('click',function(){
					$(this).addClass('active');
				});
			});
		},
		// 设置项目名称
		setItemName:function(data){
			var itemName=data.itemName!=""?data.itemName:"null";
			this.$tit.html(itemName);
		},
		// 加载项目模板列表
		setLists:function(data){
			var _this=this,list="";
			var path=data.urlPath;//获取相对路径
			list+='<ul>';
				$.each(data.list,function(key,value){  
					list+='<li><a href="'+(value.url==""?'#':path+encodeURI(value.url))+'" target="_blank">'+value.title+'</a></li>';
				})   
			list+='</ul>'; 
			_this.itemLists=$(list).appendTo(_this.$itemListsCon);
			_this.setListActive();
		},
		// 设置项目相关信息
		setItemsInfo:function(data){  
			var itemName=data.itemName!=""?data.itemName:"null", 
				itemImg=data.src!=""?'<img src="'+data.src+'"/>':'', 
				itemDescribe=data.describe!=""?data.describe:"暂无介绍！";
			this.$itemImg.html(itemImg);
			this.$itemNme.html(itemName); 
			this.$itemDescribe.html(itemDescribe);
		},
		//设置项目模板长度
		setItemListsLens:function(data){ 
			this.$itemListsLens.html('<span>共<em>'+data.list.length+'</em>个模板<span>');
		},
		//设置打开动画
		amtFadeIn:function(){ 
			this.$box.removeClass('fade-out').addClass('fade-in');
		},
		//设置关闭动画
		amtFadeOut:function(){
			this.$box.removeClass('fade-in').addClass('fade-out');
		}
	}
	$.fn.zui=function(options){
		new showList(this,options); 
	}
})(window,document,jQuery);

 
