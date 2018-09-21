/*Se construye el objeto singleton que sera instanciado 
una unica vez, y podra ser utilizado en todos los platos 
de paella generados*/

var singleton = (function (){

	function productOnly(ingredients){

		var objectSalad = {
			salad: ingredients,
		}
		return objectSalad;
	}

	function createSalad(){

		var saladIngredients = ["papa","tomate","cebolla"];
		return new productOnly(saladIngredients);
	}

	function instanceSingle(){
		instance = createSalad();
		return instance
		
	}
	return instanceSingle();
	
})();

function executeSingleton(){

	return singleton;
}