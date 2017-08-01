$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop()>100){
			$("#top_btn").fadeIn();
			
		}
		else{
			$("#top_btn").fadeOut();
		}
	});
	
	$("#top_btn").click(function(){
		$("body,html").animate({scrollTop:0},500);
	});
});