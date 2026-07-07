import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import "../styles/aurora.css";
import logoAsset from "../assets/aurora-logo.png.asset.json";
import larissaAsset from "../assets/aurora-larissa.jpg.asset.json";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5511975938485&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20terapia";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurora Mental — Psicologia Online com Base Científica" },
      {
        name: "description",
        content:
          "Terapia online com psicólogas especializadas em TCC. Para mulheres que vivem com ansiedade, sobrecarga e querem mais leveza na vida. Agende seu Encontro Aurora gratuitamente.",
      },
      { property: "og:title", content: "Aurora Mental — Psicologia Online com Base Científica" },
      {
        property: "og:description",
        content:
          "Terapia online com psicólogas especializadas em TCC. Agende seu Encontro Aurora gratuitamente.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: AuroraLanding,
});

const sintomas = [
  {
    icon: "😮‍💨",
    titulo: "Ansiedade constante",
    texto:
      "A cabeça não para. Preocupações com o futuro, insônia, aquela sensação de que algo vai dar errado.",
  },
  {
    icon: "🔋",
    titulo: "Sobrecarga e esgotamento",
    texto:
      "Você dá conta de tudo — trabalho, relacionamentos, família — mas por dentro está no limite.",
  },
  {
    icon: "💔",
    titulo: "Relacionamentos que drenam",
    texto:
      "Dificuldade em se posicionar, colocar limites, ou padrões que se repetem e você não consegue mudar.",
  },
  {
    icon: "🪞",
    titulo: "Autoestima abalada",
    texto:
      "Aquela voz interna que questiona se você é boa o suficiente. Em tudo. O tempo todo.",
  },
  {
    icon: "😶‍🌫️",
    titulo: "Culpa que não passa",
    texto:
      "Você se cobra por tudo, fica ruminando situações passadas, e não consegue se perdoar.",
  },
  {
    icon: "🧭",
    titulo: "Falta de clareza e direção",
    texto:
      "Sensação de estar perdida, sem saber o que quer — ou por que as coisas não estão indo bem.",
  },
];

const passos = [
  {
    num: "1",
    titulo: "Você entra em contato pelo WhatsApp",
    texto:
      "Nossa equipe responde rapidamente. Sem burocracia, sem formulários longos. Uma conversa simples para entender o que você está buscando.",
  },
  {
    num: "2",
    titulo: "Encontro Aurora — 20 minutos gratuitos",
    texto:
      "Uma conversa inicial por vídeo com a psicóloga. Você conta o que está vivendo, entende como podemos ajudar, e conhece a profissional antes de qualquer compromisso. Sem pressão.",
  },
  {
    num: "3",
    titulo: "Início do processo terapêutico",
    texto:
      "Sessões semanais online com duração de 50 minutos. Não é só conversa, é um caminho estruturado de mudança.",
  },
  {
    num: "4",
    titulo: "Resultados que aparecem na vida real",
    texto:
      "Clareza mental. Relacionamentos mais saudáveis. Ansiedade sob controle. Limites estabelecidos. A transformação não fica só na sessão — ela aparece no dia a dia.",
  },
];

const credenciais = [
  { icon: "🎓", texto: "Fundadora e supervisora clínica da Aurora Mental" },
  { icon: "🔬", texto: "Especialista em TCC e Psicopatologia" },
  { icon: "👥", texto: "Toda a equipe formada em TCC e orientada por mim" },
  { icon: "💻", texto: "Atendimento 100% online — em qualquer lugar do Brasil" },
];

