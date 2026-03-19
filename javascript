let hp = { kakashi: 100, obito: 100 };
let bloqueado = false;

function turnoJogador() {
  if (bloqueado || hp.kakashi <= 0) return;
  
  bloqueado = true;
  document.getElementById('msg').innerText = "Kakashi ataca!";
  
  executarAtaque('kakashi', 'obito', () => {
    if (hp.obito > 0) {
      document.getElementById('msg').innerText = "Obito (IA) está pensando...";
      setTimeout(turnoIA, 1200); // IA revida após 1.2s
    }
  });
}

function turnoIA() {
  document.getElementById('msg').innerText = "Obito usa Kamui!";
  executarAtaque('obito', 'kakashi', () => {
    if (hp.kakashi > 0) {
      bloqueado = false;
      document.getElementById('msg').innerText = "Sua vez!";
    }
  });
}

function executarAtaque(idAtacante, idAlvo, callback) {
  const atacante = document.getElementById(idAtacante);
  const alvo = document.getElementById(idAlvo);
  const cena = document.getElementById('battle-scene');

  // Dash (Avanço)
  const deslocamento = idAtacante === 'kakashi' ? 80 : -80;
  atacante.style.transform = `translateX(${deslocamento}px) scale(1.2)`;

  setTimeout(() => {
    // Dano e Feedback
    const dano = Math.floor(Math.random() * 15) + 10;
    hp[idAlvo] = Math.max(0, hp[idAlvo] - dano);
    
    // UI
    document.getElementById(`hp-${idAlvo}`).style.width = hp[idAlvo] + "%";
    cena.classList.add('shake');
    alvo.classList.add('flash');

    setTimeout(() => {
      atacante.style.transform = "translateX(0) scale(1)";
      cena.classList.remove('shake');
      alvo.classList.remove('flash');
      
      if (hp[idAlvo] <= 0) {
        finalizarLuta(idAtacante);
      } else {
        callback();
      }
    }, 250);
  }, 200);
}

function finalizarLuta(vencedorId) {
  const tela = document.getElementById('overlay');
  const texto = document.getElementById('winner-text');
  tela.style.display = 'flex';
  texto.innerText = vencedorId.toUpperCase() + " VENCEU!";
}let hp = { kakashi: 100, obito: 100 };
let bloqueado = false;

function turnoJogador() {
  if (bloqueado || hp.kakashi <= 0) return;
  
  bloqueado = true;
  document.getElementById('msg').innerText = "Kakashi ataca!";
  
  executarAtaque('kakashi', 'obito', () => {
    if (hp.obito > 0) {
      document.getElementById('msg').innerText = "Obito (IA) está pensando...";
      setTimeout(turnoIA, 1200); // IA revida após 1.2s
    }
  });
}

function turnoIA() {
  document.getElementById('msg').innerText = "Obito usa Kamui!";
  executarAtaque('obito', 'kakashi', () => {
    if (hp.kakashi > 0) {
      bloqueado = false;
      document.getElementById('msg').innerText = "Sua vez!";
    }
  });
}

function executarAtaque(idAtacante, idAlvo, callback) {
  const atacante = document.getElementById(idAtacante);
  const alvo = document.getElementById(idAlvo);
  const cena = document.getElementById('battle-scene');

  // Dash (Avanço)
  const deslocamento = idAtacante === 'kakashi' ? 80 : -80;
  atacante.style.transform = `translateX(${deslocamento}px) scale(1.2)`;

  setTimeout(() => {
    // Dano e Feedback
    const dano = Math.floor(Math.random() * 15) + 10;
    hp[idAlvo] = Math.max(0, hp[idAlvo] - dano);
    
    // UI
    document.getElementById(`hp-${idAlvo}`).style.width = hp[idAlvo] + "%";
    cena.classList.add('shake');
    alvo.classList.add('flash');

    setTimeout(() => {
      atacante.style.transform = "translateX(0) scale(1)";
      cena.classList.remove('shake');
      alvo.classList.remove('flash');
      
      if (hp[idAlvo] <= 0) {
        finalizarLuta(idAtacante);
      } else {
        callback();
      }
    }, 250);
  }, 200);
}

function finalizarLuta(vencedorId) {
  const tela = document.getElementById('overlay');
  const texto = document.getElementById('winner-text');
  tela.style.display = 'flex';
  texto.innerText = vencedorId.toUpperCase() + " VENCEU!";
}
