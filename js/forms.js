class contact {
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

function Post(event, form) {

    event.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity(); 
        return null; 
    }

    let data = new contact(
        form.nome.value,
        form.sobrenome.value,
        form.email.value,
        form.cpf.value,
        form.telefone.value,
        form.contato.value
    );

    if(data){
        console.log("Dados capturados do formulário:", data);
        avisoPost(data.nome, data.sobrenome);
        form.reset();
        validationCheck();
        return data;

    }else{
        console.log("Houve Erro na Captura dos Dados!")
        return null;
    }
}

function avisoPost() {
    let name = document.getElementById("nome");
    let lstname = document.getElementById("sobrenome");

    if(name.value != "" && name.value != "" ){
        alert(`Obrigado sr(a) ${name.value} ${lstname.value}, seus dados foram encaminhados com sucesso`);
    }
}

function validationCheck(){
    const checkboxAgt = document.getElementById("agreement-checkbox");
    const subButton = document.getElementById("submitBtn");

    const isChecked = checkboxAgt.checked;

    if(!isChecked){
         subButton.disabled = true;
    }else{
         subButton.disabled = false;
    }
}

document.addEventListener("DOMContentLoaded", () => {  
    const checkboxAgt = document.getElementById("agreement-checkbox");
    
    checkboxAgt.addEventListener("change", validationCheck);
    validationCheck();
});
 

    



