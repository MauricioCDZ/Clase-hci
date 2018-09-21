function shoppingCar(typePaella){ 
    this.typePaella = typePaella;
    var arrayElements = [];
    //var objectComposite=[];


/*this.compositeProto=function(){
    var objectComposite =  {

        add: function(product){
            arrayElements.push(product);
            console.log("Se agrego",product);
            return arrayElements
        },

        remove: function (product){

            arrayElements.split(0, arrayElements.length);
            arrayElements.add(arrayElements);
            return arrayElements
        }
    }   
    return objectComposite
   }*/ 
}
shoppingCar.prototype={

    add: function(product){
            arrayElements.push(product);
            console.log(arrayElements);
            //return arrayElements
        },

        remove: function (product){

            arrayElements.split(0, arrayElements.length);
            arrayElements.add(product);
            
        }



}
function buildShoppingCar(productType,product){//tipo de producto, producto){

    var car = new shoppingCar(productType);
    
    for(var i=0;i<= product.length; i++){
        car.add(product[i])
    } 
    //var resultCar= car.compositeProto().add(product);
    return car;
}
