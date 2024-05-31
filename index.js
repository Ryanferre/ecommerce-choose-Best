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
            description: 'Mouse ergonomico wireless',
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

function sendADD(){
    let container= localStorage.getItem('stoque');
    let searchProduct= document.querySelector(".TextProdu").value;

    class unitQuestion{
        constructor(question1, question2){
            this.question1= question1;
            this.question2= question2;
        }
    }

    let reciveAnswer= new unitQuestion(container, searchProduct)

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


function ChangeStyle(PhatFile){
    const currentFile= document.querySelector('#currentFile');

    const newElement= document.createElement('link');

          newElement.rel= 'stylesheet';
          newElement.href= PhatFile;

   currentFile.parentNode.replaceChild(newElement, currentFile)
}


function RequesitionSearch(){
    $.ajax({
        url: 'search.php',
        type: 'POST',
        data: {action: 'RequisitionConstruct'},
        success: function (printanswer){
            $('body').html(printanswer)
        },
        error: function(status, xhr, error){
            console.log(error)
        }
    })
}