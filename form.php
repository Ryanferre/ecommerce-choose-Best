<?php
function verifiquedmethod(){
    $answerjs= $_POST['action'];
    switch ($answerjs) {
        //caso seja pedido para montar um formulario
        case $answerjs== 'Module-body-form':
            constructFor();
            break;
        //caso seja recebido os dados do formulario
        case $answerjs== 'Passwordvalid':
            acessSGBD();
        //nenhum dos casos aplicados
        default:
            echo 'Requisição inesitente';
            break;
    }
}

verifiquedmethod();

function constructFor(){
    $html='
    <!DOCTYPE html>
        <html lang="pt-br">

        <header>
        
        <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Document</title>
         <script type="module" src="./main.js"></script>
        </header>
<body>
    <div class="container">
        <img class="imag-login" src="https://unisite.org/assets/images/blog/3fdc6914fe49b29f37bd6b8e0efc02f2.jpg">
            <form class="Register" action="cad.php" method="post">
                <img class="imag-User" src="icones/do-utilizador.png">
                <h1 class="Title-wellcome">Welcome!</h1>
                <div class="form">
                    <label class="inputForename"><p class="Text-Input">seu nome.</p><input placeholder="seu nome" name="Forename" type="text"></label>
                    <label class="ADDemail"><p class="Text-Input">email.</p><input placeholder="email" name="email" type="email"></label>
                    <label class="EnterEmail"><p class="Text-Input">Digite seu email.</p><input placeholder="email" name="Enteremail" type="email"></label>
                    <label class="EnterPassword"><p class="Text-Input">Digite sua senha.</p><input placeholder="crie uma senha" name="EnterPassword" type="text"></label>
                    <label class="createPassword"><p class="Text-Input">Crie uma senha.</p><input placeholder="crie uma senha" name="Password" type="text"></label>
                    <label class="validPassword"><p class="Text-Input">Repita a senha.</p><input placeholder="repita a senha" name="Passwordvalid" type="text"></label>
                </div>
                    <button class="button-acess">sing in</button>
            </form>
        <div class="acept">
            <button onclick="manipulationCadres()" class="button-direction"><div class="container-gear"><img class="imag-derection" src="icones/seta-direita(4).png"><img class="imag-gear1" src="icones/roda-dentada(3).png"><img class="imag-gear2" src="icones/roda-dentada.png"><div class="box-after"></div></div><p id="Text-direct">sing in</p></button>
        </div>
    </div>
</body>
</html>';

    echo $html;

}
//função para manipular ou armazenar dados no banco de dados
function acessSGBD(){

    $DataForename= $_POST['Forename'];
    $DataLastname= $_POST['Lastname'];
    $Dataemail= $_POST['email'];
    $Datapassword= $_POST['Password'];


    $Location= 'localhost';
    $Usuario= 'root';
    $Password= '';
    $SGBD= 'Usuario';

    $conexao= new mySGBD($Location, $Usuario, $Password, $SGBD);

    $createUsuario= "INSERT INTO Usuario(forename, lastname, email, senha) VALUES('".$DataForename."','".$DataLastname."', '".$Dataemail."', '".$Datapassword."')";

    if($conexao-> connect_error){
        die('a conexão falhou na seguinte requisição=>'.$conexao-> connect_error);
    }else{
        $sendData->query($createUsuario);
    }
}
?>