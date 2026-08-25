// Lorena Eduarda Barros Martinelli
const inp_cep = document.querySelector('input.form-control[name="cep"]');
const inp_logradouro = document.querySelector('input.form-control[name="logradouro"]');
const inp_bairro = document.querySelector('input.form-control[name="bairro"]');
const inp_cidade = document.querySelector('input.form-control[name="localidade"]');
const inp_estado = document.querySelector('input.form-control[name="estado"]');
const inp_ibge = document.querySelector('input.form-control[name="ibge"]');

function limparCampos() {
    inp_logradouro.value = "";
    inp_bairro.value = "";
    inp_cidade.value = "";
    inp_estado.value = "";
    inp_ibge.value ="";
}

inp_cep.addEventListener("focusout", (e) => {
    inp_cep.classList.remove("is-invalid", "is-valid");

    // Validação do CEP (aceita apenas números)
    const cep_limpo = inp_cep.value.replace(/\D/g, "");

    // Ver sobre validação da qtd de numeros
    const qtd_algarismos = String(cep_limpo).length;
    if (qtd_algarismos !== 8) {
        inp_cep.classList.add("is-invalid");
        alert("O CEP deve ter 8 dígitos");
        limparCampos();
        return;
    }

    const url = `https://viacep.com.br/ws/${cep_limpo}/json/`;

    fetch(url).then(resp => resp.json()).then(dados => {
        // Validação de CEP inexistente
        if (dados.erro) {
            inp_cep.classList.add("is-invalid");
            alert("O CEP digitado é inexistente.");
            limparCampos();
            return;
        }

        inp_cep.classList.add("is-valid");

        inp_logradouro.value = dados.logradouro;
        inp_bairro.value = dados.bairro;
        inp_cidade.value = dados.localidade;
        inp_estado.value = dados.estado;
        inp_ibge.value = dados.ibge;
    }); 
});