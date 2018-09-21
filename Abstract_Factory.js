/*
var paellaProduct;




function paella(type){
this.type=type;
this.defineType=function(){
	return this.type;
}


}

function paellaFactory(){
	this.createPaella=function(type){
		return new paella(type);

	}

}

function executeFactory(type){
	var callFactory = new paellaFactory();
	paellaProduct = callFactory.createPaella(type);
	return paellaProduct;
} */

function paellaFactoryMethod(){
    this.crearPaella = function(type){
        if(type === "Mariscos"){
            return paellaMariscos();
        }else if(type === "Vegetariana"){
            return paellaVegetariana();
        }else if(type === "CarnePollo"){
            return paellaCarnePollo();
        }
    }
}


function paellaProduct(){

    this.product = function(ingredientes){
        this.ingredientes = ingredientes;
    }
}

var paellaGetProduct = new paellaProduct();

function paellaMariscos(){	
    var ingredientesMariscos = ["calamares", "mejillones", "tomate", "camarones"];
    return new paellaGetProduct.product(ingredientesMariscos);
}

function paellaVegetariana(){

    var ingredientesVegetariana = ["tomate", "albaca", "berenjena"];
    return new paellaGetProduct.product(ingredientesVegetariana);
}

function paellaCarnePollo(){

    var ingredientesPollo = ["pernil de pollo", "carne de res desemechada"];
    return new paellaGetProduct.product(ingredientesPollo);
}


function generatePaella(typePaella){

	var factory = new paellaFactoryMethod();
    var paella = factory.crearPaella(typePaella);
    return paella;
}


