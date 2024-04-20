// Função para validar o email
function validarEmail() {

    const validacao = /\w+@\w+\.\w+/;                        // regex para validar email
    let msgErro = document.getElementById('mensagem-erro')      // Mensagen de erro
    let emailInput = document.getElementById('input-email');
    let email = emailInput.value;

    if (validacao.test(email)) {
        emailInput.style.border = '2px solid Green';            // caso o email esteja correto
        msgErro.style.display = 'none'                          // borda do input fica verde

        // Armazena o email no localstorage caso ele seja validado
        localStorage.setItem('email', email);
            
    } else {
        emailInput.style.border = '2px solid Red';              // caso o email esteja incorreto
        msgErro.style.display = 'block'                         // borda do fica vermelhor e retorna erro
    }
}
