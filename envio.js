

function envio(){
    var clienteNome = document.getElementById("nome");
    var clienteEmail = document.getElementById("email");
    var clienteTel = document.getElementById("telefone");
    var clienteMensagem = document.getElementById("mensagem");

    var dados = JSON.parse(localStorage.getItem("dadosCliente"));

    if(dados == null){
        localStorage.setItem("dadosCliente", "[]");
        dados = [];
    }

    var auxRegistro = {
        nome: clienteNome.value,
        email: clienteEmail.value,
        telefone: clienteTel.value,
        mensagem: clienteMensagem.value
    }

    dados.push(auxRegistro);

    localStorage.setItem("dadosCliente", JSON.stringify(dados));
    alert("Mensagem enviada com sucesso!");

    
}