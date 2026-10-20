// Carrega os contadores salvos
const series = ["wandavision", "vision", "moonknight"];

series.forEach(serie => {
    const salvo = localStorage.getItem("contador-" + serie);
    if (salvo) {
        document.getElementById("contador-" + serie).textContent = salvo;
    }
});

// Função do botão Gostei
function gostei(serie) {
    const elemento = document.getElementById("contador-" + serie);
    let valor = parseInt(elemento.textContent);
    valor++;
    elemento.textContent = valor;
    localStorage.setItem("contador-" + serie, valor);
}
