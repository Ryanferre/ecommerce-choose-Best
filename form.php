<?php
header("Access-Control-Allow-Origin: *"); // Permite requisições de qualquer origem
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Permite os métodos HTTP necessários
header("Access-Control-Allow-Headers: Content-Type"); // Permite o cabeçalho Content-Type

// Se for uma requisição OPTIONS (preflight), finaliza sem retornar conteúdo
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
}


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
            echo 'Requisição inesistente';
            break;
    }
}

verifiquedmethod();

function constructFor(){
    $html='
<body>
 <script src="./Manipulation.js"></script>
    <div class="container">
        <img class="imag-login" src="https://thumbs.dreamstime.com/b/web-246515641.jpg">
            <form class="Register" action="cad.php" method="post">
                <img class="imag-User" src="https://i0.wp.com/static.vecteezy.com/system/resources/previews/026/625/600/original/person-icon-symbol-design-illustration-vector.jpg?ssl=1">
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
            <button onclick="manipulationCadres()" class="button-direction">
              <div class="container-gear">
              <img class="imag-derection" src="icones/seta-direita.png">
              <img class="imag-gear1" src="icones/engrenagem.png">
              <img class="imag-gear2" src="icones/engrenagem.png">
              <div class="box-after"></div></div><p id="Text-direct">sing in</p>
            </button>
        </div>
    </div>
</body>';
    echo $html;

}
?>