
let nav=document.getElementById("nav");
let menu=document.getElementById("enlace");
let icono=document.getElementById("open");
let botones=document.getElementsByClassName("btn-header");
let pulso=false;


function menus()
{
	let Desplazamiento_Actual = window.pageYOffset;

	if (Desplazamiento_Actual<= 300) {
		nav.classList.remove('nav2');
		nav.className=('nav1');
		nav.style.transition='1s';
		menu.style.top='100px';
		icono.style.color='white';
	} else {
		nav.classList.remove('nav1');
		nav.className=('nav2');
		nav.style.transition='1s';
		menu.style.top='140px';
		icono.style.color='black';
	}

	
}
                                                                             


function apertura()
{
	if(!pulso)
	{
		menu.style.width ='70vw';
		pulso=true;
	}else
	{
		menu.style.width='0%';
		menu.style.overflow='hidden';
		pulso=false;
	}
}
 
window.addEventListener('load',function()
{
	
	let _body=document.getElementById('hidden');
	let preLoader=document.getElementById('onload');

	_body.classList.remove('hidden');
	preLoader.style.display='none';
	menus();
});




window.addEventListener('scroll',function()
{
	console.log(window.pageYOffset);
	menus();

});

icono.addEventListener('click',function()
{
	apertura();
});

window.addEventListener('resize',function()
{
	if(screen.width>=700)
	{
		pulso=false;
		menu.style.removeProperty('overflow');
		menu.style.removeProperty('width');
	}
});
window.addEventListener('click',function(e){
	 console.log(e.target);
	 if(pulso)
	 {
		 let span=document.querySelector('span');
		 if(e.target!==span && e.target!==icono)
		 {
			menu.style.width='0%';
			menu.style.overflow='hidden';
			pulso
		 }
	 }

});