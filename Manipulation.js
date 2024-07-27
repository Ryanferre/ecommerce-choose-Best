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
   let ElementForm= document.querySelectorAll('label');
   let cont= [];

   if(ElementForm[0].style.display !== 'none'){
        setTimeout(()=>{
            for(let i=0; i < ElementForm.length; i++){
                if(ElementForm[i]!== ElementForm[2] && ElementForm[i]!== ElementForm[3]){
                    ElementForm[i].style.display = 'none'
                    cont.push(ElementForm[i])
                }else{
                    ElementForm[i].style.display= 'flex'
                }
            }
        adaptContainer(cont)
        changePhrase(cont[0])
        console.log(cont)
        }, 1000)
   }else{

        setTimeout(()=>{
            for(let i=0; i < ElementForm.length; i++){
                ElementForm[i].style.display = ''
                cont.push(ElementForm[i])
            }
        adaptContainer(cont)
        }, 1000)

    changePhrase(cont[0])
    console.log(cont)
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

//adaptar os elementos de acordo com a quantidade de elementos
function adaptContainer(Element){
    const BoxRegister= document.querySelector('.Register')
    const BoxCenter= document.querySelector('.form')
    let SizeElement;

    for(let i=0; i <= Element.length; i++){
        SizeElement= i
    }

    if(SizeElement == 4){
        BoxRegister.style.gap= '.8vmax'
        BoxCenter.style.gap= '1.3vmax'
        BoxCenter.style.marginBottom= '3.5%'
        BoxCenter.style.height= 'max-content'
    }else{
        BoxRegister.style.gap= ''
        BoxCenter.style.gap= ''
        BoxCenter.style.marginBottom= ''
        BoxCenter.style.height= ''
    }
}