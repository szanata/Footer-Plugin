(function(){

	$(document).ready(function(){

		setTimeout(function(){
			$("#header").gradient({
				from: '111111',
				to: '555555',
				direction: 'horizontal'
			});
			$("#menu").gradient({
				from: 'ffffff',
				to: 'c0c0c0',
				direction: 'horizontal'
			});		
		},0);
		
		Router.think();
	});
	
	Router = {
			
		pages: ["home","licence","developing"],
			
		think: function(){
			if (window.location.href.indexOf("?") > 0){
				var page = window.location.href.substring(window.location.href.indexOf("?")+1,window.location.href.length);
				for (var i = 0, l = this.pages.length; i < l; i++ ){
					if (page === this.pages[i]){
						this.go(page);
						return;
					}
				}
			}
			this.go("home");
		},
		
		go: function(page){
			for (var i = 0, l = this.pages.length; i < l; i++ ){
				if (page === this.pages[i]){
					$("#" + page).addClass("currentItem");
					$("#content").load(this.pages[i] + ".html",this.after);
					return;
				}
			}
		},
		
		after: function(){
			$("#contentShadow").height($("#content").height() + 40);
			$("#footerWrapper").css("top",$("#contentShadow").height() + 240);
		}
	};
})();