const depoimentos = [
  {
    inicial: "G",
    nome: "Giselle B. Parente",
    texto:
      "Quando a ansiedade me controlava, não conseguia imaginar como eu estaria lidando com tudo isso sem a terapia. Hoje consigo levar a vida mais leve. Ela faz parte da minha evolução nesses últimos anos — profissional e pessoal.",
  },
  {
    inicial: "P",
    nome: "Paula Lima",
    texto:
      "A ansiedade chegou como um furacão e me limitou a viver coisas que eu amava. Com muito esforço e fé tudo melhora. Obrigada Larissa, por cada sessão. Você mudou a minha vida.",
  },
  {
    inicial: "G",
    nome: "Gabriela Quincas",
    texto:
      "Conheci a Lari num dos momentos mais difíceis da minha vida. Eu me sentia perdida, como se nada fizesse sentido. Foi com ela que aprendi, pouco a pouco, a colocar para fora os medos, as dores, os desejos mais profundos... e foi assim que algo em mim começou a florescer.",
  },
  {
    inicial: "F",
    nome: "Fernanda Feitosa",
    texto:
      "Comecei a fazer terapia meio \"escondido\" de todos — tinha um pouco de preconceito no início. Mas durou pouco. Passei a amar terapia, a falar pra todo mundo. Isso mudou a minha vida, meu jeito de pensar e de cuidar da minha família.",
  },
  {
    inicial: "M",
    nome: "Marília Teodoro",
    texto:
      "A terapia tem sido uma jornada de autoconhecimento e redescoberta da minha autoestima, além de ter possibilitado o controle das minhas crises de ansiedade. É muito bom poder contar com a certeza de estar confiando na pessoa certa.",
  },
  {
    inicial: "E",
    nome: "Eduarda Wyler",
    texto:
      "Ela me tirou do fundo do poço, de um lugar que eu não tinha mais esperança de sair. Sinto até que ela é minha melhor amiga. Super recomendo!",
  },
  {
    inicial: "H",
    nome: "Heloiza Nascimento",
    texto:
      "Sou paciente há mais de três anos. A Dra. Larissa sempre foi muito atenciosa e com as atividades para conhecimento próprio fui entendendo realmente o significado das coisas. Muito obrigada por tudo.",
  },
  {
    inicial: "C",
    nome: "Caroline Alves",
    texto:
      "Sou paciente da Lari a alguns meses, desde a primeira consulta ela tem sido essencial pra mim, muito inteligente, sabe do que está falando, compreensiva... Até pessoas próximas perceberam a minha mudança. Todo mundo deveria fazer terapia e a Lari com certeza é minha indicação.",
  },
  {
    inicial: "L",
    nome: "Lindsey Ariele",
    texto:
      "No início fiquei com um pouco de \"preconceito\", mas nas primeiras sessões, me senti à vontade, o profissionalismo e cuidado da terapeuta fizeram eu ter mais segurança e conseguir me soltar. Uma excelente profissional, atenciosa, dedicada e muito boa no que faz. Melhor psicóloga.",
  },
  {
    inicial: "J",
    nome: "Jaquelline Sant'Anna",
    texto:
      "Ela desmistificou a minha crença errada de que terapia não funcionava, que era coisa de louco e que era só uma conversinha com uma outra pessoa. Terapia ajuda muito, eu mudei completamente. Super indico a Lari, do fundo do coração.",
  },
  {
    inicial: "M",
    nome: "Mayara Santana",
    texto:
      "Ser atendida por uma profissional assim é um privilégio. A cada sessão percebi o quão incrível e atenciosa que a Lari é. Seu conhecimento, forma de trabalho, clareza nas explicações e capacidade que tem de nos fazer organizar os pensamentos sempre me impressiona. Na verdade, cada sessão é uma aula.",
  },
  {
    inicial: "G",
    nome: "Geovana Salgueiro",
    texto:
      "Faz quase um ano que me consulto com a Larissa e senti uma evolução absurda, em todas as áreas da minha vida, principalmente com relação à autoestima, segurança e ansiedade. Hoje consigo identificar com mais clareza os meus sentimentos. O trabalho dela tem transformado a minha vida!",
  },
  {
    inicial: "G",
    nome: "Gabriele Ramos",
    texto:
      "A terapia vem me fazendo virar algumas chaves no dia a dia. E ter trocas semanais com uma profissional que te entende, acolhe, te ajuda a enxergar em uma visão de um todo faz a terapia não ser uma obrigação mas um compromisso genuíno. Obrigada Lari, por todo o profissionalismo e carinho!",
  },
];

const INSTAGRAM_URL = "https://instagram.com/psicologalarissacarvalho";

