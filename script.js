const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const senhaConf = document.getElementById('senhaConfirm')

form.addEventListener("submit", (event) => {
 event.preventDefault();
 
 validation();
})

function validation() {

    const userValue = username.value

    if(userValue === ""){
        alert('Preencha o nome')
    } else {
        alert('tudo ok')
    }

}