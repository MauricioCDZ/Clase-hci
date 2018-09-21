function riceprototype(proto){
	this.proto=proto;
	this.clone=function(){
		var arroz=new rice([])

		for(var i = 0; i < proto.ingredientes.length;i++){
			arroz.ingredientes.push(proto.ingredientes[i]);
		}

		var arroz=rice.ingredientes;
		arroz=proto.ingredientes;
		return arroz;


	}

}

function rice(ingredientes){  //BASE
	this.ingredientes=ingredientes;
}

function produceBase(){
  var proto=new rice(["arroz","aciete","sal","agua"]);
  var prototype= new riceprototype(proto);
  var arroz=riceprototype(proto).clone();
  return arroz;

  //se contruye el objeto base
}