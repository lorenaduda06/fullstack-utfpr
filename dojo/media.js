const params = new URLSearchParams(window.location.search);
const nome_registrado = params.get("nome");
const media_registrada = params.get("media");

const span_nome_aluno = document.getElementById("nome-aluno");
const resultado_media = document.getElementById("resultado-media");
const status_aprovacao = document.getElementById("status-aprovacao");

span_nome_aluno.innerHTML = nome_registrado;
resultado_media.innerHTML = media_registrada;

function determinarAprovacao() {
    if (resultado_media >= 6) {
        return "APROVADO";
    }
    else if (resultado_media >= 2 && resultado_media <= 5.9) {
        return "EXAME";
    }
    else {
        return "REPROVADO";
    }
}

status_aprovacao.innerHTML = determinarAprovacao();