const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
  event.preventDefault();
  
  const modelo = document.getElementById('modelo').value;
  const qtde = document.getElementById('qtde').value;

  if (modelo == 1) {
    lucro = ((70 - 43) * qtde);
    alert('Seu lucro esta sendo de: R$' + lucro)
  }

  else if(modelo == 2) {
    lucro = ((40 - 24) * qtde);
    alert('Seu lucro esta sendo de: R$' + lucro)
  }

  else if(modelo == 3) {
    lucro = ((90 - 75) * qtde);
    alert('Seu lucro esta sendo de: R$' + lucro)
  }

  else if(modelo == 4) {
    lucro = ((70 - 43) * qtde);
    alert('Seu lucro esta sendo de: R$' + lucro)
  }

  else {
    alert('Modelo nao cadastrado amigao, escolhe o certo ai')
  }



}
