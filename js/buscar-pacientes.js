var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    console.log("Buscando dados...");
    // Cria objeto especialista em requisições http.
    // O xml no nome é herança historica, pq hj existem varios tipos de dados que este obj trafega.
    var xhr = new XMLHttpRequest();

    // Configura o metodo e para onde enviar a requisicao.
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    // Fica escutando para pegar a resposta da requisicao.
    xhr.addEventListener("load", function() {
        var resposta = xhr.responseText;
        // Transforma a string json em obj javascript.
        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
    });

    // Envia a requisicao.
    xhr.send();
});