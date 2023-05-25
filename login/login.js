
    // Esta função realiza a validação do email e da senha de acordo com as expressões de padrão
    function logar(){
        let email = document.getElementById('email').value
        let senha = document.getElementById('senha').value

        let emailPadrao = /^[a-z0-9-]+(\.[a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

        let senhaPadrao = /^(?=.*[0-9])[a-z0-9!@#$%^&*]{6,12}$/;
        
        console.log('Email', emailPadrao.test(email));
        console.log('Senha', senhaPadrao.test(senha));
        
        if(!email){ 
            alert('Preencha o campo Email')
        }else if(!senha){
            alert('Prencha o campo Senha')
        }else if( emailPadrao.test(email) && senhaPadrao.test(senha) !== true){
            alert('Senha invalida')
        }else if(emailPadrao.test(email) !== true && senhaPadrao.test(senha)){
            alert('Formato de e-mail invalido')
        }else if(emailPadrao.test(email) && senhaPadrao.test(senha)){
            alert('Login com Sucesso')
            //window.location = 'registrar.html'
            window.location.href='listaTarefa.html'
        }else{
            //console.log('Email', emailPadrao.test(email)); // mostra no console true or false
            alert('Dados invalidos', emailPadrao.test(email), senhaPadrao.test(senha))
        }   
    }
   