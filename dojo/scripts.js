const notas = document.querySelectorAll(".notas");
const media = document.getElementById("media");
const form_aluno = document.getElementById("form-aluno");
const nome = document.getElementById("nome");

function calculoMedia() {
    let soma = 0;

    notas.forEach((nota) => {
        soma += Number(nota.value);
    });

    const media = soma/4;
    return media;
}

// ===  EXIBIÇÃO DA MÉDIA   ===
notas.forEach((nota) => {
    nota.addEventListener("input", () => {
        const calculo_media = calculoMedia();

        media.innerHTML = `Média das notas: ${calculo_media}`;
    });
});

// ===  ENVIO DO FORMULÁRIO   ===
form_aluno.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome_aluno = nome.value;

    const array_notas = [];

    notas.forEach((nota) => {
        array_notas.push(Number(nota.value));
    });

    const media_aluno = calculoMedia();

    window.location.href = `media.html?nome=${nome_aluno}&media=${media_aluno}`;
});

