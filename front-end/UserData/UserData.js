const btnDelete= document.querySelector('.btn-exit')

function GetInforUser(){
    let arrText= [document.querySelector('.NameUser'), document.querySelector('.EmailUser'), document.querySelector('.PasswordUser')]

    $.ajax({
        url: 'http://localhost/back-end/cad.php',
        type: 'GET',
        contentType: 'application/json',
        xhrFields: {
            withCredentials: true
        },
        success: function(answer){
            arrText[0].textContent= answer[0].nome
            arrText[1].textContent= answer[0].email
            arrText[2].textContent= answer[0].senha

            console.log(answer)
        },
        error: function(xhr, status, error){
            console.log(error)
        }
    })
}
GetInforUser()



function DeletAcess(){

    $.ajax({
        url: 'http://localhost/back-end/status.php',
        type: 'POST',
        data: {action: 'delete'},
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        success: function (printanswer){

            console.log(printanswer)
            document.cookie = "PHPSESSID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "Startuser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            if(printanswer){
                setTimeout(()=>{
                   window.location.href = "http://127.0.0.1:5500/front-end/HomePage/index.html"
                }, 1000)
            }
        },
        error: function(status, xhr, error){
            console.log(status)
        }
    })
}

btnDelete.addEventListener("click", (evt)=>{
    DeletAcess()
})