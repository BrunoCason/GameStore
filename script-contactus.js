// Validação do email

const validarEmail = /\w+@\w+\.\w+/;    // regex para validar email
let msgErro = document.getElementById('mensagem-erro')

function validar() {
    let emailInput = document.getElementById('input-email');
    let email = emailInput.value;

    if (validarEmail.test(email)) {
        emailInput.style.border = '2px solid Green';    // caso o email esteja correto, borda do input fica verde
        msgErro.style.display = 'none'
        setTimeout
    } else {
        emailInput.style.border = '2px solid Red';      // caso o email esteja incorreto, borda do input fica vermelho
        msgErro.style.display = 'block'                 // e aparece a mensagem de erro
    }
}