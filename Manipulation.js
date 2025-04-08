function Movment(){
    let BoxSearch= document.querySelector('.Pesquisa')
    let BoxAconlt= document.querySelector('.Login')
    let BoxUnit= document.querySelector('.Box-Unit')
    if(BoxUnit.style.top!= '80%'){
        BoxUnit.style.top= '80%'
        BoxSearch.style.marginLeft= '0%';
        BoxAconlt.style.marginLeft= '0%'
    }else{
        BoxUnit.style.top= ''
        BoxAconlt.style.marginLeft= ''
        BoxSearch.style.marginLeft= ''
    }
}
console.log('arquivo carregado')
//troca de forma de cadastro
function manipulationCadres() {
    const boxcontainer = document.querySelector('.Register');
    const boxform = document.querySelector('.form');

    if (boxform.style.left !== '-100%' && boxform.style.gap !== '8%') {
        boxcontainer.style.left= '-100%'
        boxform.style.marginLeft = '-80%';
        timeExecut(boxform);
    }

    //retorno dos elementos ja modificados
    setTimeout(()=>{
       if(boxform.style.marginLeft === '-80%'){
          boxcontainer.style.left= ''
          boxform.style.marginLeft = ''
          timeExecut(boxform)
       }
    }, 2000)
    ReplacementToElement()
}

// Animação: Movimento de rotação
function timeExecut(Element) {
    //engrenagens
    let rotategear = [document.querySelector('.imag-gear1'), document.querySelector('.imag-gear2'), document.querySelector('.imag-derection')];
    const boxafter = document.querySelector('.box-after');
    let rotation = 180;
    
            if(Element.style.marginLeft === '-80%'){
                rotategear[0].style.visibility = 'visible';
                rotategear[1].style.visibility = 'visible';
                boxafter.style.visibility = 'visible';

              for (let i = 0; i <= rotation; i++) {
                rotategear[0].style.transform = `rotate(${i}deg)`;
                rotategear[1].style.transform = `rotate(-${i}deg)`;
                rotategear[2].style.transform = `rotate(${i}deg)`;
              }
            }else{
                rotategear[0].style.transform = '';
                rotategear[1].style.transform = '';
                rotategear[2].style.transform = '';
                rotategear[0].style.visibility = '';
                rotategear[1].style.visibility = '';
                boxafter.style.visibility = '';
            }
}

//modificar os elementos da caixa de cadastro
function ReplacementToElement(){
   let ElementForm= document.querySelector('.form');
   let ElementLogin= document.querySelector('.LoginIn');
   let btnRegister= [document.querySelector('.button-answerOne'), document.querySelector('.button-answerTwo')]

   if(ElementForm.style.display != 'none'){
        setTimeout(()=>{
        ElementForm.style.display= 'none'
        ElementLogin.style.display= 'flex'
        btnRegister[0].style.display= 'none'
        btnRegister[1].style.display= 'flex'
        changePhrase('none')
        }, 1000)
   }else{
        setTimeout(()=>{
            ElementForm.style.display= 'flex'
            ElementLogin.style.display= 'none'
            btnRegister[0].style.display= 'flex'
            btnRegister[1].style.display= 'none'
        }, 1000)

    changePhrase('flex')
   }
}

//mudar elementos do botão, h1 e tipo de registro
function changePhrase(condition){
    let Title= document.querySelector('.Title-wellcome');
    let markApresentation= document.querySelector('.button-acess')
    let markDirection= document.querySelector('#Text-direct')

    if(condition.style.display !== 'none'){
         Title.textContent = 'Wellcome back!'
        markApresentation.textContent =  'sing in'
        markDirection.textContent = 'sing in'
    }else{
        Title.innerHTML= 'Wellcome!'
        markApresentation.textContent = 'sing up'
        markDirection.textContent = 'sing up'
    }
}

//conexao com o banco de dados(envio dos dados do ususrio para cadastro)

function serverData(valuesData){

    console.log(valuesData)
    $.ajax({
        url: 'http://localhost/cad.php',
        type: 'POST',
        contentType: "application/json",
        data: JSON.stringify(valuesData),
        success: function(answer){
            if(answer== 'sucess'){
                localStorage.setItem('menssagem', 'enviado com sucesso')
                window.location.href = 'index.html'
            }
        },
        error: function (status, xhr, error){
            console.log(error);
        }
    })
}

//função para verificação de dados
function serverLogin(e){
    const InputDataValue= [document.querySelector('.inputForename').value, document.querySelector('.ADDemail').value,document.querySelector('.EnterEmail').value,
                           document.querySelector('.EnterPassword').value, document.querySelector('.createPassword').value, document.querySelector('.validPassword').value]
    const TextInfor= document.querySelectorAll('.Text-infor')
    let btnCall= e.className


    const regexName = /^[A-Za-zÀ-ÿ\s]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^.{6,}$/;

    //validadções de imputs
    //const EnterEmail= regexValues.test(InputDataValue[2].trim())
    //const EnterPassword= regexValues.test(InputDataValue[3].trim())

    switch(btnCall){
        case 'button-answerOne':
            const Forename = regexName.test(InputDataValue[0].trim());
            const ADDemail = regexEmail.test(InputDataValue[1].trim());
            const createPassword = regexPassword.test(InputDataValue[4].trim());
            const validPassword = InputDataValue[4].trim() === InputDataValue[5].trim()
            const arr=[]

            if(Forename && ADDemail && createPassword && validPassword){
                arr.push(InputDataValue[0], InputDataValue[1], InputDataValue[4])
                serverData(arr)
               }else{
                    if(!Forename){
                        TextInfor[0].style.display= 'flex'
                    }
                    if(!ADDemail){
                        TextInfor[1].style.display= 'flex'
                    }
                    if(!createPassword){
                        TextInfor[2].style.display= 'flex'
                    }
                    if(!validPassword){
                        TextInfor[3].style.display= 'flex'
                    }
                }
        default:
    }
}