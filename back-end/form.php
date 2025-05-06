<?php
header("Access-Control-Allow-Origin: http://127.0.0.1:5500"); // Permite requisições de qualquer origem
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
            break;
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
 <script type="module" src="/front-end/Manipulation.js"></script>
    <div class="container">
        <img class="imag-login" src="https://thumbs.dreamstime.com/b/web-246515641.jpg">
            <div class="Register">
                <img class="imag-User" src="https://i0.wp.com/static.vecteezy.com/system/resources/previews/026/625/600/original/person-icon-symbol-design-illustration-vector.jpg?ssl=1">
                <h1 class="Title-wellcome">Welcome!</h1>
                <div class="form">
                    <label class="inputForename-label">
                     <p class="Text-Input">seu nome.</p>
                     <input class="inputForename" placeholder="seu nome" name="Forename" type="text">
                    </label>
                    <label class="ADDemail-label">
                     <p class="Text-Input">email.</p>
                     <input class="ADDemail" placeholder="email" name="email" type="email">
                     <p class="Text-infor">Por favor adicione um email valido!</p>
                    </label>
                    <label class="createPassword-label">
                     <p class="Text-Input">Crie uma senha.</p>
                     <input class="createPassword" placeholder="crie uma senha" name="Password" type="text">
                     <p class="Text-infor">Por favor crie uma senha forte!</p>
                    </label>
                    <label class="validPassword-label">
                     <p class="Text-Input">Repita a senha.</p>
                     <input class="validPassword" placeholder="repita a senha" name="Passwordvalid" type="text">
                     <p class="Text-infor" >Por favor, adicione a mesma senha!</p>
                    </label>
                </div>
                    <button class="button-answerOne">sing in</button>
                <div class="LoginIn">
                 <label class="EnterEmail-label">
                  <p class="Text-Input">Digite seu email.</p>
                  <input class="EnterEmail" placeholder="email" name="Enteremail" type="email">
                  <p class="Text-infor">Email invalido ou incorreto!</p>
                 </label>
                 <label class="EnterPassword-label">
                  <p class="Text-Input">Digite sua senha.</p>
                  <input class="EnterPassword" placeholder="crie uma senha" name="EnterPassword" type="text">
                  <p class="Text-infor">Senha invalida ou incorreta!</p>
                 </label>
                </div>
                <button class="button-answerTwo">sing in</button>
            </div>
        <div class="acept">
            <button class="button-direction">
              <div class="container-gear">
              <img class="imag-derection" src="http://localhost/back-end/icones/seta-direita.png">
              <img class="imag-gear1" src="http://localhost/back-end/icones/engrenagem.png">
              <img class="imag-gear2" src="http://localhost/back-end/icones/engrenagem.png">
              <div class="box-after"></div></div><p id="Text-direct">sing in</p>
            </button>
        </div>
    </div>
</body>';
    echo $html;

}
?>