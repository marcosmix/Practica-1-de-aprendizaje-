

function Usuario(nom,ape,p)
{
	this.nombre=nom;
	this.apellido=ape;
	this.pass=p;

	this.presentar=presentar;


}

function presentar()
{
	alert("Me llamo "+this.nombre+" "+this.apellido);
}


var p1=new Usuario("Marcos","Caballero","yella");

function inicial()
{
	p1.presentar();
	alert("si funciono");
}

window.onload=inicial;