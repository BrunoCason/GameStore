// Validação do email Subscribe

const validarEmail = /\w+@\w+\.\w+/;    // regex para validar email
let msgErro = document.getElementById('mensagem-erro') // Mensagen de erro

function validar() {
    let emailInput = document.getElementById('input-email');
    let email = emailInput.value;

    if (validarEmail.test(email)) {
        emailInput.style.border = '2px solid Green';    // caso o email esteja correto
        msgErro.style.display = 'none'                  // borda do input fica verde
        
    } else {
        emailInput.style.border = '2px solid Red';      // caso o email esteja incorreto
        msgErro.style.display = 'block'                 // borda do fica vermelhor e retorna erro
    }
}