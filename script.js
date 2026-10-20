let dados = {
    wandavision: 0,
    vision: 0,
    moonknight: 0
};

// Tenta carregar o dados.json
fetch("dados.json")
    .then(res => res.json())
    .then(json => {
        dados = json;

        // Se já tiver valores salvos no navegador, usa eles
        const salvo = localStorage.getItem("contadoresMarvel");
        if (salvo) {
            dados = JSON.parse(salvo);
        }

        atualizarTela();
    })
    .catch(() => {
        // Se der erro ao ler o JSON (ex: abrindo o arquivo direto), usa localStorage
        const salvo = localStorage.getItem("contadoresMarvel");
        if (salvo) {
            dados = JSON.parse(salvo);
        }
        atualizarTela();
    });

// Atualiza os números na tela
function atualizarTela() {
    document.getElementById("contador-wandavision").textContent = dados.wandavision;
    document.getElementById("contador-vision").textContent = dados.vision;
    document.getElementById("contador-moonknight").textContent = dados.moonknight;
}

// Função do botão Gostei
function gostei(serie) {
    dados[serie]++;
    atualizarTela();

    // Salva tudo no localStorage
    localStorage.setItem("contadoresMarvel", JSON.stringify(dados));
}
