<?php

//função para manipular ou armazenar dados no banco de dados
function acessSGBD(){
    header("Access-Control-Allow-Origin: *"); // Permite requisições de qualquer origem
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Permite os métodos HTTP necessários
    header("Access-Control-Allow-Headers: Content-Type"); // Permite o cabeçalho Content-Type

    $loadRequest= file_get_contents('php://input');
    $transfoRequest= json_decode($loadRequest, true);

    //captura de dados recebidos
    $DataForename= $transfoRequest[0];
    $Dataemail= $transfoRequest[1];
    $Datapassword= $transfoRequest[2];

    class ConectSGBD {
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
                die("Erro na conexao");
            }
        }

        public function executeQuery($query) {
            $this->conect->query($query);
            echo 'sucess';
        }
    }

    $conexao = new ConectSGBD();//instanciando a classe
    //adicionando dados de conexao aos atributos
    $conexao->setLocation("localhost");
    $conexao->setUsuario("root");
    $conexao->setPassword("");
    $conexao->setSGBD("cadastro");

    $conexao->conectionBD(); //chamando o metodo para criar a conexao com o BD

    //criando a query para o banco de dado
    $createUsuario ="INSERT INTO userinformation(nome, email, senha) VALUES('$DataForename', '$Dataemail', '$Datapassword')";

    $conexao->executeQuery($createUsuario);


}

acessSGBD()

?>