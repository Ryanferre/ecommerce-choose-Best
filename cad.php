<?php

//função para manipular ou armazenar dados no banco de dados
function acessSGBD(){

    $DataForename= $_POST['Forename'];
    $DataLastname= $_POST['Lastname'];
    $Dataemail= $_POST['email'];
    $Datapassword= $_POST['Password'];


    $Location= 'localhost';
    $Usuario= 'root';
    $SGBD= 'Usuario';
    $Password= '';

    $conexao= new mySGBD($Location, $Usuario, $Password, $SGBD);

    $createUsuario= "INSERT INTO Usuario(forename, lastname, email, senha) VALUES('".$DataForename."','".$DataLastname."', '".$Dataemail."', '".$Datapassword."')";

    if($conexao-> connect_error){
        die('a conexão falhou na seguinte requisição=>'.$conexao-> connect_error);
    }else{
        $sendData->query($createUsuario);
    }
}

?>