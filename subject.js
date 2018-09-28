function searchTuple(){
  var search=document.getElementById('search').value;
  var dataEn='search'+search;
  $.ajax({
  	type:'GET',
  	url:'backend_revista.php',
  	data:dataEn,
  	success:function (resp) {
  		$('#res').html(resp)
  	}

  });
}

function insertUser(){

 //capturar valores del forumalrioa de registri
  var id_usuario= document.getElementById('id_usuario').value;
  var first_name=document.getElementById('first_name').value;
  var last_name=document.getElementById('last_name').value;
  var age=document.getElementById('age').value;
  var city=document.getElementById('city').value;
  var dataEn={
  	'id_usuario': id_usuario,
  	'first_name': first_name,
  	'last_name': last_name,
  	'age': age,
  	'city': city
  };
   $.ajax({
  	type:'POST',
  	url:'backend_revista.php',
  	data:dataEn,
  	success:function (resp) {
  		$('#res').html(resp)
  	}

  });
}


function suscribeUser(){
  var magazine=document.getElementById('magazine');
  var identificacion_sus=document.getElementById('identificacion_sus');

  var dataEn={
  	'magazine':magazine,
  	'identificacion_sus': identificacion_sus


  };



}
