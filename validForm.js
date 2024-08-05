import {ToFillIn} from './Processmanipulator.js'

let Form= document.querySelector('.Register')
let Rf= document.querySelectorAll('input')
for(let i = 0; i < Rf.length; i++){
    Rf[i].addEventListener('click', (event)=>{
        let ft= event.target
        structPhase(ft.className)
    })
}

Form.addEventListener("submit", function (event){
    event.preventDefault()
    let InputList= document.querySelectorAll('input')
    const TextAlert= document.querySelector('.Atetion')
        ToFillIn(InputList, TextAlert)
})


let Space= []
function structPhase(Phase){
    const viewPhase = ['Email_invalido!', 'Senha_muito_curta!', 'Repita_a_senha_com_os_mesmos_caractere'];

    console.log(Phase)
    switch (Phase) {
        case 'dt':
            const Date= viewPhase[1].split('')
            for(let i=0; i < Date.length; i++){
                setTimeout(()=>{
                    if(Date[i] == '_'){
                        writeInform(`<p class="SpacePhase${i}">${Date[i]}</p>`)
                        Space.push(document.querySelector(`.SpacePhase${i}`))
                    }else{
                        writeInform(`<p class="Informe">${Date[i]}</p>`)
                    }
                }, i * 100)
            }
            break;
    
        default:
            break;
    }
}

let arr= []

function writeInform(dado){
    const InformeError= document.querySelector('.Information');
    arr.push(dado)
    InformeError.innerHTML= arr.join('')
    for(let i =0; i < Space.length; i++){
        console.log(Space.style)
    }

}