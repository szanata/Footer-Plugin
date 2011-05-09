/**
 *  The Footer Plugin
 *  
 * 	Copyright 2011 Icewares
 *  
 *  Licensed under the CPL (http://iceon.me/licence.html)
 */
/**
 * 	The Footer Plugin
 * 
 *  version 1.1
 *  
 *  Created by Stefano Stypulkowski
 *   
 *  Requires jQuery 1.4.x or newer - www.jquery.com
 *  
 *  For instructions see:  http://footer.iceon.me
 */
(function ($){
	
	var style = {
		
    absolute: { 
      position: 'absolute',
      bottom: 0
    },
    
    relative: {
      position: 'relative',
      bottom: 'auto'
    }
  };
			
	var	configs = {
    timeOut: 200,
    zIndex: 200
  }
		
  var
    browserAdjust,
		docHeight,
		footerHeight,
    spacer,
		self;
		
  function monitor(){
			
    if ( docHeight !== $(document).height() ){
      
      setPosition();
      
      docHeight = $(document).height();
    }
    
    if ( footerHeight !== self.height() ){
      
      setSpacerHeight();
      
      footerHeight = self.height();
    }
    
    setTimeout(function(){
      monitor();
    },configs.timeOut);			
  }
		
  function setPosition(){
			
    if ( ($(document).height() - browserAdjust) > $(window).height() ){
      
      spacer.remove();
      
      self.css(style.relative);
      
    }else{
      
      if ( !spacer.parent().size()){
        
        self.parent().append(spacer);
      }
      
      self.css(style.absolute);
    }
  }
		
  function setSpacerHeight(){
			
    if ( self.height() !== spacer.height() ){

      spacer.height(self.height());
    }
	};
	
	$.fn.footer = function (options) {
		
		configs = $.extend(configs, options);
		
		configs.timeOut = configs.timeOut < 1 ? 1 : 0;
		
		self = this;
		
		self.css('z-index', configs.zIndex);
		
		docHeight = $(document).height();
		
		footerHeight = self.height();
		
		browserAdjust = $.browser.msie ? 4 : 0;
    
    spacer = $('<div></div>').css('height',self.height());
		
		setPosition();
		
		monitor();
	};
})(jQuery);