/* ==========================================================================
   PC Hub — Sistemas & Projetos
   ========================================================================== */

/* ============================================================
   EDITE AQUI → seus dados de contato (um lugar só, o resto do
   site usa estes valores automaticamente)
   ============================================================ */
const CONFIG = {
  // Número com DDI + DDD, apenas dígitos. Ex.: 5583912345678
  whatsapp: '5583999999999',
  // Mensagem inicial quando alguém clica no WhatsApp
  mensagemPadrao: 'Olá! Vim pelo site e quero conversar.',
  email: 'contato@seudominio.com.br',
};

/* ---------- Liga os links de WhatsApp e e-mail ---------- */
const linkZap = (texto) =>
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;

document.querySelectorAll('[data-whatsapp]').forEach((el) => {
  el.href = linkZap(CONFIG.mensagemPadrao);
});
document.querySelectorAll('[data-email]').forEach((el) => {
  el.href = `mailto:${CONFIG.email}`;
});
const emailVisivel = document.getElementById('email-visivel');
if (emailVisivel) emailVisivel.textContent = CONFIG.email;

/* ---------- Ano atual no rodapé ---------- */
document.getElementById('ano').textContent = new Date().getFullYear();

/* ---------- Header com borda + barra de progresso + botão topo ---------- */
const header = document.getElementById('header');
const progresso = document.getElementById('progresso');
const topoBtn = document.getElementById('topo-btn');

function aoRolar() {
  const y = window.scrollY;
  header.classList.toggle('rolado', y > 10);
  topoBtn.classList.toggle('visivel', y > 600);

  const total = document.documentElement.scrollHeight - window.innerHeight;
  progresso.style.width = total > 0 ? `${(y / total) * 100}%` : '0%';
}
window.addEventListener('scroll', aoRolar, { passive: true });
aoRolar();

topoBtn.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);

/* ---------- Menu mobile ---------- */
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  const aberto = navLinks.classList.toggle('aberto');
  menuBtn.classList.toggle('aberto', aberto);
  menuBtn.setAttribute('aria-expanded', aberto);
});
navLinks.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    navLinks.classList.remove('aberto');
    menuBtn.classList.remove('aberto');
    menuBtn.setAttribute('aria-expanded', 'false');
  })
);

/* ---------- Link ativo no menu conforme a seção visível ---------- */
const secoes = document.querySelectorAll('section[id]');
const linksMenu = document.querySelectorAll('.nav-links a:not(.btn)');

const espiao = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) {
        linksMenu.forEach((l) =>
          l.classList.toggle('ativo', l.getAttribute('href') === `#${e.target.id}`)
        );
      }
    });
  },
  { rootMargin: '-45% 0px -50% 0px' }
);
secoes.forEach((s) => espiao.observe(s));

/* ---------- Animação de entrada (com atraso em cascata) ---------- */
document.querySelectorAll('.grade, .passos, .valores, .contato-info').forEach((grupo) => {
  grupo.querySelectorAll('.revelar').forEach((el, i) => {
    el.style.setProperty('--atraso', `${i * 0.09}s`);
  });
});

const revelador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visivel');
        revelador.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.revelar').forEach((el) => revelador.observe(el));

/* ---------- Contadores animados do hero ---------- */
function animarContador(el) {
  const alvo = parseInt(el.dataset.valor, 10);
  const duracao = 1600;
  const inicio = performance.now();

  function passo(agora) {
    const progressoAnim = Math.min((agora - inicio) / duracao, 1);
    const suave = 1 - Math.pow(1 - progressoAnim, 3); // ease-out
    el.textContent = Math.round(alvo * suave);
    if (progressoAnim < 1) requestAnimationFrame(passo);
  }
  requestAnimationFrame(passo);
}

const observadorContador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) {
        animarContador(e.target);
        observadorContador.unobserve(e.target);
      }
    });
  },
  { threshold: 0.6 }
);
document.querySelectorAll('.contador').forEach((el) => observadorContador.observe(el));

/* ---------- Faixa de tecnologias (duplica a lista para o loop infinito) ---------- */
const faixa = document.getElementById('faixa-lista');
if (faixa) {
  const copia = faixa.cloneNode(true);
  copia.setAttribute('aria-hidden', 'true');
  copia.removeAttribute('id');
  faixa.parentElement.appendChild(copia);
}

/* ---------- Formulário → abre o WhatsApp com a mensagem pronta ---------- */
const form = document.getElementById('form-contato');
if (form) {
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const dados = new FormData(form);
    const texto = [
      `Olá! Meu nome é ${dados.get('nome')}.`,
      `Assunto: ${dados.get('assunto')}`,
      '',
      `${dados.get('mensagem')}`,
      '',
      `E-mail para retorno: ${dados.get('email')}`,
    ].join('\n');

    window.open(linkZap(texto), '_blank', 'noopener');
  });
}
