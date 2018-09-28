<?php
	

	require_once './conexion_bd.php';
	$observerclass= new observerClass();

	// capturar información del formulario de busqueda
	if(isset($_GET['search'])){
		$obj = $_GET['search'];
		//$observerClass= new observerClass();
	
		$obj= (object)$_POST;	
		$observerclass -> getUser($mysqli,$obj);
	}

	if(isset($_POST) && !empty($_POST) ){
	 	$obj = (object)$_POST;
	 	$observerclass-> insertUser($mysqli,$obj);

	//	$observerClass= new observerClass();
		
	//	$observerClass -> insertUser($mysqli,$obj);
	//}
	//Insert Into user(id_user,name)values ($obj)->identification,$obj)->nombre
	 }
	
	class observerClass 
	{
		
		function getUser($mysqli,$obj){

		$queryRevista = $mysqli -> query ("SELECT nombre, apellido FROM usuario WHERE id_usuario =".$obj."");

		sql_fetch_array($queryRevista);

		if(isset($_GET['search'])){
			if(count($valores) > 0){
				echo "Hola <b>".$valores['nombre']."</b> ya te encuentras registrado";
			}else{
				echo "No estas registrado, por favor registrate antes de realizar una suscripción";
			}
		}

		return fetch_array;
	}

		function insertUser($mysqli, $obj){
			$str= "INSERT  INTO usuario VALUES (".$obj->id_usuario.",'".$obj->first_name."','".$obj->last_name."',".$obj->age.",".$obj->city.")";
			
			$valores= $mysqli->query($str);
		}

		function suscribeUser($mysqli, $obj){

		}

	}

	
	
?>