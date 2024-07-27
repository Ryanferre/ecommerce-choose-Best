import * as FileRequisition from './Oxconect.js';
import * as FileManipulator from './Processmanipulator.js';

FileRequisition.sellProduct()

let btnRequestsearch= document.querySelector('.Busca');
const btnSearchMobile= document.querySelector('.buttonLupa');
const btnRegisterMobile= document.querySelector('.buttonRegister');
const BtnForForm= [document.querySelector('.SignButton'), document.querySelector('.LoginButton')]


//faz uma requisição para montar uma pagina de produtos
btnRequestsearch.addEventListener("click", (evt)=>{
    FileRequisition.RequesitionProduct()
})

/*chamada para uma requisição de uma pagina de Login
no modo mobile*/

btnSearchMobile.addEventListener('click', (evt)=>{
    FileRequisition.askPageForMobile()
})
//criar uma pagina de registro
btnRegisterMobile.addEventListener("click", (evt)=>{
    FileRequisition.askPageform()
})

/*pesquisa de produdo apartir da barra da pagina de
pesquisa do  modo mobile e verificação se o botão
existe no escopo global*/
setInterval(()=>{
    if(window.BtnInport){
        window.BtnInport.addEventListener('click', (evt)=>{
            FileRequisition.RequesitionProduct()
        })
    }
}, 2000)

//botão de login
BtnForForm[0].addEventListener('click', (evt)=>{
    FileRequisition.askPageform()
})