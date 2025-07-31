let acertos = 0;

function iniciarQuiz() {
  document.getElementById("introducao").style.display = "none";
  document.querySelector(".pergunta-1").classList.add("ativa");
}

function exibirMensagemAntesDeAvancar(texto, tipo, idMensagem, proximaFuncao, tempo = 2500) {
  const divMensagem = document.getElementById(idMensagem);
  divMensagem.textContent = texto;
  divMensagem.className = "mensagem-feedback";

  if (tipo === "correta") {
    divMensagem.classList.add("mensagem-correta");
  } else {
    divMensagem.classList.add("mensagem-incorreta");
  }

  divMensagem.style.display = "block";

  setTimeout(() => {
    divMensagem.style.display = "none";
    if (proximaFuncao) proximaFuncao();
  }, tempo);
}



function mostrarProxima(perguntaAtual, perguntaSeguinte) {
    document.querySelector(`.pergunta-${perguntaAtual}`).classList.remove("ativa");
    document.querySelector(`.pergunta-${perguntaSeguinte}`).classList.add("ativa");
}

// As funções agora apenas verificam se uma alternativa foi marcada
function valida1() {
    const alternativa = document.querySelector('input[name="apelido"]:checked');
    if (alternativa) {
        if (alternativa.value === "paty") {
            acertos++; // Adiciona aqui
            exibirMensagemAntesDeAvancar("resposta correta!", "correta", "mensagem-1", () => mostrarProxima(1, 2));
        } else {
            exibirMensagemAntesDeAvancar("resposta incorreta!", "incorreta", "mensagem-1", () => mostrarProxima(1, 2));
        }
    } else {
        exibirMensagemAntesDeAvancar("Por favor, selecione uma resposta.", "incorreta", "mensagem-1");
    }
}


function valida2() {
    const alternativa = document.querySelector('input[name="materia"]:checked');
    if (alternativa) {
        if (alternativa.value === "controle-automatico") {
            acertos++; // Adiciona aqui
            exibirMensagemAntesDeAvancar("resposta correta!", "correta", "mensagem-2", () => mostrarProxima(2, 3));
        } else {
            exibirMensagemAntesDeAvancar("resposta incorreta!", "incorreta", "mensagem-2", () => mostrarProxima(2, 3));
        }
    } else {
        exibirMensagemAntesDeAvancar("Por favor, selecione uma resposta.", "incorreta", "mensagem-2");
    }
}

function valida3() {
    const alternativa = document.querySelector('input[name="data"]:checked');
    if (alternativa) {
        if (alternativa.value === "05/03"){
            acertos++; // Adiciona aqui
            exibirMensagemAntesDeAvancar("resposta correta!", "correta", "mensagem-3", () => mostrarProxima(3, 4));
        } else {
            exibirMensagemAntesDeAvancar("resposta incorreta!", "incorreta", "mensagem-3", () => mostrarProxima(3, 4));
        }
    } else {
        exibirMensagemAntesDeAvancar("Por favor, selecione uma resposta.", "incorreta", "mensagem-3");
    }
}

function valida4() {
    const alternativa = document.querySelector('input[name="musica"]:checked');
    if (alternativa) {
        if(alternativa.value === "tim-maia"){
            acertos++; // Adiciona aqui
            exibirMensagemAntesDeAvancar("resposta correta!", "correta", "mensagem-4", () => mostrarProxima(4, 5));
        } else {
            exibirMensagemAntesDeAvancar("resposta incorreta!", "incorreta", "mensagem-4", () => mostrarProxima(4, 5));
        }
    } else {
        exibirMensagemAntesDeAvancar("Por favor, selecione uma resposta.", "incorreta", "mensagem-4");
    }
}

function valida5() {
    const alternativa = document.querySelector('input[name="convite"]:checked');
    if (alternativa) {
        if(alternativa.value === "fotinha"){
            acertos++; // Adiciona aqui
            exibirMensagemAntesDeAvancar("resposta correta!", "correta", "mensagem-5", () => mostrarProxima(5, 6));
        } else {
            exibirMensagemAntesDeAvancar("resposta incorreta!", "incorreta", "mensagem-5", () => mostrarProxima(5, 6));
        }
    } else {
        exibirMensagemAntesDeAvancar("Por favor, selecione uma resposta.", "incorreta", "mensagem-5");
    }
}

function valida6() {
    const alternativa = document.querySelector('input[name="presente"]:checked');
    if (alternativa) {
        if(alternativa.value === "palheta"){
            acertos++; // Adiciona aqui
            exibirMensagemAntesDeAvancar("resposta correta!", "correta", "mensagem-6", () => mostrarProxima(6, 7));
        } else {
            exibirMensagemAntesDeAvancar("resposta incorreta!", "incorreta", "mensagem-6", () => mostrarProxima(6, 7));
        }
    } else {
        exibirMensagemAntesDeAvancar("Por favor, selecione uma resposta.", "incorreta", "mensagem-6");
    }
}

