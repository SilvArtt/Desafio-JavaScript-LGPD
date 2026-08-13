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

    console.log("Dados capturados do formulário:", data);
    
    AvisoPost(data.nome, data.sobrenome);

    form.reset();
    
    return data;
}

function AvisoPost() {
    let name = document.getElementById("nome");
    let lstname = document.getElementById("sobrenome");

    if(name.value != "" && name.value != "" ){
        alert(`Obrigado sr(a) ${name.value} ${lstname.value}, seus dados foram encaminhados com sucesso`);
    }
}

    