const instagramPosts = [
  {
    id: 1,
    capa: "/instagram/instagram-post1-01.png",
    slides: [
      "/instagram/instagram-post1-01.png", "/instagram/instagram-post1-02.png", "/instagram/instagram-post1-03.png",
      "/instagram/instagram-post1-04.png", "/instagram/instagram-post1-05.png", "/instagram/instagram-post1-06.png",
      "/instagram/instagram-post1-07.png", "/instagram/instagram-post1-08.png", "/instagram/instagram-post1-09.png",
    ],
  },
  {
    id: 2,
    capa: "/instagram/instagram-post2-01.png",
    slides: [
      "/instagram/instagram-post2-01.png", "/instagram/instagram-post2-02.png", "/instagram/instagram-post2-03.png",
      "/instagram/instagram-post2-04.png", "/instagram/instagram-post2-05.png", "/instagram/instagram-post2-06.png",
      "/instagram/instagram-post2-07.png", "/instagram/instagram-post2-08.png", "/instagram/instagram-post2-09.png",
      "/instagram/instagram-post2-10.png", "/instagram/instagram-post2-11.png",
    ],
  },
  {
    id: 3,
    capa: "/instagram/instagram-post3-01.png",
    slides: ["/instagram/instagram-post3-01.png"],
  },
  {
    id: 4,
    capa: "/instagram/instagram-post4-01.png",
    slides: [
      "/instagram/instagram-post4-01.png", "/instagram/instagram-post4-02.png", "/instagram/instagram-post4-03.png",
      "/instagram/instagram-post4-04.png", "/instagram/instagram-post4-05.png", "/instagram/instagram-post4-06.png",
    ],
  },
  {
    id: 5,
    capa: "/instagram/instagram-post5-01.png",
    slides: [
      "/instagram/instagram-post5-01.png", "/instagram/instagram-post5-02.png", "/instagram/instagram-post5-03.png",
      "/instagram/instagram-post5-04.png", "/instagram/instagram-post5-05.png", "/instagram/instagram-post5-06.png",
      "/instagram/instagram-post5-07.png", "/instagram/instagram-post5-08.png", "/instagram/instagram-post5-09.png",
      "/instagram/instagram-post5-10.png",
    ],
  },
  {
    id: 6,
    capa: "/instagram/instagram-post6-01.png",
    slides: [
      "/instagram/instagram-post6-01.png", "/instagram/instagram-post6-02.png", "/instagram/instagram-post6-03.png",
      "/instagram/instagram-post6-04.png", "/instagram/instagram-post6-05.png", "/instagram/instagram-post6-06.png",
      "/instagram/instagram-post6-07.png",
    ],
  },
];

const objecoes = [
  {
    pergunta: '"Não tenho tempo para terapia na minha rotina."',
    forte: "O atendimento é 100% online.",
    resposta:
      "Uma sessão semanal de onde você estiver. Sem deslocamento, sem trânsito. E se você não tem nem 50 minutos por semana para se cuidar, isso já é um sinal de que você precisa disso mais do que imagina.",
  },
  {
    pergunta: '"É muito caro para o meu momento."',
    forte: "Temos psicólogas com diferentes valores de sessão.",
    resposta:
      "A partir de R$100. E antes de qualquer sessão paga, você tem o Encontro Aurora — 20 minutos gratuitos para entender se faz sentido para você.",
  },
  {
    pergunta: '"Não sei se terapia funciona pra mim."',
    forte: "Entendemos. A maioria das nossas pacientes também chegou assim.",
    resposta:
      "Por isso existe o Encontro Aurora: sem custo e sem compromisso. Você conhece a psicóloga, conta o que está vivendo e vê se faz sentido. A decisão é sempre sua.",
  },
  {
    pergunta: '"Acho que dá pra resolver sozinha."',
    forte: 'Talvez dê. Mas quanto tempo você já está "indo levando"?',
    resposta:
      "A TCC não é um espaço para desabafar — é um processo com técnicas e exercícios concretos que ajudam a entender a raiz do problema e a mudar padrões que não dependem só de força de vontade.",
  },
  {
    pergunta: '"Tenho vergonha ou medo de me abrir."',
    forte: "Você não precisa chegar pronta.",
    resposta:
      "Muitas pacientes chegaram sem saber nem como começar a falar. O ambiente aqui é sem julgamento. Você pode trazer o que parece pequeno, fútil, ou difícil demais. Tudo tem espaço.",
  },
];

