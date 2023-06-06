const numberToFind = Math.floor(Math.random() * 100);

const verifyNumber = () => {
  var userNumber = parseInt(document.getElementById('bet').value);
  
  if (userNumber === numberToFind) {
    alert('Parabéns! Número correto.');
    window.location.href ='games farm tela inicial.html'
  } else {
    alert('Número errado.');
    window.location.href='games farm tela inicial.html'
  }
}




