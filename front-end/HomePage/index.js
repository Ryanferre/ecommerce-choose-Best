import * as FileRequisition from '../conect.js';

FileRequisition.sellProduct()

let btnRequestsearch= document.querySelector('.Busca');
const btnSearchMobile= document.querySelector('.buttonLupa');
const btnRegisterMobile= document.querySelector('.buttonRegister');
const boxLoginAndSingUp= document.querySelector('.Login')
const BtnForForm= [document.querySelector('.SignButton'), document.querySelector('.LoginButton')]


//faz uma requisição para montar uma pagina de produto solicitado na pesquisa
btnRequestsearch.addEventListener("click", (evt)=>{
    FileRequisition.RequesitionProduct()
})

/*chamada para uma requisição de uma pagina de Login
no modo mobile*/
setInterval(()=>{
    if(window.btnSearchMobile){
        btnSearchMobile.addEventListener('click', (evt)=>{
            FileRequisition.askPageForMobile()
        })
    }
})

//criar uma pagina de registro
setInterval(()=>{
    if(window.btnRegisterMobile){
        btnRegisterMobile.addEventListener("click", (evt)=>{
            FileRequisition.askPageform()
        })
    }
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

if (BtnForForm.length > 0) {
        BtnForForm[0].addEventListener('click', () => {
        FileRequisition.askPageform();
    });
} else {
    console.error('Botão não encontrado!');
}
//botão de login
BtnForForm[0].addEventListener('click', (evt)=>{
    FileRequisition.askPageform()
})
BtnForForm[1].addEventListener('click', (evt)=>{
    FileRequisition.askPageform()
})

//fução função para verificar se exsite alguma seção no php
function solving(){
    let buttonRegister= document.querySelector('.Box-Unit')
    const boxUnit= document.querySelector('.Unit')
    $.ajax({
        url: 'http://localhost/back-end/status.php',
        type: 'GET',
        dataType: 'json',
        xhrFields: {
            withCredentials: 'include'
        },
        success: function (printanswer){

            console.log(printanswer)//esse e o console que mostrei
            if(printanswer.SessionRes){
                boxLoginAndSingUp.innerHTML= "<div><a href='/front-end/UserData/User.html'><img width='50px' src='http://localhost/back-end/icones/person.png'/></a></div>"
                boxLoginAndSingUp.style.width= 'max-content'
                boxUnit.style.justifyContent= 'space-between'
                buttonRegister.style.width= '23vmax'
                buttonRegister.style.paddingRight= '2%'
                buttonRegister.style.gap= '3%'

            }else{
                console.warn(printanswer)
            }
        },
        error: function(status, xhr, error){
            console.log(xhr.responseText)
        }
    })
}
solving()