function useRevealOnScroll() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".aurora-page .reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function ChatIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function AuroraLanding() {
  useRevealOnScroll();
  const trackRef = useRef<HTMLDivElement>(null);
  const total = depoimentos.length;
  // Renderiza 3 cópias e começa no bloco do meio, para dar loop nos dois sentidos
  const loopCards = [...depoimentos, ...depoimentos, ...depoimentos];
  const [pos, setPos] = useState(total);
  const activeDot = ((pos % total) + total) % total;

  const goTo = (i: number) => setPos(total + (((i % total) + total) % total));
  const next = () => setPos((p) => p + 1);
  const prev = () => setPos((p) => p - 1);

  // Loop automático (pausa ao passar o mouse)
  const pausedRef = useRef(false);
  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) setPos((p) => p + 1);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  // Posiciona o track conforme o depoimento ativo
  const mountedRef = useRef(false);
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".depo-card");
    if (!card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap || "24") || 24;
    const step = card.offsetWidth + gap;
    track.style.transition = mountedRef.current ? "transform 0.5s ease" : "none";
    track.style.transform = `translateX(-${pos * step}px)`;
    mountedRef.current = true;

    // Quando sai do bloco do meio, reposiciona sem animação (loop infinito)
    if (pos >= total * 2 || pos < total) {
      const onEnd = () => {
        const normalized = total + (((pos % total) + total) % total);
        track.style.transition = "none";
        track.style.transform = `translateX(-${normalized * step}px)`;
        setPos(normalized);
      };
      track.addEventListener("transitionend", onEnd, { once: true });
      return () => track.removeEventListener("transitionend", onEnd);
    }
  }, [pos, total]);

  // Lightbox do Instagram
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);
  const openPost = (i: number) => {
    setLightbox(i);
    setSlide(0);
  };
  const closePost = () => setLightbox(null);
  const activePost = lightbox !== null ? instagramPosts[lightbox] : null;
  const nextSlide = () =>
    setSlide((s) => (activePost ? (s + 1) % activePost.slides.length : 0));
  const prevSlide = () =>
    setSlide((s) =>
      activePost ? (s - 1 + activePost.slides.length) % activePost.slides.length : 0,
    );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePost();
      else if (e.key === "ArrowRight") nextSlide();
      else if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox, activePost]);

  return (
    <div className="aurora-page">
      {/* NAV */}
      <nav>
        <a href="#hero" className="nav-logo" aria-label="Aurora Mental">
          <img src={logoAsset.url} alt="Aurora Mental" />
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="nav-cta">
          Agendar Encontro Aurora
        </a>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-content">
          <span className="hero-eyebrow">Psicologia Online · Atendimento Individual</span>
          <h1 className="hero-headline">
            <span className="linha">Você cuida de tudo.</span>
            <span className="linha">Mas está esquecendo</span>
            <span className="linha">de se cuidar.</span>
          </h1>
          <p className="hero-sub">
            Para mulheres que vivem no limite — entre a ansiedade, a sobrecarga e a sensação de que
            deveriam dar conta de tudo. Com a Terapia Cognitivo Comportamental, você vai entender a
            raiz do problema e terá ferramentas para alcançar grandes viradas de chave.
          </p>
          <div className="hero-actions">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-primary">
              <ChatIcon />
              Quero meu Encontro Aurora
            </a>
            <a href="#como-funciona" className="btn-secondary">
              Como funciona →
            </a>
          </div>
          <div className="hero-badges">
            <span className="badge">
              <span className="badge-dot" />
              20 min gratuitos
            </span>
            <span className="badge">
              <span className="badge-dot" />
              100% online
            </span>
            <span className="badge">
              <span className="badge-dot" />
              Seg a sex, 09h às 21h
            </span>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img
            src={larissaAsset.url}
            alt="Psicóloga Larissa Carvalho — Aurora Mental"
            loading="eager"
          />
          <div className="hero-image-overlay" />
        </div>
      </section>

      {/* IDENTIFICAÇÃO */}
      <section id="identificacao">
        <div className="container">
          <p className="sec-eyebrow reveal">Você se reconhece aqui?</p>
          <h2 className="sec-titulo reveal">
            Se você está passando por isso,
            <br />
            você está no lugar certo.
          </h2>
          <div className="sintomas-grid reveal">
            {sintomas.map((s) => (
              <div className="sintoma-item" key={s.titulo}>
                <div className="sintoma-icon">{s.icon}</div>
                <div className="sintoma-texto">
                  <strong>{s.titulo}</strong>
                  {s.texto}
                </div>
              </div>
            ))}
          </div>
          <div className="identificacao-cta reveal">
            <p>"Você não precisa continuar se sentindo assim."</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-primary">
              Quero começar minha mudança
            </a>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona">
        <div className="container">
          <p className="sec-eyebrow reveal">Como funciona</p>
          <h2 className="sec-titulo reveal">
            Terapia online que gera
            <br />
            resultados reais.
          </h2>
          <div className="passos">
            {passos.map((p) => (
              <div className="passo reveal" key={p.num}>
                <div className="passo-num">{p.num}</div>
                <div className="passo-conteudo">
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="encontro-destaque reveal">
            <div>
              <span className="encontro-tag">✦ Gratuito</span>
              <h3>Encontro Aurora</h3>
              <p>
                Uma conversa de 20 minutos por vídeo, sem custo e sem compromisso. Para você entender
                se a Aurora Mental é o lugar certo para você.
              </p>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-primary">
              Agendar agora
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE A LARISSA */}
      <section id="sobre">
        <div className="container-wide">
          <div className="sobre-grid">
            <div className="sobre-foto-wrap reveal">
              <img src={larissaAsset.url} alt="Psicóloga Larissa Carvalho" className="sobre-foto" />
              <div className="sobre-foto-badge">
                <strong>+8</strong>
                anos de
                <br />
                experiência
              </div>
            </div>
            <div className="sobre-conteudo reveal">
              <p className="sec-eyebrow">Quem cuida de você</p>
              <h2 className="sec-titulo">Psicóloga Larissa Carvalho</h2>
              <p className="sobre-desc">
                Sou a Psicóloga Larissa Carvalho, especialista em Terapia Cognitivo-Comportamental e
                Psicopatologia, e fundei a Aurora Mental com uma visão clara: oferecer um atendimento
                que vai além do desabafo. Um espaço onde cada sessão segue um caminho estruturado,
                com técnicas e protocolos com validação científica.
              </p>
              <p className="sobre-desc">
                Todas as psicólogas da Aurora são acompanhadas e orientadas por mim, compartilhando
                da mesma abordagem, da mesma cultura de cuidado e do mesmo compromisso com a sua
                evolução real. Você não precisa chegar com tudo resolvido. Pode trazer o que parece
                pequeno demais para contar a qualquer pessoa. Aqui, nada é fútil.
              </p>
              <div className="credenciais">
                {credenciais.map((c) => (
                  <div className="credencial" key={c.texto}>
                    <div className="credencial-icon">{c.icon}</div>
                    <span>{c.texto}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos">
        <div className="container">
          <p className="sec-eyebrow reveal">O que dizem nossas pacientes</p>
          <h2 className="sec-titulo reveal">
            Histórias de quem
            <br />
            decidiu se cuidar.
          </h2>
        </div>
        <div
          className="depo-track-wrap"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <div className="depo-track" ref={trackRef}>
            {loopCards.map((d, i) => (
              <div className="depo-card" key={i}>
                <span className="depo-aspas">"</span>
                <p className="depo-texto">{d.texto}</p>
                <div className="depo-autor">
                  <div className="depo-avatar">{d.inicial}</div>
                  <div>
                    <span className="depo-nome">{d.nome}</span>
                    <span className="depo-estrelas">★★★★★</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="depo-nav container reveal">
          <button
            type="button"
            className="depo-arrow"
            aria-label="Depoimento anterior"
            onClick={prev}
          >
            ‹
          </button>
          <div className="depo-dots">
            {depoimentos.map((_, i) => (
              <button
                key={i}
                type="button"
                className={"depo-dot" + (i === activeDot ? " active" : "")}
                aria-label={"Depoimento " + (i + 1)}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="depo-arrow"
            aria-label="Próximo depoimento"
            onClick={next}
          >
            ›
          </button>
        </div>
      </section>

      {/* OBJEÇÕES */}
      <section id="objecoes">
        <div className="container">
          <p className="sec-eyebrow reveal">Suas dúvidas</p>
          <h2 className="sec-titulo reveal">
            O que te impede
            <br />
            de dar o primeiro passo?
          </h2>
          <div className="objecoes-list">
            {objecoes.map((o) => (
              <div className="objecao-item reveal" key={o.pergunta}>
                <p className="objecao-pergunta">{o.pergunta}</p>
                <div className="objecao-resposta">
                  <strong>{o.forte}</strong>
                  {o.resposta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="cta-final">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <img src={logoAsset.url} alt="Aurora Mental" className="cta-final-logo" />
          <div className="cta-gratuito">✦ Sem custo · Sem compromisso</div>
          <h2 className="cta-titulo">
            Dê o primeiro passo.
            <br />
            <em>Você merece esse cuidado.</em>
          </h2>
          <p className="cta-sub">
            Agende seu Encontro Aurora — uma conversa de 20 minutos por vídeo, gratuita, para
            entender como podemos te ajudar.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-wpp">
            <WhatsappIcon />
            Quero meu Encontro Aurora gratuito
          </a>
          <p className="cta-nota">Resposta rápida via WhatsApp · Atendimento em todo o Brasil</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>
          © 2026 Aurora Mental — Clínica de Psicologia
          <br />
          Psicóloga Larissa Carvalho · CRP disponível mediante solicitação
          <br />
          <a href="https://api.whatsapp.com/send?phone=5511975938485" target="_blank" rel="noopener">
            WhatsApp
          </a>{" "}
          ·{" "}
          <a
            href="https://instagram.com/psicologalarissacarvalho"
            target="_blank"
            rel="noopener"
          >
            Instagram
          </a>
        </p>
      </footer>
    </div>
  );
}
