$(document).ready(function(){
	

	/*$(".textoGraf").each(function(index)
	{
		var textoSpan=$(this).text();
		console.log(textoSpan);
	}
		);*/
	$(".JSAdobe").mouseenter(function(){
		setTimeout( function(){$('.ch-item').addClass("animate");},200 );
		//$('.ch-item').addClass("animate").delay(1000);
		$('.ch-info').html("<h3>Adobe CC</h3><p>After Effects, Photoshop, Illustrator</p>");
		//$('.javaData').text('Adobe CC');
		//$('#javaPar').text('After Effects, Photoshop, Illustrator');
		$('.ch-info').css("background","rgba(52,152,219, 0.8)");

	});


	$(".JSAdobe").mouseleave(function(){
		$('.ch-item').removeClass("animate");

	});



	$(".JSHtml").mouseenter(function(){
		setTimeout( function(){$('.ch-item').addClass("animate");},200 );
		$('.ch-info').html("<br><h3>HTML5/CSS3</h3>");
		//$('.javaData').text('HTML5/CSS3');
		//$('#javaPar').text('Bootstrap');
		$('.ch-info').css("background","rgba(193,127,209, 0.8)");
		

	});


	$(".JSHtml").mouseleave(function(){
		$('.ch-item').removeClass("animate");

	});


	$(".JSjq").mouseenter(function(){
		setTimeout( function(){$('.ch-item').addClass("animate");},200 );
	//	$('#javaPar').css("margin-top","0px");
		//$('.javaData').text('Javascript & JQuery');
		$('.ch-info').html("<h3>Javascript & JQuery</h3>");
		//$('#javaPar').css("margin-top","20px");
		$('.ch-info').css("background","rgba(46,204,113, 0.8)");
		

	});


	$(".JSjq").mouseleave(function(){
		$('.ch-item').removeClass("animate");
		
	});

	$(".JSedi").mouseenter(function(){
		setTimeout( function(){$('.ch-item').addClass("animate");},200 );
		$('.ch-info').html("<h3>Edición</h3><p>Premiere Pro, Final Cut Pro</p>");
		//$('.javaData').text('Edición');
		//$('#javaPar').text('Premiere Pro, Final Cut Pro');
		$('.ch-info').css("background","rgba(230,126,34, 0.8)");
		

	});


	$(".JSedi").mouseleave(function(){
		$('.ch-item').removeClass("animate");
		//$('#javaPar').css("margin-top","0px");
	});




	$(".JScpp").mouseenter(function(){
		setTimeout( function(){$('.ch-item').addClass("animate");},200 );
		$('.ch-info').html("<br><h3>C# / C++</h3>");
		//$('.javaData').text('C# / C++');
		//$('#javaPar').text('POO');
		$('.ch-info').css("background","rgba(127,140,141, 0.8)");
		

	});


	$(".JScpp").mouseleave(function(){
		$('.ch-item').removeClass("animate");
		//$('#javaPar').css("margin-top","0px");
	});

	$(".JS3d").mouseenter(function(){
		setTimeout( function(){$('.ch-item').addClass("animate");},200 );
		$('.ch-info').html("<h3>Animación 3D</h3><br><br><p>Autodesk Maya, Autodesk 3ds Max, CINEMA 4D</p>");
		//$('.javaData').text('Animación 3D');
	//	$('#javaPar').css("margin-top","20px");
		//$('#javaPar').text('Autodesk Maya, Autodesk 3ds Max, CINEMA 4D');
		$('.ch-info').css("background","rgba(192,57,43, 0.8)");
		

	});


	$(".JS3d").mouseleave(function(){
		$('.ch-item').removeClass("animate");
		
		//$('#javaPar').css("margin-top","0px");
	});

	$(".JSvue").mouseenter(function(){
		setTimeout( function(){$('.ch-item').addClass("animate");},200 );
		$('.ch-info').html("<h3>Vue xStream</h3><br><br><p>Natural environments</p>");	
		//$('.javaData').text('Vue xStream');
		//$('#javaPar').text('');
		$('.ch-info').css("background","rgba(142,68,173, 0.8)");
		

	});


	$(".JSvue").mouseleave(function(){
		$('.ch-item').removeClass("animate");
		
		//$('#javaPar').css("margin-top","0px");
	});

	$(".JSunity").mouseenter(function(){
		setTimeout( function(){$('.ch-item').addClass("animate");},200 );
		$('.ch-info').html("<h3>Unity</h3><p>Game development</p>");	
		//$('.javaData').text('Unity');
	
		//$('#javaPar').text('');
		$('.ch-info').css("background","rgba(41,128,185, 0.8)");
		

	});


	$(".JSunity").mouseleave(function(){
		$('.ch-item').removeClass("animate");
		
		//$('#javaPar').css("margin-top","0px");
	});

	$(".JSnuke").mouseenter(function(){
		setTimeout( function(){$('.ch-item').addClass("animate");},200 );
		$('.ch-info').html("<h3>Nuke</h3><p>VFX compositing</p>");	
		//$('.javaData').text('Unity');
	
		//$('#javaPar').text('');
		$('.ch-info').css("background","rgba(243,156,18, 0.8)");
		

	});


	$(".JSnuke").mouseleave(function(){
		$('.ch-item').removeClass("animate");
		
		//$('#javaPar').css("margin-top","0px");
	});

	$(".JStrack").mouseenter(function(){
		setTimeout( function(){$('.ch-item').addClass("animate");},200 );
		$('.ch-info').html("<h3>Tracking</h3><p>3DEqualizer, mocha Pro</p>");	
		//$('.javaData').text('Unity');
	
		//$('#javaPar').text('');
		$('.ch-info').css("background","rgba(52,73,94, 0.8)");
		

	});


	$(".JStrack").mouseleave(function(){
		$('.ch-item').removeClass("animate");
		
		//$('#javaPar').css("margin-top","0px");
	});

	
	

});
