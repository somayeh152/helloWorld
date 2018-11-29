$(function(){
    
    $(window).scroll(function()
	{
		var top = $(this).scrollTop();
		if(top >= 100)
		{
			$("#goTop").fadeIn();
		}
		else
		{
			$("#goTop").fadeOut();
		}
	});
    
	$("#goTop").click(function()
	{
		$("body,html").stop().animate({scrollTop: "0px" },800);
	});
	
});