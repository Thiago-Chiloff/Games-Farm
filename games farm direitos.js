const termos = () => {
localStorage.setItem('termosAceitos', 'true');

if (localStorage.getItem('termosAceitos') === 'true') {
    console.log('Os termos foram aceitos.');
    window.location.href = 'games farm tela inicial.html'
} else {
    console.log('Os termos não foram aceitos.');
}

}