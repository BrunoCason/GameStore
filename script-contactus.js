// Regex Nomes e email
const validarEmail = /\w+@\w+\.\w+/;    // regex para validar email
const validarNome = /^[a-zA-Z]{3,15}$/

// Mensagens de erro
let msgErroEmailForm = document.getElementById('msg-erro-email-form')
let msgErroMessageForm = document.getElementById('msg-erro-message-form')
let msgErroFirstNameForm = document.getElementById('msg-erro-firstname')
let msgErroLastNameForm = document.getElementById('msg-erro-lastname')

// Validação First Name
function validarFirstName() {
    let firstNameForm = document.getElementById('input-first-name')
    let firstName = firstNameForm.value

    if(validarNome.test(firstName)) {
        firstNameForm.style.border = '2px solid Green';
        msgErroFirstNameForm.style.display = 'none'
    }
    else {
        firstNameForm.style.border = '2px solid Red'; 
        msgErroFirstNameForm.style.display = 'block'
    }
}

// Validação Last Name
function validarLastName() {
    let lastNameForm = document.getElementById('input-last-name')
    let lastName = lastNameForm.value

    if(validarNome.test(lastName)) {
        lastNameForm.style.border = '2px solid Green';
        msgErroLastNameForm.style.display = 'none'
    }
    else {
        lastNameForm.style.border = '2px solid Red'; 
        msgErroLastNameForm.style.display = 'block'
    }
}

// Validação do email form
function ValidarEmailForm() {
    let emailForm = document.getElementById('input-email-form')
    let email = emailForm.value

    if(validarEmail.test(email)) {
        emailForm.style.border = '2px solid Green';    // caso o email esteja correto, borda do input fica verde
        msgErroEmailForm.style.display = 'none'
    }
    else {
        emailForm.style.border = '2px solid Red'; 
        msgErroEmailForm.style.display = 'block'
    }
}


// Validação Message
function ValidarMessageForm() {
    let messageForm = document.getElementById('input-message-form')
    let message = messageForm.value

    if(message.length < 3) {
        messageForm.style.border = '2px solid Red'; 
        msgErroMessageForm.style.display = 'block'
    }
    else {
        messageForm.style.border = '2px solid Green';    // caso o email esteja correto, borda do input fica verde
        msgErroMessageForm.style.display = 'none'
    }
}


// Validação do email
let msgErroEmail = document.getElementById('mensagem-erro-email')

function validar() {
    let emailInput = document.getElementById('input-email');
    let email = emailInput.value;

    if (validarEmail.test(email)) {
        emailInput.style.border = '2px solid Green';    // caso o email esteja correto, borda do input fica verde
        msgErroEmail.style.display = 'none'
    } else {
        emailInput.style.border = '2px solid Red';      // caso o email esteja incorreto, borda do input fica vermelho
        msgErroEmail.style.display = 'block'                 // e aparece a mensagem de erro
    }
}