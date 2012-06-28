/** Make entire Div Clickable **/

$(document).ready(function(){
	$(".activate-button, .getCode-button, .show-deal-uk, .getCode-oldLanding-button, .w-code-button").click(function(){
	     window.location=$(this).find("a").attr("href"); 
	     return false;
	});
});

/** zClip implimentation ah **/
/*****************************/
/*****************************/
/*****************************/
/*****************************/

	$(document).ready(function(){
         	  $(".getCode-button, .getCode-oldLanding-button, .w-code-button").zclip({
			    path: 'js/ZeroClipboard.swf',
			    copy: function(){
			        // `this` should be the current a.copy-btn
			        return $(this).next('.code').text();
			    }, 
				afterCopy:function(){
							//stops pop up info
				        }
			}); 				    

		});