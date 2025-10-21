// Busca de informação no HTML (Para os temas do site, imagens e afins)

const pgn = document.body;

const tema = document.getElementById("tema");

const upgradeBox = document.querySelectorAll('.upgrade');

const celular = document.querySelector('.celular-img');

const byte1 = document.querySelectorAll('.bytes-img');

const byte2 = document.querySelectorAll('.bytes-img2');

const levelInfo = document.querySelectorAll('.prox-level-info');

const bpcText = document.getElementById('bpc-text');

const bpsText = document.getElementById('bps-text');

let bpsInterval = null;

let darkMode = false;



// Função para atualizar as estatísticas

function statsUpdate() {

  bpcText.textContent = bpc.toFixed(0);

  bpsText.textContent = bps.toFixed(0);

}



tema.addEventListener("click", (event) => {

  event.preventDefault();



  const textoL = tema.querySelector('.txt-link');



  if (!darkMode) {

    // MODO ESCURO

    pgn.style.backgroundColor = "#f7f7f7";

    pgn.style.color = "#000000";

    textoL.textContent = "Tema Escuro";

    celular.src = "./imagens/cerula.png";



    levelInfo.forEach(info => {

      info.style.backgroundColor = "rgb(192, 193, 193)";;

      info.style.border = "1.5px solid white";

    });



    upgradeBox.forEach(borda => {

      borda.style.borderColor = "black"

    });



    byte1.forEach(img => img.src = "./imagens/byte.png");

    byte2.forEach(img => img.src = "./imagens/byte.png");



    darkMode = true;

  } else {

    // MODO CLARO

    pgn.style.backgroundColor = "#2C2C2C";

    pgn.style.color = "#FFFFFF";

    textoL.textContent = "Tema Claro";

    celular.src = "./imagens/cerula branco.PNG";



    levelInfo.forEach(info => {

      info.style.backgroundColor = "rgb(90, 89, 90)"

      info.style.border = "1.5px solid black";

    });



    upgradeBox.forEach(borda => {

      borda.style.borderColor = "white"

    });



    byte1.forEach(img => img.src = "./imagens/byte branco.PNG");

    byte2.forEach(img => img.src = "./imagens/byte branco.PNG");



    darkMode = false;

  }

});



// Base do "Dinheiro"

let bytes = document.querySelector('.custo-bytes')

let parsedBytes = parseFloat(bytes.innerHTML)



// Upgrade 1 (Variáveis)

let preçoClick = document.querySelector('.clicker-cost')

let parsedMousePreço = parseFloat(preçoClick.innerHTML)



let mouseLevel = document.querySelector('.mouse-level')



let mouseMais = document.querySelector('.mouse-mais')

let parsedMouse = parseFloat(mouseMais.innerHTML)



// Upgrade ? (Variáveis)

const fonteCard = document.getElementById("fonte-card");



const preçoFonte = 130;



const upgrades = document.querySelectorAll(".upgrade");



// Upgrade 2 (Variáveis)

let preçoMae = document.querySelector('.mae-cost')

let parsedMaePreço = parseFloat(preçoMae.innerHTML)



let maeLevel = document.querySelector('.mae-level')



let maeMais = document.querySelector('.mae-mais')

let parsedMae = parseFloat(maeMais.innerHTML)



// Upgrade 3 (Variáveis)

let preçoProcess = document.querySelector('.process-cost')

let parsedProcessPreço = parseFloat(preçoProcess.innerHTML)



let processLevel = document.querySelector('.process-level')



let processMais = document.querySelector('.process-mais')

let parsedProcess = parseFloat(processMais.innerHTML)



// Upgrade 4 (Variáveis)

let preçoGPU = document.querySelector('.GPU-cost')

let parsedGPUPreço = parseFloat(preçoGPU.innerHTML)



let GPULevel = document.querySelector('.GPU-level')



let GPUMais = document.querySelector('.GPU-mais')

let parsedGPU = parseFloat(GPUMais.innerHTML)



// Bytes Por Click

let bpc = 1;



// Bytes Por Segundo

let bps = 0;



// Atualiza as estatísticas

statsUpdate();



// Função para o ganho de Bytes a cada clique

function ganharBytes() {

  bytes.innerHTML = Math.round(parsedBytes += bpc)

}



// Função para a compra do Mouse

function comprarClick() {

  if (parsedBytes >= parsedMousePreço) {

    bytes.innerHTML = Math.round(parsedBytes -= parsedMousePreço)



    mouseLevel.innerHTML++



    parsedMouse = parseFloat((parsedMouse * 1.03).toFixed(2))

    mouseMais.innerHTML = parsedMouse

    bpc += parsedMouse



    parsedMousePreço *= 1.18;

    preçoClick.innerHTML = Math.round(parsedMousePreço)

    // Atualiza as estatísticas

    statsUpdate();

  }

}



// Função para a compra da Fonte

function comprarFonte() {

  if (parsedBytes >= preçoFonte) {

    parsedBytes -= preçoFonte;

    bytes.innerHTML = Math.round(parsedBytes);

    fonteCard.classList.add("fonte-bloqueada");



    // Libera os próximos upgrades automáticos

    upgrades.forEach(upg => {

      if (

        !upg.querySelector("h4").textContent.includes("Mouse") &&

        !upg.querySelector("h4").textContent.includes("Fonte")

      ) {

        upg.style.pointerEvents = "auto";

        upg.style.opacity = "1";

        upg.style.filter = "none";

      }

    });



    bps = 0; // Garante que BPS começa do 0 ao comprar

   

    if (!bpsInterval) { // Só cria o intervalo UMA VEZ, para não dar erro na hora dos saves

      bpsInterval = setInterval(() => {

        parsedBytes += bps / 10

        bytes.innerHTML = Math.round(parsedBytes)

      }, 100)

    }

  }

}



