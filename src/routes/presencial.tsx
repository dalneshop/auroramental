import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import "../styles/aurora.css";
import logoAsset from "../assets/aurora-logo.png.asset.json";
import larissaAsset from "../assets/aurora-larissa.jpg.asset.json";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5511975938485&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento%20presencial%20no%20consult%C3%B3rio";

const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Jo%C3%A3o+XXIII+118+Jardim+Paulista+Campo+Limpo+Paulista+SP";

const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Av.+Jo%C3%A3o+XXIII,+118+-+Jardim+Paulista,+Campo+Limpo+Paulista+-+SP&output=embed";

export const Route = createFileRoute("/presencial")({
  head: () => ({
    meta: [
      { title: "Aurora Mental — Psicologia Presencial em Campo Limpo Paulista" },
      {
        name: "description",
        content:
          "Atendimento presencial em consultório aconchegante no Centro de Campo Limpo Paulista. Psicólogas especializadas em TCC. Sessões a partir de R$130.",
      },
      {
        property: "og:title",
        content: "Aurora Mental — Psicologia Presencial em Campo Limpo Paulista",
      },
      {
        property: "og:description",
        content:
          "Atendimento presencial em consultório aconchegante no Centro de Campo Limpo Paulista. Psicólogas especializadas em TCC. Sessões a partir de R$130.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/presencial" },
    ],
    links: [{ rel: "canonical", href: "/presencial" }],
  }),
  component: PresencialLanding,
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
      "Nossa equipe responde rapidamente para entender o que você busca e agendar seu primeiro contato.",
  },
  {
    num: "2",
    titulo: "Encontro Aurora — 20 minutos gratuitos (por vídeo)",
    texto:
      "Mesmo para quem vai preferir o presencial nas sessões seguintes, o primeiro contato é uma conversa online e gratuita de 20 minutos. Você conhece a psicóloga e entende como podemos ajudar, sem compromisso.",
  },
  {
    num: "3",
    titulo: "Início das sessões presenciais no consultório",
    texto:
      "Sessões semanais de 50 minutos, no nosso espaço em Campo Limpo Paulista. Valor a partir de R$130 por sessão.",
  },
  {
    num: "4",
    titulo: "Resultados que aparecem na vida real",
    texto:
      "Clareza mental. Relacionamentos mais saudáveis. Ansiedade sob controle. Limites estabelecidos. A transformação não fica só na sessão — ela aparece no dia a dia.",
  },
];

const credenciais = [
  {
    icon: "🎓",
    texto: "Fundadora e supervisora clínica da Aurora Mental — CRP 06/154518",
  },
  { icon: "🔬", texto: "Especialista em TCC e Psicopatologia" },
  {
    icon: "👥",
    texto: "Equipe de psicólogas formada em TCC, atendendo também presencialmente",
  },
  { icon: "🏠", texto: "Consultório próprio em Campo Limpo Paulista" },
];

