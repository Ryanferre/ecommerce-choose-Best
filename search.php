<?php

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
    $RestValue;
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
        
                        // Montar o HTML
                        $html = '
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Document</title>
                        </head>
                        <body>
                        <ul>
                            <li class="items">
                                <div class="UnitDescription">
                                    <p class"mark">' . htmlspecialchars($mark, ENT_QUOTES, 'UTF-8') . '</p>
                                    <img class="ProductImag" src="' . htmlspecialchars($imag, ENT_QUOTES, 'UTF-8') . '">
                                    <h3>' . htmlspecialchars($product, ENT_QUOTES, 'UTF-8') . '</h3>
                                    <p>' . htmlspecialchars($description, ENT_QUOTES, 'UTF-8') . '</p>
                                </div>
                                <div class="UnitPrice">
                                    <p>' . htmlspecialchars($txt, ENT_QUOTES, 'UTF-8') . '</p>
                                    <h4>' . htmlspecialchars($price, ENT_QUOTES, 'UTF-8') . '</h4>
                                </div>
                                </li>
                        </ul>
                        </body>
                        </html>';
        
                        // Exibir o HTML
                        echo $html;
            }
        break; 
        
        case 'indexObject2':
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
        
                        // Montar o HTML
                        $html = '
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Document</title>
                        </head>
                        <body>
                        <ul>
                            <li class="items">
                                <div class="UnitDescription">
                                    <p class="mark">' . htmlspecialchars($mark, ENT_QUOTES, 'UTF-8') . '</p>
                                    <img class="ProductImag" src="' . htmlspecialchars($imag, ENT_QUOTES, 'UTF-8') . '">
                                    <h3>' . htmlspecialchars($product, ENT_QUOTES, 'UTF-8') . '</h3>
                                    <p>' . htmlspecialchars($description, ENT_QUOTES, 'UTF-8') . '</p>
                                </div>
                                <div class="UnitPrice">
                                    <p>' . htmlspecialchars($txt, ENT_QUOTES, 'UTF-8') . '</p>
                                    <h4>' . htmlspecialchars($price, ENT_QUOTES, 'UTF-8') . '</h4>
                                </diV>
                                </li>
                        </ul>
                        </body>
                        </html>';
        
                        // Exibir o HTML
                        echo $html;
            }
            break;
            case 'indexObject3':
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
            
                            // Montar o HTML
                            $html = '
                            <!DOCTYPE html>
                            <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <title>Document</title>
                            </head>
                            <body>
                            <ul>
                                <li class="items">
                                    <div class="UnitDescription">
                                        <p>' . htmlspecialchars($mark, ENT_QUOTES, 'UTF-8') . '</p>
                                        <img class="ProductImag" src="' . htmlspecialchars($imag, ENT_QUOTES, 'UTF-8') . '">
                                        <h3>' . htmlspecialchars($product, ENT_QUOTES, 'UTF-8') . '</h3>
                                        <p>' . htmlspecialchars($description, ENT_QUOTES, 'UTF-8') . '</p>
                                    </div>
                                    <div class="UnitPrice">
                                        <p>' . htmlspecialchars($txt, ENT_QUOTES, 'UTF-8') . '</p>
                                        <h4>' . htmlspecialchars($price, ENT_QUOTES, 'UTF-8') . '</h4>
                                    </div>
                                    </li>
                            </ul>
                            </body>
                            </html>';
            
                            // Exibir o HTML
                            echo $html;
                }
                break;
                default:
                echo "$RestValue. Nos desculpe  não coseguimos encontrar o produto!";
                break;
    }
}

Construct();
?>