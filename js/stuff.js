
/** zClip implimentation ah **/
/*****************************/
/*****************************/
/*****************************/
/*****************************/

	$(document).ready(function(){
         	  $(".btn-yellow").zclip({
			    path: 'ZeroClipboard.swf',
			    copy: function(){
			        // `this` should be the current a.copy-btn
			        return $(this).prev('.btn1').text();
			    }, 
				afterCopy:function(){
							//stops pop up info
				        }
			}); 				    


				/* target="_blank" doesnt work because of jquery slider stuff, have to use this to open in new window */
		$(function() {
			$('a[rel*=external]').click( function() {
				window.open(this.href);
				return false;
			});
		});

