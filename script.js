const balanco = document.getElementById("balanco");
const dinheiro_mais = document.getElementById("dinheiro-mais");
const dinheiro_menos = document.getElementById("dinheiro-menos");
const lista = document.getElementById("lista");
const formulario = document.getElementById("formulario");
const texto = document.getElementById("texto");
const quantidade = document.getElementById("quantidade");

const transacoes = [
    { id: 1, texto: "Almoço", quantidade: -20 },
    { id: 2, texto: "Salário", quantidade: 1000 },
    { id: 3, texto: "Conta de Luz", quantidade: -70 },
    { id: 4, texto: "Internet", quantidade: -60 },
];

// Adiciona transações ao DOM da lista
function adicionarTransacaoDOM(transacao) {
    // Define sinal
    const sinal = transacao.quantidade < 0 ? "-" : "+";
    const item = document.createElement("li");

    // Adiciona uma classe baseado no valor
    item.classList.add(transacao.quantidade < 0 ? "menos" : "mais");

    // Cria elemento
    item.innerHTML = `
        ${transacao.texto} <span>${sinal}${Math.abs(
        transacao.quantidade
    )}</span> <button class="botao-apagar">x</button>
    `;

    // Adiciona à lista
    lista.appendChild(item);
}

function inicializar() {
    lista.innerHTML = "";

    transacoes.forEach(adicionarTransacaoDOM);
}

inicializar();