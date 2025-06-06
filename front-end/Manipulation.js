
//Funções para "burla" carregamento do htlm antes do js e capturar botões
const btnRotation= setInterval(() => {
    let btnRotationCall= document.querySelector('.button-direction')
    if (btnRotationCall) {
        btnRotationCall.addEventListener('click', () => {
        manipulationCadres();
      });
      clearInterval(btnRotation);
    }
  }, 100);

const btnEnswerOneTime= setInterval(()=>{
    let btnEnswerOne= document.querySelector('.button-answerOne')
    if (btnEnswerOne) {
        btnEnswerOne.addEventListener('click', () => {
       serverLogin('cadress')
      });
      clearInterval(btnEnswerOneTime);
    }
}, 100)

const btnEnswerTwoTime= setInterval(()=>{
    let btnEnswerTwo= document.querySelector('.button-answerTwo')
    if (btnEnswerTwo) {
        btnEnswerTwo.addEventListener('click', () => {
        serverLogin('Login')
        console.log('chamou')
      });
      clearInterval(btnEnswerTwoTime);
    }
}, 100)
  
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

//conexao com o banco de dados(envio dos dados do usuario para cadastro)
function serverData(valuesData){
    console.log(valuesData)
    $.ajax({
        url: 'http://localhost/back-end/cad.php',
        type: 'POST',
        contentType: "application/json",
        data: JSON.stringify(valuesData),
        xhrFields: {
            withCredentials: true
        },
        success: function(answer){
            if(answer== 'sucess'){
                    window.location.href = 'index.html'
            }else{
                console.log(answer)
            }
        },
        error: function (error){
            console.log(error);
        }
    })
}

//função para verificação de dados
function serverLogin(e){
    const InputDataValue= [document.querySelector('.inputForename').value, document.querySelector('.ADDemail').value,document.querySelector('.EnterEmail').value,
                           document.querySelector('.EnterPassword').value, document.querySelector('.createPassword').value, document.querySelector('.validPassword').value]
    const TextInfor= document.querySelectorAll('.Text-infor')


    const regexName = /^[A-Za-zÀ-ÿ\s]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^.{6,}$/;

    switch(e){
        case 'cadress':
            const Forename = regexName.test(InputDataValue[0].trim());
            const ADDemail = regexEmail.test(InputDataValue[1].trim());
            const createPassword = regexPassword.test(InputDataValue[4].trim());
            const validPassword = InputDataValue[4].trim() === InputDataValue[5].trim()
            const arr=[]

            if(Forename && ADDemail && createPassword && validPassword){//se os dados estiverem correto, transfira para o array
                arr.push(InputDataValue[0], InputDataValue[1], InputDataValue[4])
                serverData(arr)//transfira o array para a funcao de conexao ao servidor
               }else{//caso contrario, identifique quem esta errado
                    arr.push(ADDemail, createPassword, validPassword)

                    if(arr[0]==false){
                        TextInfor[0].style.display= 'flex'
                        console.log(InputDataValue[1])
                    }

                    if(arr[1]==false){
                        TextInfor[1].style.display= 'flex'
                    }

                    if(arr[2]==false){
                        TextInfor[2].style.display= 'flex'
                    }

                    console.log(arr)
                }
        break;
        case 'Login':
            const TestEmail= regexEmail.test(InputDataValue[2].trim())
            const TestPass= regexPassword.test(InputDataValue[3].trim())
            const arrlogin=[]
            if(TestEmail && TestPass){
                arrlogin.push(InputDataValue[0], InputDataValue[2], InputDataValue[3])
                serverData(arrlogin)
            }else{
                console.log(arrlogin)
            }
    }
}