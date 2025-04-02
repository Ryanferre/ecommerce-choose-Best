
let Form= document.querySelector('.Register')

Form.addEventListener("submit", function (event){
    event.preventDefault()
    let InputList= document.querySelectorAll('input')
    const TextAlert= document.querySelector('.Atetion')
    let Name;
    let Dado= [/\w\@gmail.com/, /\d{8}/, /\d{8}/];

    for(let i = 0; i < InputList.length && i < Dado.length; i++){
        if(InputList[i].values !== Dado[i]){
            console.log('erro')
        }else{
            console.log('correto')
        }
    }
})


function structPhase(Phase){
    //Frases para cada error
    const viewPhase = ['Email_invalido!', 'Senha_invalida!', 'Senha_muito_curta!', 'Caractere_diferente._Repita_novamente!', 'Campos imvalidos!'];

    //caso o 'Phase' for um desses valores, chame a função 'Distributor' passando para
    //ela a sua perspectiva frase
    let Date;
    switch (Phase) {
        case 'email':
            Date= viewPhase[0].split('')
            Distributor(Date)
            break;
    
        case 'senha':
            Date= viewPhase[1].split('')
            Distributor(Date)
            break;
        
        case 'senhaCreate':
            Date= viewPhase[2].split('')
            Distributor(Date)
            break;

        case 'senhaRepeate':
            Date= viewPhase[3].split('')
            Distributor(Date)
            break;
        default:
            break;
    }
}


function Distributor(dados){
    for(let i=0; i < dados.length; i++){
        setTimeout(()=>{
            if(dados[i] == '_'){
                writeInform(`<p class="SpacePhase">${dados[i]}</p>`)
            }else{
                writeInform(`<p class="Informe">${dados[i]}</p>`)
            }
        }, i * 100)
    }
}
let arr= []

function writeInform(dado){
    const InformeError= document.querySelector('.Information');
    arr.push(dado)
    InformeError.innerHTML= arr.join('')
    let D= document.querySelectorAll('.SpacePhase')
    for(let i=0; i < D.length; i++){
        D[i].style.visibility= 'hidden'
    }
}