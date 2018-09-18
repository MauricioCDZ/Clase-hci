<?php

 	$entero=10;
 	$float=12.34;
 	$string="clase HCI";
 	$array= array("key1" => "hola", "key2" => "mundo");
 	$array2= array("key1", "hola","key2", "mundo");
    $verdadero=true;
    $falso=false;

    class StrValTest{
    	private $mivar="clase1";
    	public $miVar2="clase2";
    	public function __toString(){
    		return __CLASS__;
    	}

    	public function exaple(){
    		return "esto es una prueba";

    	}



    }

    echo "entero " .intval( $entero)."<br />";
    echo "string " .intval( $string)."<br />";
    echo  "float " .intval( $float)."<br />";
	echo "boolean false ".intval( $falso)."<br />";
	echo "boolean true " .intval($verdadero)."<br />";
	echo "hex-decicamal " .intval(0x165)."<br />";
	echo "float string:  " .strval($float)."<br />";
	$floatString= strval($float);
	gettype($floatString);

	echo "falso string:  " .strval($falso)."<br />";
	
	echo "class string:  " .strval(new StrValTest)."<br />";
	
	echo "array int". (int)$array."<br />";
	echo "array float". (float)$verdadero."<br />";
	var_dump((array)new StrValTest);
	//echo "clase en arreglo". (array)new StrValTest."<br />";
	echo "<br/>";
	var_dump((object)$float);