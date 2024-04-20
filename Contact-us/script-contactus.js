// Função para validar o formulario
function validarForm() {
    const validarNome = /^[a-zA-Z]{3,15}$/;  // regex para validar nomes
    const validarEmail = /\w+@\w+\.\w+/;    // regex para validar email

    function validarCampo(inputForm, regex, mensagemErro) {
        let valorInput = inputForm.value;
        if(regex.test(valorInput)) {
            inputForm.style.border = '2px solid Green';     // se seguir o padrão do regex
            mensagemErro.style.display = 'none';            // borda fica verde e não retorna erro
            return valorInput;
        } 
        else {
            inputForm.style.border = '2px solid Red';       // se não seguir o padrão do regex
            mensagemErro.style.display = 'block';           // borda fica vermelha e retorna erro
            return null;
        }
    }

    // Validar first name
    // Chama a função validarCampo(), inserindo os parametros necessarios
    let firstName = validarCampo(
        document.getElementById('input-first-name'),
        validarNome,
        document.getElementById('msg-erro-firstname')
    );

    // Validar last name
    // Chama a função validarCampo(), inserindo os parametros necessarios
    let lastName = validarCampo(
        document.getElementById('input-last-name'),
        validarNome,
        document.getElementById('msg-erro-lastname')
    );

    // Validar email
    // Chama a função validarCampo(), inserindo os parametros necessarios
    let email = validarCampo(
        document.getElementById('input-email-form'),
        validarEmail,
        document.getElementById('msg-erro-email-form')
    );

    // Validar message
    let messageForm = document.getElementById('input-message-form');
    let message = messageForm.value;

    if(message.length < 3) {
        messageForm.style.border = '2px solid Red';  // se a mensagem for menor que 3 caracteres
        document.getElementById('msg-erro-message-form').style.display = 'block'  // borda fica vermelha e retorna erro
    } else {
        messageForm.style.border = '2px solid Green';  // se a mensagem foi maior que 3 caracteres
        document.getElementById('msg-erro-message-form').style.display = 'none'  // borda fica verde e não retorna erro
    }

    // Validação para armazenar no local storage
    // se firstName, lastName, email == true e message >= 3 
    // armazena no local storage e limpa o formulario
    if (firstName && lastName && email && message.length >= 3) {
        // Armazena no local storage
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('email', email);
        localStorage.setItem('message', message);

        // Limpa o formulario
        document.getElementById('input-first-name').value = '';
        document.getElementById('input-last-name').value = '';
        document.getElementById('input-email-form').value = '';
        document.getElementById('input-message-form').value = '';

        // Remover a cor do input
        document.getElementById('input-first-name').style.border = 'none';
        document.getElementById('input-last-name').style.border = 'none';
        document.getElementById('input-email-form').style.border = 'none';
        document.getElementById('input-message-form').style.border = 'none';

        // Remove a mensagem de erro
        document.getElementById('msg-erro-firstname').style.display = 'none';
        document.getElementById('msg-erro-lastname').style.display = 'none';
        document.getElementById('msg-erro-email-form').style.display = 'none';
        document.getElementById('msg-erro-message-form').style.display = 'none';

        // Pegando o first name para inserir na mensagem de confirmação
        let nomeConfirmacao = document.getElementById('nome-confirmacao')
        nomeConfirmacao.innerHTML = firstName

        // Mensagem de confirmação de envio do form
        // Após armazenar, mensagem de confirmação aparece
        let mensagemConfirmacao = document.getElementById('mensagem-confirmacao-form');
        mensagemConfirmacao.style.display = 'block'

        // Função para tirar a mensagem de confirmação, dura 3 segundos
        setTimeout(function() {
            mensagemConfirmacao.style.display = 'none'
        }, 3000)
    }
}

