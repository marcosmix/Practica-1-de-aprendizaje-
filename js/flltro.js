$(function()
{
	$('.filter').click(function(){ 
		
		$(this).addClass('active').siblings().removeClass('active');
		
		let valor= $(this).attr('data-nombre');
		
		if(valor=='Todos')
		{
			$('.cont-destacados').show('1000');
		}else
		{
			$('.cont-destacados').not('.'+valor).hide('1000'); /*Aca le digo que 
			a todos los elementos que contiene la misma clase .cont-destacados
			menos (not) la clase que acabo de cliquear (lo se porque guardo en la 
				variable local let el data-nombre de la clase) le de el atributo idem*/
			$('.cont-destacados').filter('.'+valor).show('1000'); 
			/*si cliqueo dos veces en el mismo no pasara nada pero si clikea en otro 
			por primera vez todos los elementos cont-destacados seran puestos en hide
			entoces devo volver a mostrar los elementos con show*/
		}
		
	});

	let personajes= $('#personajes').offset().top,
			lomejor = $('#lomejor').offset().top,
			destacado = $('#destacado').offset().top,
			contacto = $('#contacto').offset().top;

		window.addEventListener('resize',function()
		{
			let personajes= $('#personajes').offset().top,
			lomejor = $('#lomejor').offset().top,
			destacado = $('#destacado').offset().top,
			contacto = $('#contacto').offset().top;
		});

		$('#e-Inicio').on('click',function(e)
		{
			e.preventDefault();
			
			$('html, body').animate({scrollTop:0},600);
		});

		$('#e-Personajes').on('click',function(e)
		{
			e.preventDefault();
			$('html, body').animate({scrollTop:personajes -150},600);
			console.log("personajes="+personajes);
		});

		$('#e-Lomejor').on('click',function(e)
		{
			e.preventDefault();
			$('html, body').animate({scrollTop:lomejor -150},600);
			console.log(lomejor);
		});
		$('#e-Destacado').on('click',function(e)
		{
			e.preventDefault();
			$('html, body').animate({
				scrollTop:destacado -150},600);
		});

		$('#e-Contacto').on('click',function(e)
		{
			e.preventDefault();
			$('html, body').animate({scrollTop:contacto -150},600);
		});
	
})