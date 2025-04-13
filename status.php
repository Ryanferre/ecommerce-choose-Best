<?php
function Notfyacess(){
    header("Access-Control-Allow-Origin: http://127.0.0.1:5500");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Permite os métodos HTTP necessários
    header("Access-Control-Allow-Headers: Content-Type"); // Permite o cabeçalho Content-Type
    header('Content-Type: application/json');
    session_start();

    $ress = ['cadUser' => false];
    if(isset($_SESSION['cadastro_concluido'])== true){
        $ress['cadUser']= true;
        unset($_SESSION['cadastro_concluido']);
        echo json_encode($ress);
    }else{
        echo json_encode($ress);
    }
}
Notfyacess();
?>