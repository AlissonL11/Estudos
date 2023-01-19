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



form.addEventListener('submit', function(event){        //adicionando um "escutador" ao botao submit
    event.preventDefault();         //evitando que a pagina se atualize.


    //inicio da condicional (se o input estiver vazio, que apareça a mensagem de erro; do contrário, esconda a mensagem de erro)
    if(nome.value===''){
        erroNome.style.display = 'block'
    }else{
        erroNome.style.display = 'none'
    };

    if(email.value===''){
        erroEmail.style.display = 'block'
    }else{
        erroEmail.style.display = 'none'
    };

    if(phone.value===''){
        erroPhone.style.display = 'block'
    }else{
        erroPhone.style.display = 'none'
    };

    if(cpf.value===''){
        erroCPF.style.display = 'block'
    }else{
        erroCPF.style.display = 'none'
    };

    if(senha.value===''){
        erroPassword.style.display ='block'
    }else{
        erroPassword.style.display ='none'
    }; 

    //abaixo a condicional da mensagem de sucesso (se todos os inputs estiverem com algum valor, mostre a mensagem de sucesso e oculte os erros, do contrário, oculte a mensagem de sucesso.)

    if(nome.value!='' && email.value!='' && phone.value!='' && cpf.value!='' && senha.value!= ''){
        sucess.style.display = 'block'
        erroNome.style.display = 'none'
        erroEmail.style.display = 'none'
        erroPhone.style.display = 'none'
        erroCPF.style.display = 'none'
        erroPassword.style.display ='none'

    }else{
        sucess.style.display = 'none'
    };
}
)

