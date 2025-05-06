<?php
function ImgServer(){
    header("Access-Control-Allow-Origin: http://localhost"); // Permite requisições de qualquer origem
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Permite os métodos HTTP necessários
    header("Access-Control-Allow-Headers: Content-Type"); // Permite o cabeçalho Content-Type

    //array com todos os intens do diretorio
    $BoxInforPath= scandir('icones/');

    //array vazio para enviar as imagens como respostas
    $BoxAswer= [];

    for($i=0; $i <= $BoxAswer.length; $i++){
        if(in_array(pathinfo($BoxAswer[i], PATH_EXTESSION))){
            array_push($BoxAswer, "http://localhost/icones$BoxInforPath");
        };
    };

}

echo json_encode($BoxAswer);
?>