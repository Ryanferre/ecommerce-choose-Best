import {ToFillIn} from './Processmanipulator.js'

let TimeOut;
let Form= document.querySelector('.Register')
let arrr= []

Form.addEventListener("submit", function (event){
    event.preventDefault()
    let InputList = document.querySelectorAll('input');
    const TextAlert = document.querySelector('.Atetion');

    const CheckdEmail= /\w\@gmail.com/
    const CheckPasswuord= /\d{8}/
    for (let i = 0; i < InputList.length; i++) {
    switch (false) {
        case CheckdEmail.test(InputList[i].value):
            arrr.push(InputList[i].className)

        case CheckPasswuord.test(InputList[i].value):
            arrr.push(InputList[i].className)
        default:
            break;
    }
    }

    clearTimeout(TimeOut)
    
    TimeOut= setTimeout(()=>{
        if(arrr.length >= 0){
            structPhase()
        }else{
            throw new Error('erro ao exucutar a função!');
            
        }
    }, 6000)
})







function structPhase(){
    //Frases para cada error
    const viewPhase = `Campos_invalidos._Por_favor,_preencha_corretamente!`;
    const BoxInform= document.querySelector('.Information')
    BoxInform.style.marginTop= '1%'

    //caso o 'Phase' for um desses valores, chame a função 'Distributor' passando para
    //ela a sua perspectiva frase
    let Date;
   setTimeout(() => {
    Date= viewPhase.split('')
    Distributor(Date)
   }, 4000);
}


function Distributor(dados){
    for(let i=0; i < dados.length; i++){
        setTimeout(()=>{
            //se existir algun caracterie '_' envolva-o em um paragrafo e crie uma class diferente das demais
            if(dados[i] == '_'){
                writeInform(`<p class="SpacePhase">${dados[i]}</p>`)
            }
            //para as demais construa um paragrafo e crie uma class do memo nome para ambas
            else{
                writeInform(`<p class="Informe">${dados[i]}</p>`)
            }
        }, i * 100)
    }
}
let arr= []

function writeInform(dado){
    const InformeError= document.querySelector('.Information');
    const BoxInformReturn= document.querySelector('.Information')
    arr.push(dado)
    InformeError.innerHTML= arr.join('')
    let D= document.querySelectorAll('.SpacePhase')
    for(let i=0; i < D.length; i++){
        D[i].style.visibility= 'hidden'
    }
    setTimeout(() => {
         BoxInformReturn.style.marginTop= ''
        arr.pop()
        InformeError.innerHTML= ''
    }, 6000);
}