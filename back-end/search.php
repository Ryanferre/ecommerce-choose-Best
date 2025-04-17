<?php

header("Access-Control-Allow-Origin: http://127.0.0.1:5500"); // Permite requisições de qualquer origem
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Permite os métodos HTTP necessários
header("Access-Control-Allow-Headers: Content-Type"); // Permite o cabeçalho Content-Type

// Se for uma requisição OPTIONS, finaliza sem retornar conteúdo
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

function callanswer(){
    if(isset($_POST['action']) && $_POST['action'] === 'RequisitionConstruct'){
        //requisição para construir uma pagina de pesquisa para mobile
        RequisitionConstruct();
    }else{
        //requisição para construir a pagina de pesquisa em desqtop imdependente do tipo de conteudo na requisição que esteja recebendo
        Construct();
    }
}


callanswer();

//construção da pagina de produtos
function Construct(){
    $loadRequest= file_get_contents('php://input');
  
    $transfoRequest= json_decode($loadRequest, true);

    if($transfoRequest === null){
        echo 'o erro é esse:' . json_last_error_msg();
    };


    $loadInput= $transfoRequest['question2'];
    $loaddados= json_decode($transfoRequest['question1'], true);
    
    if($loaddados === null){
        echo 'esse é o erro de $loaddados:' . json_last_error_msg();
    }
    $Fon= ['Fone', 'fone', 'airpods'];
    $Mous= ['mouse', 'Mouse'];
    $Tec= ['teclado', 'Teclado', 'teclados'];
    $RestValue= null;
    
    if(in_array($loadInput, $Fon)){
        $RestValue = 'indexObject1';
    }else  if(in_array($loadInput, $Mous)){
        $RestValue = 'indexObject2';
    }else if(in_array($loadInput, $Tec)){
        $RestValue =  'indexObject3';
    }else{
        $RestValue  = 'erro de busca';
    }

    
    switch($RestValue){
        case 'indexObject1':
            echo <<<EOT
             <body>
             <ul>
             EOT;
                for($k = 0;$k < count($loaddados[0]); $k++){
                    $object = $loaddados[0][$k];
            
                            // Verificar se todas as chaves necessárias existem no objeto
                            $id = $object['id'] ?? 'ID não disponível';
                            $mark = $object['mark'] ?? 'Marca não disponível';
                            $product = $object['producte'] ?? 'Produto não disponível';
                            $description = $object['description'] ?? 'Descrição não disponível';
                            $txt = $object['txt'] ?? 'Texto não disponível';
                            $price = $object['price'] ?? 'Preço não disponível';
                            $imag = $object['imag'] ?? 'Imagem não disponível';
            
                            // Monta o HTML dos itens
                            $html = '
                                <li class="items">
                                    <div class="UnitDescription">
                                        <p class"mark">' . htmlspecialchars($mark, ENT_QUOTES, 'UTF-8') . '</p>
                                        <img class="ProductImag" src="http://localhost/back-end/' . htmlspecialchars($imag, ENT_QUOTES, 'UTF-8') . '">
                                        <h3>' . htmlspecialchars($product, ENT_QUOTES, 'UTF-8') . '</h3>
                                        <p>' . htmlspecialchars($description, ENT_QUOTES, 'UTF-8') . '</p>
                                    </div>
                                    <div class="UnitPrice">
                                        <p>' . htmlspecialchars($txt, ENT_QUOTES, 'UTF-8') . '</p>
                                        <h4>' . htmlspecialchars($price, ENT_QUOTES, 'UTF-8') . '</h4>
                                    </div>
                                    </li>';
                          echo $html;
                }
             echo <<<EOT
               </ul>
               </body>
               EOT;
        break; 
        
        case 'indexObject2':
            echo <<<EOT
             <body>
             <ul>
             EOT;
                for($k = 0;$k < count($loaddados[1]); $k++){
                    $object = $loaddados[1][$k];
            
                            // Verificar se todas as chaves necessárias existem no objeto
                            $id = $object['id'] ?? 'ID não disponível';
                            $mark = $object['mark'] ?? 'Marca não disponível';
                            $product = $object['producte'] ?? 'Produto não disponível';
                            $description = $object['description'] ?? 'Descrição não disponível';
                            $txt = $object['txt'] ?? 'Texto não disponível';
                            $price = $object['price'] ?? 'Preço não disponível';
                            $imag = $object['imag'] ?? 'Imagem não disponível';
            
                            // Monta o HTML dos itens
                            $html = '
                                <li class="items">
                                    <div class="UnitDescription">
                                        <p class"mark">' . htmlspecialchars($mark, ENT_QUOTES, 'UTF-8') . '</p>
                                        <img class="ProductImag" src="http://localhost/back-end/' . htmlspecialchars($imag, ENT_QUOTES, 'UTF-8') . '">
                                        <h3>' . htmlspecialchars($product, ENT_QUOTES, 'UTF-8') . '</h3>
                                        <p>' . htmlspecialchars($description, ENT_QUOTES, 'UTF-8') . '</p>
                                    </div>
                                    <div class="UnitPrice">
                                        <p>' . htmlspecialchars($txt, ENT_QUOTES, 'UTF-8') . '</p>
                                        <h4>' . htmlspecialchars($price, ENT_QUOTES, 'UTF-8') . '</h4>
                                    </div>
                                    </li>';
                          echo $html;
                }
             echo <<<EOT
               </ul>
               </body>
               EOT;
            break;
            case 'indexObject3':
                echo <<<EOT
             <body>
             <ul>
             EOT;
                for($k = 0;$k < count($loaddados[2]); $k++){
                    $object = $loaddados[2][$k];
            
                            // Verificar se todas as chaves necessárias existem no objeto
                            $id = $object['id'] ?? 'ID não disponível';
                            $mark = $object['mark'] ?? 'Marca não disponível';
                            $product = $object['producte'] ?? 'Produto não disponível';
                            $description = $object['description'] ?? 'Descrição não disponível';
                            $txt = $object['txt'] ?? 'Texto não disponível';
                            $price = $object['price'] ?? 'Preço não disponível';
                            $imag = $object['imag'] ?? 'Imagem não disponível';
            
                            // Monta o HTML dos itens
                            $html = '
                                <li class="items">
                                    <div class="UnitDescription">
                                        <p class"mark">' . htmlspecialchars($mark, ENT_QUOTES, 'UTF-8') . '</p>
                                        <img class="ProductImag" src="http://localhost/back-end/' . htmlspecialchars($imag, ENT_QUOTES, 'UTF-8') . '">
                                        <h3>' . htmlspecialchars($product, ENT_QUOTES, 'UTF-8') . '</h3>
                                        <p>' . htmlspecialchars($description, ENT_QUOTES, 'UTF-8') . '</p>
                                    </div>
                                    <div class="UnitPrice">
                                        <p>' . htmlspecialchars($txt, ENT_QUOTES, 'UTF-8') . '</p>
                                        <h4>' . htmlspecialchars($price, ENT_QUOTES, 'UTF-8') . '</h4>
                                    </div>
                                    </li>';
                          echo $html;
                }
             echo <<<EOT
               </ul>
               </body>
               EOT;
                break;
                default:
                echo "$RestValue. Nos desculpe  não coseguimos encontrar o produto!";
                break;
    }
}

//construir a página de pesquisa para mobile
function RequisitionConstruct(){
    $searchanswer= $_POST['action'];

    if($searchanswer === 'RequisitionConstruct'){
        $html = '
        <body>
        
        <div class="Pesquisa-mobile">
                <input class="TextProdu" type="text">
                <button class="elementestwo-mobile"><img class="Iconlup" src="http://localhost/back-end/icones/LupaPesquisa.png"></button>
        </div>
        
        <div class="menu-mobile">
        <ul class="listNav">
            <li><button class="buttonHome"><img class="iconNavegation" src="http://localhost/back-end/icones/botao-home.png"></button></li>
            <li><button class="buttonLupa"><img class="iconNavegation" src="http://localhost/back-end/icones/LupaPesquisa.png"></button></li>
            <li><button class="buttonLogin"><img class="iconNavegation" src="http://localhost/back-end/icones/contorno-do-botao-de-seta-quadrado-de-login.png"></li>
            <li><button class="buttonRegister"><img class="iconNavegation" src="http://localhost/back-end/icones/icons8-sign-up-50.png"></button></li>
        </ul>
        </div>
        </body>';


        echo $html;
    }else{
        echo 'error de aplicação';
    }
}
?>