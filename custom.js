/**
 * 
 */

var a=1;
$(function(){
	setInterval(function(){
		if(a>5){
			a=1;
		}
		
		var img = "img/img_banner1_" + a + ".jpg";
		
		$("#img01>img").attr("src", img);
		
		a++;
	}, 5000);
	

	$("#brand_menu>ul>li:nth-child(8)").click(function(){
		$("#brand_mitte").css("display", "none");
		$("#brand_phila").css("display", "block");
		$("#under_bgi").css("background-image", "url(img/bg_prd_philadelphia.jpg)");
	});
	
	$("#brand_menu>ul>li:nth-child(6)").click(function(){
		$("#brand_phila").css("display", "none");
		$("#brand_mitte").css("display", "block");
		$("#under_bgi").css("background-image", "url(img/bg_prd_mitte.jpg)");
	});
	
	$("#main>ul>li").mouseenter(function(){
		$(".menu_active").css("display", "block");
	});
	
	/*
	
	$(".li01").hover(
		function(){
			$(this).addClass("ani");
			},
		function(){
				$(this).removeClass("ani");
				}
		
		
	);*/
	
	
});


