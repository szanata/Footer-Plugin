(function(){

	$(document).ready(function(){
		
		Router.think();
    
	});
	
	Router = {
			
		pages: ["home","licence","developing"],
			
		think: function(){
			if (window.location.href.indexOf("?")){
				var page = window.location.href.substring(window.location.href.indexOf("?")+1,window.location.href.length);
				for (var i = 0, li = this.pages.length; i < li; i++ ){
					if (page === this.pages[i]){
						this.go(page);
						return;
					}
				}
			}
			this.go("home");
		},
		
		go: function(page){
			for (var i = 0, li = this.pages.length; i < li; i++ ){
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