const enviarMensagem = () => {
    const inputTexto = document.getElementsByClassName('message-input')[0];
    const mensagem = inputTexto.value.trim();

    if (mensagem !== '') {
        const mensagemElemento = document.createElement('h3');
        mensagemElemento.textContent = mensagem;

        mensagemElemento.classList.add('mensagem-recebida');
        const betMain = document.querySelector('.bet-main');
        
        if (betMain.firstChild) {
            betMain.insertBefore(mensagemElemento, betMain.firstChild);
        } else {
            betMain.appendChild(mensagemElemento);
        }

        inputTexto.value = '';
    }
}
