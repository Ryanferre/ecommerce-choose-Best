function init(){
    const InputRequisition= document.querySelector('.Register')

   InputRequisition.addEventListener("button-acess", function(event){
        let InputList= document.querySelectorAll('input')

        for(let i=0; i <= InputList.length; i++){
            if(InputList[i].value == ''){
                event.preventDefault()
                InputList[i].style.boxShadow= '1px 1px 10px red'
            }
        }
   })
   console.log('error')
}


export {init}