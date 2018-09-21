function CalculatePriceDolar(){
	//Funcion para calcular el precio en dolares de la paella una vez se haya elegido que se desea pagar en dolares
	this.newCalculate = function(precio){
		var dolarActual = 3000.1
		var price = precio /dolarActual;
		return price; 

	}
}

function CalculatePriceEuro(){
		//Funcion para calcular el precio en dolares de la paella una vez se haya elegido que se desea pagar en euros

	this.newCalculate = function(precio){
		var euro = 3500.56
		var price = precio/euro;
		return price;
	}
}
function calculatePaellaPrice(precio){
	var calculate = new CalculatePriceDolar();
	return calculate.newCalculate(precio);
}

function calculatePaellaPriceEuro(precio){
	var calculate = new CalculatePriceEuro();
	return calculate.newCalculate(precio);
}