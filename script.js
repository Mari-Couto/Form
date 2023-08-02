const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const senha = document.getElementById('senha');
const senhaConf = document.getElementById('senhaConfirm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  validation();
});

function validation() {
  let hasErrors = false;

  const userValue = username.value;
  const emailValue = email.value;
  const telValue = tel.value;
  const senhaValue = senha.value;
  const senhaConfValue = senhaConf.value;

  // username
  if (userValue === '') {
    showError(username);
    hasErrors = true;
  } else {
    showSuccess(username);
  }

  // email
  if (emailValue === '') {
    showError(email);
    hasErrors = true;
  } else {
    showSuccess(email);
  }

  // telefone
  if (telValue === '') {
    showError(tel);
    hasErrors = true;
  } else {
    showSuccess(tel);
  }

  // senha
  if (senhaValue === '') {
    showError(senha);
    hasErrors = true;
  } else {
    showSuccess(senha);
  }

  // senha confirmação
  if (senhaConfValue === '') {
    showError(senhaConf);
    hasErrors = true;
  } else {
    showSuccess(senhaConf);
  }

  // Impedir o envio do formulário se houver erros
  if (hasErrors) {
    return;
  }

  // Enviar o formulário se não houver erros
  form.submit();
}

// Função para tratar o estado de erro do campo
function showError(input) {
    input.classList.add('error');
    input.classList.remove('success');
    const errorMessage = input.nextElementSibling;
    errorMessage.style.visibility = 'visible';
    errorMessage.style.color = 'red';
    const iconExclamation = input.parentElement.querySelector('.icon-exclamation');
    iconExclamation.style.visibility = 'visible';
  }

// Função para tratar o estado de sucesso do campo
function showSuccess(input) {
    input.classList.add('success');
    input.classList.remove('error');
    const errorMessage = input.nextElementSibling;
    errorMessage.style.visibility = 'hidden';
    errorMessage.style.color = 'green';
    const iconCheck = input.parentElement.querySelector('.icon-check');
    iconCheck.style.visibility = 'visible';
  }