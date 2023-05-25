


/*
let nome = document.querySelector('#nome')
let sobrenome = document.querySelector('#sobrenome')
let email = document.querySelector('#email')
let senha = document.querySelector('#senha')
let confirm_senha = document.querySelector('#confirm_senha')
*/
let nome_padrao = /^[a-z0-9]+(\.[a-z0-9])$/
let sobrenome_padrao = /^[a-z0-9]+[a-z0-9]$/
let email_padrao = /^[a-z0-9]+(\.[a-z0-9]+)*@[a-z0-9]+(\.[a-z0-9]+)*(\.[a-z]{2,4})$/
let senha_padrao = /^(?=.*[0-9])[a-z0-9!@#$%^&*]{6,12}$/



function registrar(){

    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let confirm_senha = document.getElementById('confirm_senha').value

    let nome_padrao = /^[A-Za-z]+[a-z]$/
    let sobrenome_padrao = /^[A-Za-z]+[a-z]$/
    let email_padrao = /^[a-z0-9]+(\.[a-z0-9]+)*@[a-z0-9]+(\.[a-z0-9]+)*(\.[a-z]{2,4})$/
    let senha_padrao = /^(?=.*[0-9])[a-z0-9!@#$%^&*]{6,12}$/

    if(!nome){
        alert('Preencha o campo "Nome"')
    } else if(!sobrenome){
        alert('Preencha o campo "Sobrenome"')
    } else if(!email){
        alert('Preencha o campo "Email"') 
    } else if(!senha){
        alert('Preencha o campo "Senha"')
    } else if(!confirm_senha){
        alert('Preencha o campo "Confirmar Senha"')
    } else if(nome_padrao.test(nome) !== true){
        alert('Nome inválido!')
    } else if(sobrenome_padrao.test(sobrenome) !== true){
        alert('Sobrenome inválido')
    } else if(email_padrao.test(email) !== true){
        alert('Email inválido')
    } else if (senha_padrao.test(senha) !== true){
        alert('Senha inválida')
    } else if(confirm_senha !== senha){
        alert('A confirmação da senha esta incorreta')
    } else if (nome_padrao.test(nome) && sobrenome_padrao.test(sobrenome) && email_padrao.test(email) && senha_padrao.test(senha) && confirm_senha === senha){
        window.location.href='login.html'
        alert('Registro com sucesso!')
    } else {
        alert('Dados invalidos', nome_padrao.test(nome), sobrenome_padrao.test(sobrenome), email_padrao.test(email), senha_padrao.test(senha), confirm_senha.test(confirm_senha))
    }

    console.log('Nome', nome_padrao.test(nome))
    console.log('Sobrenome', sobrenome_padrao.test(sobrenome))
    console.log('Email', email_padrao.test(email));
    console.log('Senha', senha_padrao.test(senha));
    
}





