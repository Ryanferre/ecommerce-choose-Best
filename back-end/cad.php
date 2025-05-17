<?php

    header("Access-Control-Allow-Origin: http://127.0.0.1:5500");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Permite os métodos HTTP necessários
    header("Access-Control-Allow-Headers: Content-Type"); // Permite o cabeçalho Content-Type

    function ServerConect(){

        $method = $_SERVER['REQUEST_METHOD'];

        switch ($method) {
        case 'POST':
            $loadRequest= file_get_contents('php://input');//captura dados
            $transfoRequest= json_decode($loadRequest, true);//dados em array

            //captura de dados recebidos
            $DataForename= $transfoRequest[0];
            $Dataemail= $transfoRequest[1];
            $Datapassword= $transfoRequest[2];
            if($DataForename != ""){
                acessSGBD($DataForename, $Dataemail, $Datapassword);
            }else{
                GetLogin($Dataemail, $Datapassword);
            }
            break;
        case 'GET':
            session_start();
            if (isset($_SESSION['Session'])) {
                 $email = $_SESSION['Session'];
                 GetData($email);
            }
            break;
        default:
            echo "ERRO! dados nao encontrado";
            break;
    }
    }

    ServerConect();
    //classe para conexao ao banco de dados
    class Conectdata {
        private $Location;
        private $Usuario;
        private $SGBD;
        private $Password;
        private $conect;

        public function setLocation($Local){
            $this-> Location= $Local;
        }

        public function setUsuario($User){
            $this-> Usuario= $User;
        }

        public function setSGBD($BD){
            $this-> SGBD= $BD;
        }

        public function setPassword($SPasword){
            $this-> Password= $SPasword;
        }

        public function conectionBD(){
            $this->conect= new mysqli($this->Location, $this->Usuario, $this->Password, $this->SGBD);
            if($this->conect->connect_error){
                die("Erro de conexao");
            }
        }

        public function executeQuery($query, $emailSession) {
            $this->conect->query($query);
            session_start();
            $_SESSION['Session']= $emailSession;
            echo 'sucess';
        }

        public function conectExec($DataSession) {
                $stmt = $this->conect->prepare("SELECT * FROM useinformation WHERE email = ?");
                $stmt->bind_param("s", $DataSession);
                $stmt->execute();
                $result = $stmt->get_result();

                $data= $result->fetch_all(MYSQLI_ASSOC);

                header('Content-Type: application/json');
                echo json_encode($data);
                
        }

        public function firstConectUser($DataEmail, $DataPassword){
            $stmt = $this->conect->prepare("SELECT * FROM useinformation WHERE email = ? AND senha = ?");
            $stmt->bind_param("ss", $DataEmail, $DataPassword);
            $stmt->execute();
            $result = $stmt->get_result();

            $data= $result->fetch_all(MYSQLI_ASSOC);
            if($data){
                session_start();
                $_SESSION['Session']= $DataEmail;//recebe o email e quarda na variavel
                echo 'sucess';
            }else{
                echo 'erro de login';
            }
        }
    }

//função para manipular ou armazenar dados no banco de dados
function acessSGBD($DataForename, $DataEmail, $DataPassword){

    $conexao = new Conectdata();//instanciando a classe
    //adicionando dados de conexao aos atributos
    $conexao->setLocation("127.0.0.1:3307");
    $conexao->setUsuario("root");
    $conexao->setPassword("");
    $conexao->setSGBD("cadastro");

    $conexao->conectionBD(); //chamando o metodo para criar a conexao com o BD

    //criando a query para o banco de dado
    $createUsuario ="INSERT INTO useinformation(nome, email, senha) VALUES('$DataForename', '$DataEmail', '$DataPassword')";

    $conexao->executeQuery($createUsuario, $DataEmail);//chama o metodo para conexão


}

//função para pegar dados
function GetData($Dataemail){

    $conexao = new Conectdata();//instanciando a classe
    //adicionando dados de conexao aos atributos
    $conexao->setLocation("127.0.0.1:3307");
    $conexao->setUsuario("root");
    $conexao->setPassword("");
    $conexao->setSGBD("cadastro");

    $conexao->conectionBD(); //chamando o metodo para criar a conexao com o BD

    if(isset($_SESSION['Session'])){
        $conexao->conectExec($Dataemail);
    }else {
        echo json_encode(['error' => 'Erro na execução da consulta']);
    }
};

//função para Login
function GetLogin($DataEmail, $DataPassword){

    $conexao = new Conectdata();//instanciando a classe
    //adicionando dados de conexao aos atributos
    $conexao->setLocation("127.0.0.1:3307");
    $conexao->setUsuario("root");
    $conexao->setPassword("");
    $conexao->setSGBD("cadastro");

    $conexao->conectionBD(); //chamando o metodo para criar a conexao com o BD

    $conexao->firstConectUser($DataEmail, $DataPassword);
}

?>