//自動收合選單 左右收合時 滑動及變色JS
$(window).load(function(){
	var Body = $('body');
		Body.scrollspy({
		target: '.navbar-collapse',
		offset: 80
	});

	$('a.page-scroll').on('click', function(event) {
		var $anchor = $(this);
		var hash = this.hash; // 取得目前點擊連結的錨點位置

		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top -75
			},1000,function(){
						//window.location.hash = hash;
						window.history.pushState({}, 0,hash);
					}
		);

		event.preventDefault();
	});
});

//其他js
$(document).ready(function(){
	
	/*不透過html直接呼叫bs3的modal方法*/
	$(function(){
		//$('.index-modal').modal();
	});
	
	//Bootstrap3 左右收合選單呼叫
	$(window).load(function() {
   	     $('ul.new-navbar-nav').responsiveCollapse({
			 breakPoint: 750,
			 overflowItemText: '更多 <b class="caret"></b>'
		});
	});
	
	//官方超多層下拉選單JS
	$('.dropdown-submenu a.test').on("click", function(e){
		$(this).next('ul').toggle();
		e.stopPropagation();
		e.preventDefault();
	});
	
	//自製 首頁標題省略文字
	function textover(dom,num){
		var len = num; // 超過26個字元以"..."取代
		$(dom).each(function(){
			if($(this).text().length>len){
				$(this).attr("title",$(this).text());
				var text=$(this).text().substring(0,len-1)+"...";
				$(this).text(text);
			}
		});
	}
	
	//活動區字數
	textover(".event-text a",40);
	//textover(".news-text-body h2",27);
	//textover(".news-text-body p",60);
	

	//側邊欄到表單區消失
	$(window).load(function(){

		//設定網頁頂部位子
		var winTOP = $(window).scrollTop();

		if (winTOP)
		$(".scroll-fix").removeClass("scroll-fix-none");
		else
		$(".scroll-fix").removeClass("scroll-fix-none");
		
	});
	
	$(window).scroll(function(){

		//設定網頁頂部位子
		var winTOP = $(window).scrollTop();

		if (winTOP)
		$(".scroll-fix").removeClass("scroll-fix-none");
		else
		$(".scroll-fix").removeClass("scroll-fix-none");
		
	});
	
	
	//自製 單欄左右區塊等高
		//--兩側區塊不等高JS
		function Maxheight(target){
			function hiheight(target){
				var sameheight = $(target)

				//或用 attr("style","");或用相關控制dom屬性方式，.removeAttr("style");也行
				//先移除一次style中的height值，後面才能重新取值
				$(sameheight).css({height: ''});

				//比較左右區塊高度，取高者
				//先用map取得每一個對像的高度值，且是jq物件
				//再用Math.max(1, 2, 3, 4); // 4，取高者
				//Math.min(1, 2, 3, 4); // 1，取低者
				//但Math.min方法不會真的取值，因為它不接受一組以上數值，所以需要加上.apply方法
				//用Math.max.apply(null, 可帶入多組數值到此);就可比較數值且取值
				var SAMEheights = $(sameheight).map(function () {
				return $(this).height();
				}).get(),

				TitlemaxHeight = Math.max.apply(null, SAMEheights);

				//取得高度值，帶回dom內，就可讓目標物件等高
				$(sameheight).height(TitlemaxHeight);
			}

			//當載入網頁時呼叫一次功能
			$(window).load(function(){
				hiheight(target);
			});

			//當縮放網頁時呼叫一次功能
			$(window).resize(function(){
				hiheight(target);
			});
		}
	
		Maxheight(".movie .container > .col-sm-4");
		Maxheight(".movie .container > .col-sm-6");
		Maxheight(".movie .container > .col-sm-12");
	
		Maxheight(".event .container > .col-sm-4");
		Maxheight(".event .container > .col-sm-6");
		Maxheight(".event .container > .col-sm-12");
});