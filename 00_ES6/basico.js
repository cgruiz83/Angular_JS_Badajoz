/*var data = [{precio: 12}, {precio: 34}, {precio: 19}]; 

data.forEach( elem =>{
if (true) {

	const iva = 1.16
	let precioFinal = elem.precio * iva
	
	console.log(`
	Oferta: 
	El precio final es ${precioFinal}`)
}
 
//console.log (precioFinal)
});*/




let oprueba = {
	precio: 12,
	iva: 1.16
}

oprueba.calcularIvaAsync_arrow = function () {
	setTimeout(() => {
		let precioFinal = this.precio * this.iva;
		console.log(
			` Oferta usando función arrow: 
			El precio final es  ${precioFinal}`
		);
	}, 1000)
}

oprueba.calcularIvaAsync_arrow();