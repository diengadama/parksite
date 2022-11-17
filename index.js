var form =document.getElementById('form')[0];
var nome=document.getElementById('nome');
var sobrenome =document.getElementById('sobrenome');
var email =document.getElementById('email');
var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var error = document.querySelector('.error');
form.adEdventListener(submit,()=>{

    e.preventDefault()
    checkInputs()
}
)
function checkInputs()
{
    var nomeValue =nomeValue.trim()
    var sobrenomeValue =sobrenomeValue.trim()
    var emailValue =emailValue.trim()
    if(nomeValue ===''){
        errorValidation(nome, 'preencha esse campo')
    }else{
        success.Validation(nome)
    }
    if(sobrenomeValue==='') {
    errorValidation(sobrenome, 'preencha esse campo')

    } else{
success.Validation(sobrenome)
    }
   
    if(emailValue ===''){
        errorValidation(email, 'preencha esse campo')
    }else
    {
        success.Validation(email)
    
}
function errorValidation(input, message){
    const formControl = input.parentElement;
    const small =formControl.querySelector('small')
    small.innerText= message
    formControl.className= 'form-control success'
}

function errorValidation(input, message){
  const formControl = input.parentElement;
  const small =formControl.querySelector('small')
  small.innerText= message
  formControl.className= 'form-control error'
}
}