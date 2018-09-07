function productPaella(name){
	this.name=name;

}

function decoratorNameProdcut(product,descripcion){
	this.product=product
	this.descripcion=descripcion
	var allname=this.product.name + " " + descripcion;
	return allname

}
function executeDecorator(item){


	itemDecorate=[]
	for (var i=0; i < item.length; i++){
		var productName= productPaella(item[i])
		var decorated = new decoratorNameProdcut(productName,"La mejor paella de la universidad");
		itemDecorate.push(decorated)
	}

	return itemDecorated;



}