function validarEmailSub() {

    // Validação email
    const validarEmail = /\w+@\w+\.\w+/;                        // regex para validar email
    let msgErroEmail = document.getElementById('mensagem-erro-email')      // Mensagem de erro
    let emailInput = document.getElementById('input-email');
    let email = emailInput.value;

    if (validarEmail.test(email)) {
        emailInput.style.border = '2px solid Green';            // caso o email esteja correto
        msgErroEmail.style.display = 'none'                          // borda do input fica verde

        // Armazena o email no localstorage caso ele seja validado
        localStorage.setItem('emailSub', email);
        
        // Limpa o campo, tira mensagem de erro e borda colorida
        document.getElementById('input-email').value = '';
        document.getElementById('input-email').style.border = 'none';
        document.getElementById('mensagem-erro-email').style.display = 'none';

        // Mensagem de confirmação de envio do email
        // Após armazenar, mensagem de confirmação aparece
        let mensagemConfirmacao = document.getElementById('confirmacao-subscribe');
        mensagemConfirmacao.style.display = 'block'

        // Função para tirar a mensagem de confirmação, dura 2 segundos
        setTimeout(function() {
            mensagemConfirmacao.style.display = 'none'
        }, 2000)
    } else {
        emailInput.style.border = '2px solid Red';              // caso o email esteja incorreto
        msgErroEmail.style.display = 'block'                         // borda do fica vermelhor e retorna erro
    }
}



// // Jeito anterior
// // Função para validação do form
// function validarForm() {

//     const validarEmail = /\w+@\w+\.\w+/;    // regex para validar email
//     const validarNome = /^[a-zA-Z]{3,15}$/  // regex para validar nomes

//     // Mensagens de erro
//     let msgErroFirstNameForm = document.getElementById('msg-erro-firstname')    // first name
//     let msgErroLastNameForm = document.getElementById('msg-erro-lastname')      // last name
//     let msgErroEmailForm = document.getElementById('msg-erro-email-form')       // email
//     let msgErroMessageForm = document.getElementById('msg-erro-message-form')   // message

//     // Validação do First Name
//     let firstNameForm = document.getElementById('input-first-name')
//     let firstName = firstNameForm.value

//     if(validarNome.test(firstName)) {
//         firstNameForm.style.border = '2px solid Green';     // se seguir o padrão do regex
//         msgErroFirstNameForm.style.display = 'none'         // borda fica verde
//         localStorage.setItem('firstName', firstName);
//     }
//     else {
//         firstNameForm.style.border = '2px solid Red';       // se não seguir o padrão do regex
//         msgErroFirstNameForm.style.display = 'block'        // borda fica vermelha e retorna erro
//     }

//     // Validação Last Name
//     let lastNameForm = document.getElementById('input-last-name')
//     let lastName = lastNameForm.value

//     if(validarNome.test(lastName)) {
//         lastNameForm.style.border = '2px solid Green';     // se seguir o padrão do regex
//         msgErroLastNameForm.style.display = 'none'         // borda fica verde
//         localStorage.setItem('lastName', lastName);
//     }   
//     else {
//         lastNameForm.style.border = '2px solid Red';       // se não seguir o padrão do regex
//         msgErroLastNameForm.style.display = 'block'        // borda fica vermelha e retorna erro
//     }

//     //Validação do email form
//     let emailForm = document.getElementById('input-email-form')
//     let email = emailForm.value

//     if(validarEmail.test(email)) {
//         emailForm.style.border = '2px solid Green';    // caso o email esteja correto
//         msgErroEmailForm.style.display = 'none'        //borda do input fica verde
//         localStorage.setItem('email', email);
//     }
//     else {
//         emailForm.style.border = '2px solid Red';      // caso o email esteja incorreto
//         msgErroEmailForm.style.display = 'block'       //borda fica vermelhor e retorna erro
//     }

//     // Validação Message

//     let messageForm = document.getElementById('input-message-form')
//     let message = messageForm.value

//     if(message.length < 3) {
//         messageForm.style.border = '2px solid Red';     // se a mensagem for menor que 3 caracteres
//         msgErroMessageForm.style.display = 'block'      // borda fica vermelha e retorna erro
//     }
//     else {
//         messageForm.style.border = '2px solid Green';   // se a mensagem foi maior que 3 caracteres
//         msgErroMessageForm.style.display = 'none'       // borda fica verde
//         localStorage.setItem('message', message);
//     }
// }