const galeria = [
  {
    arquivo: "consultorio-sala-espera-1.jpg",
    alt: "Sala de espera do consultório com sofás verdes e mesa de trabalho",
    classe: "espaco-card espaco-card-lg",
  },
  {
    arquivo: "consultorio-detalhe-cha.jpg",
    alt: "Detalhe da mesa de chá dourada no consultório",
    classe: "espaco-card",
  },
  {
    arquivo: "consultorio-recepcao.jpg",
    alt: "Recepção com sofá bege, tapete e planta",
    classe: "espaco-card",
  },
  {
    arquivo: "consultorio-detalhe-flores.jpg",
    alt: "Orquídeas ao lado do certificado Melhor do Ano 2023",
    classe: "espaco-card espaco-card-wide",
  },
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
      'Comecei a fazer terapia meio "escondido" de todos — tinha um pouco de preconceito no início. Mas durou pouco. Passei a amar terapia, a falar pra todo mundo. Isso mudou a minha vida, meu jeito de pensar e de cuidar da minha família.',
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
      'No início fiquei com um pouco de "preconceito", mas nas primeiras sessões, me senti à vontade, o profissionalismo e cuidado da terapeuta fizeram eu ter mais segurança e conseguir me soltar. Uma excelente profissional, atenciosa, dedicada e muito boa no que faz. Melhor psicóloga.',
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

const objecoes = [
  {
    pergunta: '"Não tenho tempo, o deslocamento até aí é complicado."',
    forte: "Estamos no Centro de Campo Limpo Paulista, de fácil acesso.",
    resposta:
      "Pensamos no espaço para que chegar até aqui seja simples. E o primeiro contato (Encontro Aurora) é online, então você só se desloca quando já sabe que faz sentido para você.",
  },
  {
    pergunta: '"É muito caro para o meu momento."',
    forte: "A sessão presencial custa R$130.",
    resposta:
      "E antes disso, você tem o Encontro Aurora — 20 minutos gratuitos por vídeo, para entender se faz sentido, sem nenhum custo ou compromisso.",
  },
  {
    pergunta: '"Prefiro online, é mais prático."',
    forte: "Entendemos — e por isso oferecemos os dois formatos.",
    resposta:
      "O presencial é para quem sente que precisa de um espaço físico, fora de casa, para se abrir de verdade. Se em algum momento fizer mais sentido migrar para o online, isso também é possível.",
  },
  {
    pergunta: '"Tenho vergonha ou medo de ir a um consultório."',
    forte: "Você não precisa chegar pronta.",
    resposta:
      "Nosso espaço foi pensado para acolher, sem julgamento, com calma. Muitas pacientes chegam sem saber nem como começar — e é exatamente para isso que estamos aqui.",
  },
  {
    pergunta: '"Não sei se terapia presencial funciona pra mim."',
    forte: "A maioria das nossas pacientes também chegou assim.",
    resposta:
      "Por isso existe o Encontro Aurora: uma conversa online, gratuita e sem compromisso, antes de qualquer sessão presencial. A decisão de continuar é sempre sua.",
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

function PresencialLanding() {
  useRevealOnScroll();
  const trackRef = useRef<HTMLDivElement>(null);
  const total = depoimentos.length;
  const loopCards = [...depoimentos, ...depoimentos, ...depoimentos];
  const [pos, setPos] = useState(total);
  const activeDot = ((pos % total) + total) % total;

  const goTo = (i: number) => setPos(total + (((i % total) + total) % total));
  const next = () => setPos((p) => p + 1);
  const prev = () => setPos((p) => p - 1);

  const pausedRef = useRef(false);
  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) setPos((p) => p + 1);
    }, 6000);
    return () => clearInterval(id);
  }, []);

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

  return (
    <div className="aurora-page">
      {/* NAV */}
      <nav>
        <a href="#hero" className="nav-logo" aria-label="Aurora Mental">
          <img src={logoAsset.url} alt="Aurora Mental" />
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="nav-cta">
          Agendar Sessão Presencial
        </a>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-content">
          <span className="hero-eyebrow">
            Psicologia Presencial · Consultório em Campo Limpo Paulista
          </span>
          <h1 className="hero-headline">
            <span className="linha">Às vezes, o cuidado</span>
            <span className="linha">pede um espaço</span>
            <span className="linha">só seu.</span>
          </h1>
          <p className="hero-sub">
            Um consultório pensado para acolher — luz natural, conforto e presença. Para quem sente
            que a terapia também é sobre o ambiente em que ela acontece, e não só sobre a conversa.
          </p>
          <div className="hero-actions">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-primary">
              <ChatIcon />
              Quero agendar minha sessão presencial
            </a>
            <a href="#espaco" className="btn-secondary">
              Conhecer o espaço →
            </a>
          </div>
          <div className="hero-badges">
            <span className="badge">
              <span className="badge-dot" />
              Consultório no Centro de Campo Limpo Paulista
            </span>
            <span className="badge">
              <span className="badge-dot" />
              Sessão presencial R$130
            </span>
            <span className="badge">
              <span className="badge-dot" />
              Seg a sex, 09h às 21h
            </span>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img
            src="/hero-consultorio.jpg"
            alt="Consultório presencial da Aurora Mental em Campo Limpo Paulista"
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
            Terapia presencial que
            <br />
            gera resultados reais.
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
                Uma conversa de 20 minutos por vídeo, sem custo e sem compromisso — o primeiro passo
                antes de começar suas sessões presenciais no consultório.
              </p>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-primary">
              Agendar agora
            </a>
          </div>
        </div>
      </section>

      {/* ESPAÇO */}
      <section id="espaco">
        <div className="container-wide">
          <p className="sec-eyebrow reveal">Nosso consultório</p>
          <h2 className="sec-titulo reveal">
            Um ambiente pensado
            <br />
            para o seu cuidado.
          </h2>
          <p className="sobre-desc reveal">
            Cada detalhe do nosso espaço foi escolhido para que você se sinta bem antes mesmo da
            sessão começar — luz natural, poltronas confortáveis, um cantinho de chá e um ambiente
            silencioso, longe da correria do dia a dia.
          </p>
          <div className="espaco-grid reveal">
            {galeria.map((g) => (
              <figure className={g.classe} key={g.arquivo}>
                <img src={`/${g.arquivo}`} alt={g.alt} loading="lazy" />
              </figure>
            ))}
          </div>
          <div className="identificacao-cta reveal" style={{ paddingTop: "40px" }}>
            <p>"Um espaço para desacelerar, respirar, e se cuidar de verdade."</p>
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="localizacao">
        <div className="container-wide">
          <p className="sec-eyebrow reveal">Onde estamos</p>
          <h2 className="sec-titulo reveal">
            Fácil de chegar,
            <br />
            fácil de se cuidar.
          </h2>
          <div className="localizacao-grid">
            <div className="localizacao-info reveal">
              <div className="credenciais">
                <div className="credencial">
                  <div className="credencial-icon">📍</div>
                  <span>
                    Av. João XXIII, nº 118 — Sala 2, Jardim Paulista, Campo Limpo Paulista - SP
                  </span>
                </div>
                <div className="credencial">
                  <div className="credencial-icon">🕒</div>
                  <span>Segunda a sexta, das 09h às 21h</span>
                </div>
                <div className="credencial">
                  <div className="credencial-icon">🧭</div>
                  <span>Localizado no Centro de Campo Limpo Paulista, fácil acesso</span>
                </div>
              </div>
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener"
                className="btn-primary"
                style={{ marginTop: "32px" }}
              >
                Como chegar
              </a>
            </div>
            <div className="localizacao-mapa reveal">
              <iframe
                title="Mapa do consultório Aurora Mental em Campo Limpo Paulista"
                src={MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "20px" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE A LARISSA */}
      <section id="sobre">
        <div className="container-wide">
          <div className="sobre-grid">
            <div className="sobre-foto-wrap reveal">
              <img
                src={larissaAsset.url}
                alt="Psicóloga Larissa Carvalho no consultório da Aurora Mental"
                className="sobre-foto"
              />
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
                Sou a Psicóloga Larissa Carvalho, CRP 06/154518, especialista em Terapia
                Cognitivo-Comportamental e Psicopatologia, e fundei a Aurora Mental com uma visão
                clara: oferecer um atendimento que vai além do desabafo — um espaço estruturado, com
                técnicas e protocolos com validação científica.
              </p>
              <p className="sobre-desc">
                No consultório presencial, além de mim, outras psicólogas da nossa equipe também
                atendem — todas formadas em TCC e orientadas diretamente por mim, compartilhando da
                mesma abordagem e do mesmo compromisso com a sua evolução real.
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
            de vir até nós?
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
            <em>Venha nos conhecer.</em>
          </h2>
          <p className="cta-sub">
            Agende seu Encontro Aurora — uma conversa online e gratuita de 20 minutos — e depois
            venha para o nosso consultório em Campo Limpo Paulista.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-wpp">
            <WhatsappIcon />
            Quero agendar minha sessão presencial
          </a>
          <p className="cta-nota">
            Resposta rápida via WhatsApp · Consultório no Centro de Campo Limpo Paulista
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>
          © 2026 Aurora Mental — Clínica de Psicologia
          <br />
          Psicóloga Larissa Carvalho · CRP 06/154518
          <br />
          Av. João XXIII, nº 118 — Sala 2, Jardim Paulista, Campo Limpo Paulista - SP
          <br />
          <a href="https://api.whatsapp.com/send?phone=5511975938485" target="_blank" rel="noopener">
            WhatsApp
          </a>{" "}
          ·{" "}
          <a href="https://instagram.com/psicologalarissacarvalho" target="_blank" rel="noopener">
            Instagram
          </a>
        </p>
      </footer>
    </div>
  );
}
