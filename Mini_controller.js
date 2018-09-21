/*Esta funcion permite obtener el valor del select de html(onchange)*/
//1.llenar arreglo
//tiposPaella[]
//cada vez que clickean en mariscos,vegetariana,carneypollo
//2. recorrer arreglo y pasarle el tipo al factory
//3 un objeto que contenga el tipo y ademas elpaellaProduct 4 objeto al carrito 
var res;
var arreglo=[]
var product=[]
let menuItems=["mariscos","Vegetariana","Carne y pollo"]

function getValueType (paellaType){

	this.paellaType = paellaType;
	arreglo.push(this.paellaType);
	//console.log(arreglo)
}
//ARREGLO GLOBAL 
var temporal=[]
function buildPaella(){

	var factory = executeFactory(this.paellaType.value);
	var paellaProduct = generatePaella(factory.type);
	

	for(var i = 0; i < arreglo.length;i++){
			var factory = executeFactory(arreglo[i].value);
			var paellaProduct= generatePaella(factory.type);
			temporal.push(paellaProduct)



			

		}
	//var factory = executeFactory(this.paellaType.value);
	//var carro= new buildShoppingCar(this.paellaType.value,paellaProduct);
	var carro = new buildShoppingCar(temp);
	var baseProduct = produceBase();

	console.log(paellaProduct);
	console.log(carro)
	console.log(baseProduct)
	var decorator = new executeDecorator(menuItems)
	console.log(decorator)
}

function getValuePrice(valor){

	var numero=valor.value
	res=parseInt(numero)
	var result=parseInt(numero)
	var precio=result- result*(0.19)
	var iva=result*(0.19)
	
	console.log("Precion original",precio)
	console.log("Iva es ",iva)
	//console.log(newCalculateDollar(res))


}

function getValueCoin(valueCoin){
	this.valueCoin = valueCoin
	if(valueCoin.value == "dolar"){
		var j = calculatePaellaPrice(res);
		console.log(j);
	}
	else if(valueCoin.value == "euro"){
		console.log(calculatePaellaPriceEuro(res));
	}
}


