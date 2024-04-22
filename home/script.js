// Função para validar o email
function validarEmail() {

    const validacao = /\w+@\w+\.\w+/;                           // regex para validar email
    let msgErro = document.getElementById('mensagem-erro')      // Mensagen de erro
    let emailInput = document.getElementById('input-email')
    let email = emailInput.value

    if (validacao.test(email)) {
        emailInput.style.border = '2px solid Green'             // caso o email esteja correto
        msgErro.style.display = 'none'                          // borda do input fica verde

        // Armazena o email no localstorage caso ele seja validado
        localStorage.setItem('email', email)

        // Limpa o campo, tira mensagem de erro e borda colorida
        document.getElementById('input-email').value = ''
        document.getElementById('input-email').style.border = 'none'
        document.getElementById('mensagem-erro').style.display = 'none'

        // Mensagem de confirmação de envio do email
        // Após armazenar, mensagem de confirmação aparece
        let mensagemConfirmacao = document.getElementById('confirmacao-subscribe')
        mensagemConfirmacao.style.display = 'block'

        // Função para tirar a mensagem de confirmação, dura 2 segundos
        setTimeout(function() {
            mensagemConfirmacao.style.display = 'none'
        }, 2000)
            
    } else {
        emailInput.style.border = '2px solid Red'               // caso o email esteja incorreto
        msgErro.style.display = 'block'                         // borda do fica vermelhor e retorna erro
    }
}