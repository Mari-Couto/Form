const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const tel = document.getElementById('tel')
const senha = document.getElementById('senha')
const senhaConf = document.getElementById('senhaConfirm')

form.addEventListener("submit", (event) => {
 event.preventDefault();
 
 validation();
})

function validation() {

    const userValue = username.value
    const emailValue = email.value
    const telValue = tel.value
    const senhaValue = senha.value
    const senhaConfValue = senhaConf.value

    //username
    if(userValue === ""){
        username.classList.add('error')
        username.classList.remove('success')

    } else {
        username.classList.add('success')
        username.classList.remove('error')
    }
    
    //email
    if(emailValue === ""){
        email.classList.add('error')
        email.classList.remove('success')
    } else {
        email.classList.add('success')
        email.classList.remove('error')
    }

    //telefone
    if(telValue === ""){
        tel.classList.add('error')
        tel.classList.remove('success')
    } else {
        tel.classList.add('success')
        tel.classList.remove('error')
    }

    //senha
    if(senhaValue === ""){
        senha.classList.add('error')
        senha.classList.remove('success')
    } else {
        senha.classList.add('success')
        senha.classList.remove('error')
    }  

    //senha confirmação
    if(senhaConfValue === ""){
        senhaConf.classList.add('error')
        senhaConf.classList.remove('success')
    } else {
        senhaConf.classList.add('success')
        senhaConf.classList.remove('error')
    }
  



}