// Função para a compra da Placa Mãe

function comprarMae() {

  if (parsedBytes >= parsedMaePreço) {

    bytes.innerHTML = Math.round(parsedBytes -= parsedMaePreço)



    maeLevel.innerHTML++



    parsedMae = parseFloat((parsedMae * 1.03).toFixed(2))

    maeMais.innerHTML = parsedMae

    bps += parsedMae



    parsedMaePreço *= 1.18;

    preçoMae.innerHTML = Math.round(parsedMaePreço)

    // Atualiza as estatísticas

    statsUpdate();

  }

}



// Função para a compra do Processador

function comprarProcess() {

  if (parsedBytes >= parsedProcessPreço) {

    bytes.innerHTML = Math.round(parsedBytes -= parsedProcessPreço)



    processLevel.innerHTML++



    parsedProcess = parseFloat((parsedProcess * 1.03).toFixed(2))

    processMais.innerHTML = parsedProcess

    bps += parsedProcess



    parsedProcessPreço *= 1.18;

    preçoProcess.innerHTML = Math.round(parsedProcessPreço)

    // Atualiza as estatísticas

    statsUpdate();

  }

}



// Função para a compra da Placa de Vídeo

function comprarGPU() {

  if (parsedBytes >= parsedGPUPreço) {

    bytes.innerHTML = Math.round(parsedBytes -= parsedGPUPreço)



    GPULevel.innerHTML++



    parsedGPU = parseFloat((parsedGPU * 1.03).toFixed(2))

    GPUMais.innerHTML = parsedGPU

    bps += parsedGPU



    parsedGPUPreço *= 1.18;

    preçoGPU.innerHTML = Math.round(parsedGPUPreço)

    // Atualiza as estatísticas

    statsUpdate();

  }

}



// Função para salvar o jogo

function save() {

  // Objeto que contém todos os dados salvos

  const gameData = {

    bytes: parsedBytes,



    mousePreço: parsedMousePreço,

    mouseLevel: mouseLevel.innerHTML,

    maePreço: parsedMaePreço,

    maeLevel: maeLevel.innerHTML,

    processPreço: parsedProcessPreço,

    processLevel: processLevel.innerHTML,

    gpuPreço: parsedGPUPreço,

    gpuLevel: GPULevel.innerHTML,

   

    bpc: bpc,

    bps: bps,

    mouseBonus: parsedMouse,

    maeBonus: parsedMae,

    processBonus: parsedProcess,

    gpuBonus: parsedGPU,



    fonteComprada: fonteCard.classList.contains("fonte-bloqueada")

  };



  // Converte para string, para guardar no localStorage

  localStorage.setItem("functionClickerSave", JSON.stringify(gameData));

  alert("Jogo Salvo!");

}



// Função para carregar o save

function load() {

  // Resgata os dados salvos do localStorage

  const saveData = localStorage.getItem("functionClickerSave");



  // Verificando se ja existe um save

  if (!saveData) {

    alert("Nenhum jogo salvo encontrado!");

    return;

  }



  // Convertendo a string do localStorage para Objeto

  const gameData = JSON.parse(saveData);



  // Restaura todos os dados do save

  parsedBytes = gameData.bytes;

  bpc = gameData.bpc;

  bps = gameData.bps;



  parsedMousePreço = gameData.mousePreço;

  mouseLevel.innerHTML = gameData.mouseLevel;

  parsedMouse = gameData.mouseBonus;



  parsedMaePreço = gameData.maePreço;

  maeLevel.innerHTML = gameData.maeLevel;

  parsedMae = gameData.maeBonus;



  parsedProcessPreço = gameData.processPreço;

  processLevel.innerHTML = gameData.processLevel;

  parsedProcess = gameData.processBonus;

 

  parsedGPUPreço = gameData.gpuPreço;

  GPULevel.innerHTML = gameData.gpuLevel;

  parsedGPU = gameData.gpuBonus;



  // Atualiza a interface seguindo o save carregado

  bytes.innerHTML = Math.round(parsedBytes);

  preçoClick.innerHTML = Math.round(parsedMousePreço);

  preçoMae.innerHTML = Math.round(parsedMaePreço);

  preçoProcess.innerHTML = Math.round(parsedProcessPreço);

  preçoGPU.innerHTML = Math.round(parsedGPUPreço);



  // Restaura o estado da Fonte e dos upgrades bloqueados

  if (gameData.fonteComprada) {

    fonteCard.classList.add("fonte-bloqueada");

   

    upgrades.forEach(upg => {

      if (

        !upg.querySelector("h4").textContent.includes("Mouse") &&

        !upg.querySelector("h4").textContent.includes("Fonte")

      ) {

        upg.style.pointerEvents = "auto";

        upg.style.opacity = "1";

        upg.style.filter = "none";

      }

    });



    // Ativa o BPS (caso ainda não estiver ativo)

    if (!bpsInterval) {

      bpsInterval = setInterval(() => {

        parsedBytes += bps / 10;

        bytes.innerHTML = Math.round(parsedBytes);

      }, 100);

    }

  }



  // 8. Atualiza as estatísticas de BPC/BPS

  statsUpdate();

  alert("Jogo Carregado com sucesso!");

}



// Função para resetar o jogo

function reset() {

  // Confirma se o jogador quer resetar mesmo

  if (confirm("Deseja resetar o jogo? Todo o seu progresso atual será perdido.")) {

    // Limpa o save do localStorage

    localStorage.removeItem("functionClickerSave");

    // Atualiza a página

    location.reload();

  }

}
