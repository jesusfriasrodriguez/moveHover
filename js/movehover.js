(function($) {
	$.fn.extend({
		movehover: function(id) {
			//debugger;
			return this.each(function(){

				var imageWidth = $('#' + this.id + " img").width();
				var imageHeight = $('#' + this.id + " img").height();

				$.fn.middle = (function() {
					// center
					$(this).scrollLeft((imageWidth / 2) - ($(this).width() / 2));
					$(this).scrollTop((imageHeight / 2) - ($(this).height() / 2));
				});
				
				$(this).middle();

				$(this).mousemove(function(event){

		 			var offset = $(this).offset();
		            positionX = event.pageX - offset.left;
		            positionY = event.pageY - offset.top;
					
				   	var horizontalMousePosition = event.pageX;
				   	var verticalMousePosition = event.pageY;

			   	  	$(this).scrollTop( positionY * (imageHeight / $(this).height()) - positionY);
			   	  	$(this).scrollLeft( positionX * (imageWidth / $(this).width()) - positionX);

				});
			});
		}
	});
})(jQuery)