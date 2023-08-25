const btnNovoCartoes = document.querySelector('#btn-novo-cartoes');
const btnFinalizaCartoes = document.querySelector('#btn-finaliza-cartoes');

btnNovoCartoes.addEventListener('click', () => {
  const nome = prompt('Informe o nome do cliente:');
  
  fetch(`http://localhost:3001/inicia_atendimento?cliente=${nome}&area=cartoes`, {method: 'POST'})
    .then(res => {
        location.reload();
    });
});

btnFinalizaCartoes.addEventListener('click', () => {
    const nome = prompt('Informe o nome do cliente:');
    
    fetch(`http://localhost:3001/finaliza_atendimento?cliente=${nome}&area=cartoes`, {method: 'POST'})
      .then(res => {
          location.reload();
    });
});

const btnNovoEmprestimos = document.querySelector('#btn-novo-emprestimos');
const btnFinalizaEmprestimos = document.querySelector('#btn-finaliza-emprestimos');

btnNovoEmprestimos.addEventListener('click', () => {
  const nome = prompt('Informe o nome do cliente:');
  
  fetch(`http://localhost:3001/inicia_atendimento?cliente=${nome}&area=emprestimos`, {method: 'POST'})
    .then(res => {
        location.reload();
    });
});

btnFinalizaEmprestimos.addEventListener('click', () => {
    const nome = prompt('Informe o nome do cliente:');
    
    fetch(`http://localhost:3001/finaliza_atendimento?cliente=${nome}&area=emprestimos`, {method: 'POST'})
      .then(res => {
          location.reload();
    });
});



const btnNovoOutros = document.querySelector('#btn-novo-outros');
const btnFinalizaOutros = document.querySelector('#btn-finaliza-outros');

btnNovoOutros.addEventListener('click', () => {
  const nome = prompt('Informe o nome do cliente:');
  
  fetch(`http://localhost:3001/inicia_atendimento?cliente=${nome}&area=outros`, {method: 'POST'})
    .then(res => {
        location.reload();
    });
});

btnFinalizaOutros.addEventListener('click', () => {
    const nome = prompt('Informe o nome do cliente:');
    
    fetch(`http://localhost:3001/finaliza_atendimento?cliente=${nome}&area=outros`, {method: 'POST'})
      .then(res => {
          location.reload();
    });
});

