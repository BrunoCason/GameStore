// Formulario

// Regex Nomes e email
const validarEmail = /\w+@\w+\.\w+/;    // regex para validar email
const validarNome = /^[a-zA-Z]{3,15}$/  // regex para validar nomes

// Mensagens de erro
let msgErroFirstNameForm = document.getElementById('msg-erro-firstname')    // first name
let msgErroLastNameForm = document.getElementById('msg-erro-lastname')      // last name
let msgErroEmailForm = document.getElementById('msg-erro-email-form')       // email
let msgErroMessageForm = document.getElementById('msg-erro-message-form')   // message

// Validação First Name
function validarFirstName() {
    let firstNameForm = document.getElementById('input-first-name')
    let firstName = firstNameForm.value

    if(validarNome.test(firstName)) {
        firstNameForm.style.border = '2px solid Green';     // se seguir o padrão do regex
        msgErroFirstNameForm.style.display = 'none'         // borda fica verde
    }
    else {
        firstNameForm.style.border = '2px solid Red';       // se não seguir o padrão do regex
        msgErroFirstNameForm.style.display = 'block'        // borda fica vermelha e retorna erro
    }
}

// Validação Last Name
function validarLastName() {
    let lastNameForm = document.getElementById('input-last-name')
    let lastName = lastNameForm.value

    if(validarNome.test(lastName)) {
        lastNameForm.style.border = '2px solid Green';     // se seguir o padrão do regex
        msgErroLastNameForm.style.display = 'none'         // borda fica verde
    }   
    else {
        lastNameForm.style.border = '2px solid Red';       // se não seguir o padrão do regex
        msgErroLastNameForm.style.display = 'block'        // borda fica vermelha e retorna erro
    }
}

// Validação do email form
function ValidarEmailForm() {
    let emailForm = document.getElementById('input-email-form')
    let email = emailForm.value

    if(validarEmail.test(email)) {
        emailForm.style.border = '2px solid Green';    // caso o email esteja correto
        msgErroEmailForm.style.display = 'none'        //borda do input fica verde
    }
    else {
        emailForm.style.border = '2px solid Red';      // caso o email esteja incorreto
        msgErroEmailForm.style.display = 'block'       //borda fica vermelhor e retorna erro
    }
}

// Validação Message
function ValidarMessageForm() {
    let messageForm = document.getElementById('input-message-form')
    let message = messageForm.value

    if(message.length < 3) {
        messageForm.style.border = '2px solid Red';     // se a mensagem for menor que 3 caracteres
        msgErroMessageForm.style.display = 'block'      // borda fica vermelha e retorna erro
    }
    else {
        messageForm.style.border = '2px solid Green';   // se a mensagem foi maior que 3 caracteres
        msgErroMessageForm.style.display = 'none'       // borda fica verde
    }
}

// Validação do email Subscribe
let msgErroEmail = document.getElementById('mensagem-erro-email')

function validar() {
    let emailInput = document.getElementById('input-email');
    let email = emailInput.value;

    if (validarEmail.test(email)) {
        emailInput.style.border = '2px solid Green';    // caso o email esteja correto
        msgErroEmail.style.display = 'none'             // borda do input fica verde
    } else {
        emailInput.style.border = '2px solid Red';      // caso o email esteja incorreto
        msgErroEmail.style.display = 'block'            // borda do fica vermelhor e retorna erro
    }
}