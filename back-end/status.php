<?php
    header("Access-Control-Allow-Origin: http://127.0.0.1:5500");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Permite os métodos HTTP necessários
    header("Access-Control-Allow-Headers: Content-Type"); // Permite o cabeçalho Content-Type
    header('Content-Type: application/json');
    $method = $_SERVER['REQUEST_METHOD'];


    if($method == 'POST'){
        AcessStatus();
    }else{
        Notfyacess();
    }

    function AcessStatus(){
        session_start();
        $method = $_SERVER['REQUEST_METHOD'];
        $answerjs= $_POST['action'];
        $sessionId = session_id();

        $usuarioId = $_SESSION['Session'];
        $sessionFile = session_save_path() . DIRECTORY_SEPARATOR . '\sess_' . $usuarioId;

       if($answerjs == 'delete'){
        session_unset();
        session_destroy();
        setcookie(session_name(), null, - 1, '/');
        
        echo json_encode(['SessionRes'=> true]);
       }else{
        echo 'erro de leção de status';
       }
    }

    function Notfyacess(){
        session_start();
        $ress = ['SessionRes' => false];


        if(isset($_SESSION['Session']) && is_string($_SESSION['Session'])){
            $ress['SessionRes']= true;
            echo json_encode($ress);
        }else{
            echo json_encode($ress);
    }
   }

?>