
$(document).ready(function(){
	/*--- Display information modal box ---*/

  	$(".info").click(function(){
    	$(".infobox").fadeIn(1000);

  	});
  	/*--- Hide information modal box ---*/

  	$("a.close").click(function(){
  		$(".infobox").fadeOut(1000);
  	});
  	});