function valida7() {
    const alternativa = document.querySelector('input[name="instrumento"]:checked');
    if (alternativa) {
        if(alternativa.value === "todos"){
            acertos++; // Adiciona aqui
            exibirMensagemAntesDeAvancar("resposta correta!", "correta", "mensagem-7", () => mostrarProxima(7, 8));
        } else {
            exibirMensagemAntesDeAvancar("resposta incorreta!", "incorreta", "mensagem-7", () => mostrarProxima(7, 8));
        }
    } else {
        exibirMensagemAntesDeAvancar("Por favor, selecione uma resposta.", "incorreta", "mensagem-7");
    }
}

function valida8() {
    const alternativa = document.querySelector('input[name="comida"]:checked');
    if (alternativa) {
        if(alternativa.value === "vegetal"){
            acertos++; // Adiciona aqui
            exibirMensagemAntesDeAvancar("resposta correta!", "correta", "mensagem-8", () => mostrarProxima(8, 9));
        } else {
            exibirMensagemAntesDeAvancar("resposta incorreta!", "incorreta", "mensagem-8", () => mostrarProxima(8, 9));
        }
    } else {
        exibirMensagemAntesDeAvancar("Por favor, selecione uma resposta.", "incorreta", "mensagem-8");
    }
}

function valida9() {
    const alternativa = document.querySelector('input[name="time"]:checked');
    if (alternativa) {
        if(alternativa.value === "fluminense"){
            acertos++; // Adiciona aqui
            exibirMensagemAntesDeAvancar("resposta correta!", "correta", "mensagem-9", () => mostrarProxima(9, 10));
        } else {
            exibirMensagemAntesDeAvancar("resposta incorreta!", "incorreta", "mensagem-9");
        }
    } else {
        exibirMensagemAntesDeAvancar("Por favor, selecione uma resposta.", "incorreta", "mensagem-9");
    }
}
function valida10() {
  const alternativa = document.querySelector('input[name="qualidade"]:checked');
  if (alternativa) {
    exibirMensagemAntesDeAvancar(
      "Impossível te roteirizar com uma alternativa só. Eu te admiro em todos os pontos possíveis. ❤️",
      "correta",
      "mensagem-10",
      () => {
        document.querySelector('.pergunta-10').classList.remove("ativa");

        const resultadoFinal = document.createElement("section");
        resultadoFinal.className = "pergunta-final";
        resultadoFinal.style.display = "block";

        const mensagem = document.createElement("div");
        mensagem.style.padding = "20px";
        mensagem.style.fontSize = "1.2rem";

        if (acertos === 9) {
          mensagem.innerHTML = `
            <p>✨ Você acertou todas as perguntas! Acesso concedido à mensagem criptografada abaixo. ✨</p>
          `;
        const decodificador = document.querySelector(".decodificador");
        decodificador.style.display = "block";

        decodificador.parentNode.insertBefore(mensagem, decodificador);
        } else {

          mensagem.innerHTML = `
            <p style="color: red;">😢 Você não acertou todas as perguntas.<br>
            Volte e tente novamente para desbloquear a mensagem!</p>
            <br>
            <button onclick="refazerQuiz()">Tentar de novo</button>
          `;
        }

        resultadoFinal.appendChild(mensagem);
        const decodificador = document.querySelector(".decodificador");
        decodificador.parentNode.insertBefore(resultadoFinal, decodificador);

        },
        4000 // <- novo tempo de exibição em milissegundos
    );
  } else {
    exibirMensagemAntesDeAvancar(
      "Por favor, selecione uma resposta.",
      "incorreta",
      "mensagem-10"
    );
  }
}

function voltar(perguntaAnterior) {
  const perguntaAtual = perguntaAnterior + 1;
  document.querySelector(`.pergunta-${perguntaAtual}`).classList.remove("ativa");
  document.querySelector(`.pergunta-${perguntaAnterior}`).classList.add("ativa");
}

function refazerQuiz() {
  acertos = 0;
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("ativa"));
  document.querySelector('.pergunta-1').classList.add("ativa");

  document.querySelector('.decodificador').style.display = "none";

  const final = document.querySelector('.pergunta-final');
  if (final) final.remove();

  window.scrollTo(0, 0);
}

// Função de decodificação (Cifra de César reversa)
function decodificar() {
  const chave = parseInt(document.getElementById("chave").value);
  const mensagemCriptografada = "FRQYLWH PRULDK";
  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let resultado = "";

  const divResultado = document.getElementById("mensagem-decodificada");

  if (isNaN(chave)) {
    divResultado.textContent = "Digite uma chave válida.";
    return;
  }

  for (let i = 0; i < mensagemCriptografada.length; i++) {
    const char = mensagemCriptografada[i];
    if (char === " ") {
      resultado += " ";
    } else {
      const idx = alfabeto.indexOf(char.toUpperCase());
      if (idx === -1) {
        resultado += char;
      } else {
        let newIndex = (idx - chave + 26) % 26;
        resultado += alfabeto[newIndex];
      }
    }
  }

  divResultado.textContent = `Mensagem decodificada: ${resultado}`;

  // Comparação ajustada: remove espaços extras e força para maiúsculo
  const resultadoLimpo = resultado.trim().toUpperCase();
  if (resultadoLimpo === "CONVITE MORIAH") {
    divResultado.textContent += " — redirecionando...";

    setTimeout(() => {
      window.location.href = "convite.html";
    }, 2500);
  } else {
    divResultado.textContent += " — mas a chave está incorreta! 🧐";
  }
}
