// variables
const sendBtn= document.querySelector('#sendBtn'),
    email=document.querySelector('#email'),
    subject=document.querySelector('#subject'),
    message=document.querySelector('#message')


//eventListeners
eventListeners()
function eventListeners(){
    // app initialization
    document.addEventListener('DOMContentLoaded',appInit)
    // validating fields
    email.addEventListener('blur',validateField)
    subject.addEventListener('blur',validateField)
    message.addEventListener('blur',validateField)
}


//functions

function appInit(){
    // disabled send button on load
    sendBtn.disabled=true
}

// validating field of form
function validateField(){
    validateLength(this)

    //validate email field
    if(this.type=='email'){
        validateEmail(this)
    }
}

//validate length of fields
function validateLength(field){
    if(field.value.length > 0){
        field.style.borderBottomColor='green'
        field.classList.remove('error')
    }else{
        field.style.borderBottomColor='red'
        field.classList.add('error')
    }
}

//validate email fields contains @
function validateEmail(field){
    console.log(field.value)
    const emailText=field.value
    if(emailText.includes('@')){
        field.style.borderBottomColor='green'
        field.classList.remove('error')
    }else{
        field.style.borderBottomColor='red'
        field.classList.add('error')
    }
}