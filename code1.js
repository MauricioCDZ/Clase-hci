//MAURICIO CORTES DIAZ CLASE HCI 31/08/2018
function main(){
	
	var ageToDay=function(numero){
	return numero*365
	}
	//EJERCICIO 2
	var par=function(numero){
	let string= numero.toString()
	return string
	}
	//EJERCICIO 3
	var impar=function(numero){
	var arreglo=[]
	arreglo.push(numero)
	var ss=ageToDay(numero)
	arreglo.push(ss)

	return arreglo
	}








	//EJERCICIO 1

	var anos1=prompt("Digite su edad:" )
	console.log("El numero de edad en dias es: ",anos1*365)

	if(anos1 %2==0){
		console.log("El numero es par")
		console.log(par(anos1))
	}
	else{
		console.log("El numero es impar")
		console.log(impar(anos1))
	}
	
	





}

