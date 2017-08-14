/**
 * [description]
 * pluginName  焦点轮播图
 * version     1.0
 * author      zzj
 * website     zjweb.xyz
 */
;(function(win,doc,$){
	function slider(options){
		var settings={
			box:'',//banner 盒子
			autoTimeout:3000,//自动切换时间
			playItemWidth:200//切换的宽度
		};
		$.extend(true,settings,options||{});
		this.$box=$(settings.box);
		this.$boxWidth=this.$box.width();
		this.$con=this.$box.find('.md');
		this.$item=this.$con.find('li');
		this.itemLen=this.$item.length;
		this.autoTimeout=settings.autoTimeout;
		// this.playItemWidth=settings.playItemWidth;

		this.hand=null;
		this._index=0;
		this.timmer = 0;
		this.init();
	}
	slider.prototype={
		init:function(){
			this.handle();
			this.autoPlay();
			this.loadEnd();
			this.resize();
		},
		resize:function(){
			var _this=this;
			$(win).on('resize',function(){
				_this.playItemWidth=_this.$boxWidth;
			    _this.$item.width(_this.$boxWidth);
			    _this._index=0;
			    _this.onPlay(_this._index);
			}).trigger('resize');
		},
		handle:function(){//自动生成原点按钮
			var html='';
				html+='<ul class="hd">';
			for(var i=0;i<this.itemLen;i++){
				if(i===0){
					html+='<li class="active">'+(i+1)+'</li>';
				}else{
					html+='<li>'+(i+1)+'</li>';
				}
			}
				html+='</ul>' ;
			this.hand=$(html).appendTo(this.$box);
			this.onHand();
		},
		onHand:function(){//按钮绑定点击事件
			var _this=this;
			this.hand.find('li').each(function(i){
				$(this).on('click',function(){
					clearTimeout(_this.timmer);
					$(this).addClass('active').siblings().removeClass('active');
					_this.onPlay(i);
					_this._index=i;

					// 自动播放
					_this.autoPlay();
				});
			});
		},
		autoPlay:function(){//设置计时器循环播放
			var _this=this;
			this.timmer=setInterval(function(){
				var _i=++_this._index;
				if(_i<_this.itemLen){
					_this.onPlay(_i);

				}else if(_i==_this.itemLen){
					_i=_this._index=0;
					_this.onPlay(_i);
				}
			},_this.autoTimeout);
		},
		onPlay:function(i){
			this.handTurn(i);
			this.picTurn(i);
		},
		picTurn:function(i){
			var _this=this;
			this.$con.animate({'margin-left':-_this.playItemWidth*i+'px'}, 'slow',function(){
				// 图片轮播完成执行回调，加载动画
				_this.$con.find('li').find('.con').removeClass('active');
				_this.$con.find('li').eq(i).find('.con').addClass('active');
			});
		},
		handTurn:function(i){
			this.hand.find('li').eq(i).addClass('active').siblings().removeClass('active');
		},
		loadEnd:function(){//首次加载完成执行动画
			var _this=this;
			setTimeout(function(){
				_this.$con.find('li').eq(0).find('.con').addClass('active');
			},100);
		}
	};
	win.slider=slider;
})(window,document,jQuery);