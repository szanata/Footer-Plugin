$(function (){

  Router = {
      
    PAGES: ['home','license','developing'],
      
    think: function (p){
      if (p){
        this.go(p);
        return;
      }
      if (window.location.href.indexOf('#')){
        var page = window.location.href.substring(window.location.href.indexOf('#') + 1, window.location.href.length);
        for (var i = 0, li = this.PAGES.length; i < li; i++ ){
          if (page === this.PAGES[i]){
            this.go(page);
            return;
          }
        }
      }
      this.go('home');
    },
    go: function (page){
      $('#menu a').removeClass('active');
      $('a[href="#' + page + '"]').addClass('active');
      $('#content').load('pages/' + page + '.html',function (){
        $('#content-shadow').height($('#content').height() + 40);
        $('#footer-wrapper').css('top',$('#content-shadow').height() + 240);      
      });
      return;
    }
  };
  
  
  $('#menu a').bind('click', function (e){
    
    Router.think($(this).attr('href').replace('#',''));
  });
  
  Router.think();
  
});
