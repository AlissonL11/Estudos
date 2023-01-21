const form = document.querySelector("#form");                       //pegando as mensagens de erro pelo id
const erroNome = document.getElementById("erroNome");               //
const erroEmail = document.getElementById("erroEmail");             //
const erroPhone = document.getElementById("erroPhone");             //
const erroCPF = document.getElementById("erroCPF");                 //
const erroPassword = document.getElementById("erroPassword");       //
const sucess = document.getElementById("sucess");                   //pegando as mensagens de erro pelo id




const nome = document.getElementById("name");               //pegando os inputs pelo id
const email = document.getElementById("email");             //
const phone = document.getElementById("phone");             //
const cpf = document.getElementById("CPF");                 //
const senha = document.getElementById("password");          //pegando os inputs pelo id

const erroMsg = "*Campo Obrigatório*"               //mensagem de erro a ser exibida

form.addEventListener('submit', function(event){        //adicionando um "escutador" ao botao submit
    event.preventDefault();         //evitando que a pagina se atualize.


    //inicio da condicional (se o input estiver vazio, que apareça a mensagem de erro; do contrário, esconda a mensagem de erro)
    if(nome.value===''){
        erroNome.style.visibility = 'visible'
        erroNome.textContent = erroMsg
    }else{
        erroNome.style.visibility = 'hidden'
    };

    if(email.value===''){
        erroEmail.style.visibility = 'visible'
        erroEmail.textContent = erroMsg
    }else{
        erroEmail.style.visibility = 'hidden'
    };

    if(phone.value===''){
        erroPhone.style.visibility = 'visible'
        erroPhone.textContent = erroMsg
    }else{
        erroPhone.style.visibility = 'hidden'
    };

    if(cpf.value===''){
        erroCPF.style.visibility = 'visible'
        erroCPF.textContent = erroMsg
    }else{
        erroCPF.style.visibility = 'hidden'
    };

    if(senha.value===''){
        erroPassword.style.visibility = 'visible'
        erroPassword.textContent = erroMsg
    }else{
        erroPassword.style.visibility = 'hidden'
    }; 

    //abaixo a condicional da mensagem de sucesso (se todos os inputs estiverem com algum valor, mostre a mensagem de sucesso e oculte os erros, do contrário, oculte a mensagem de sucesso.)

    if(nome.value!='' && email.value!='' && phone.value!='' && cpf.value!='' && senha.value!= ''){
        sucess.textContent = "Sucesso!"             //alterando o texto exibido dentro do span de sucesso (em caso de tudo estar preenchido)
        sucess.style.color = "#05f805"              //alterando a cor a ser exibida para o texto.

        sucess.style.visibility = 'visible'
        erroNome.style.visibility = 'hidden'
        erroEmail.style.visibility = 'hidden'
        erroPhone.style.visibility = 'hidden'
        erroCPF.style.visibility = 'hidden'
        erroPassword.style.visibility = 'hidden'

    }else{
        sucess.textContent= "Campos obrigatórios não registrados.";         //alterando o texto exibido dentro do span de sucesso, caso esteja algo vazio.
        sucess.style.color = "red";                                         ////alterando a cor a ser exibida para o texto.
        sucess.style.visibility = 'visible';

    };
}
)

