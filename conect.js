function sellProduct(){
    const obj= [
        [
            {
                id: 1,
                mark: 'Apple',
                producte: 'Airpods pro 2',
                description: 'wireless headphones',
                txt: 'price',
                price: '$519.99',
                imag: 'imagens/Airpods pro 2.webp'
            }
        ],
       [
        {
            id: 2,
            mark: 'Cherry',
            producte: 'cherry-mouse',
            description: 'Mouse ergonomico',
            txt: 'price',
            price: '$99.00',
            imag: 'imagens/cherry-mouse.png'
        }
       ],
        [
            {
                id: 3,
                mark: 'hp',
                producte: 'teclado ergonomico',
                description: 'Teclado ergonomico wireless',
                txt: 'price',
                price: '$150.00',
                imag: 'imagens/Teclado ergonomico.png'
            }
        ],
        [
            {
                id: 4,
                mark: 'Plate',
                producte: 'Mousepad',
                description: 'Mousepad construido sobre',
                txt: 'price',
                price: '$209.00',
                imag: 'imagens/aluminum-pad(1).png'
            }
        ]
    ]

    localStorage.setItem('stoque', JSON.stringify(obj));
}

function RequesitionProduct(){
    let container= localStorage.getItem('stoque');

    let valuedata= document.querySelector('.TextProdu').value

    class unitQuestion{
        constructor(question1, question2){
            this.question1= question1;
            this.question2= question2;
        }
    }

    let reciveAnswer= new unitQuestion(container, valuedata)

    $.ajax({
        url: 'search.php',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(reciveAnswer),
        success: function(answer){
            $('body').html(answer)
            ChangeStyle('search.css')
        },
        error: function(xhr, status, error){
            console.log(error)
        }
    })
}

/*mudar o arquivo css*/
function ChangeStyle(PhatFile){
    const currentFile= document.querySelector('#currentFile');

    const newElement= document.createElement('link');

          newElement.rel= 'stylesheet';
          newElement.href= PhatFile;

   currentFile.parentNode.replaceChild(newElement, currentFile)
}

//mudar o arquivo js

function RepleceJs(getFile){
    const Filejs= document.querySelector('#JsFile')

    const newFilejs= document.createElement('script')

          newFilejs.src= getFile

    Filejs.parentNode.replaceChild(newFilejs, Filejs)
}
/*essa função funciona somente em mobile. ela faz uma requisição ao php para
retirar o conteudo e montar o input de pesquisa junto com a barra de navegação.
ela é chamada atravez do botão apresentado no menu-mobile(botão de pesquisa) */

function askPageForMobile(){
    let Body;
    $.ajax({
        url: 'search.php',
        type: 'POST',
        data: {action: 'RequisitionConstruct'},
        success: function (printanswer){
            $('body').html(printanswer)
            let Capbtn= document.querySelector('.elementestwo-mobile')
            window.BtnInport= Capbtn;
            Body= document.querySelectorAll('body')
            Body[0].style.height= '26vmax'
        },
        error: function(status, xhr, error){
            console.log(error)
        }
    })
}

//função para fazer uma requisição de uma pagina de cadastro
function askPageform(){
    $.ajax({
        url: 'Form.php',
        type: 'POST',
        data: {action: 'Module-body-form'},
        success: function(answer){
            $('body').html(answer);
            ChangeStyle('form.css');
            RepleceJs('Processmanipulator.js')
        },
        error: function (status, xhr, error){
            console.log(error);
        }
    })
}

export {sellProduct, RequesitionProduct, askPageform, askPageForMobile}