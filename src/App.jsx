import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { 
  Database, Server, Layout, Cpu, Code2, Terminal, 
  Github, Linkedin, Mail, Globe, Moon, Sun, 
  MapPin, ExternalLink, Music, Sparkles, 
  ArrowRight, Box, ShieldCheck, Workflow, CheckCircle, 
  Send, AlertCircle, Users, Brain, Clock, Layers,
  FileText, ShieldAlert
} from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const content = {
  pt: {
    hero: {
      role: 'Developer & AI Enthusiast',
      title: 'Código com Alma & Lógica',
      subtitle: 'Desenvolvedora apaixonada por arquitetura de software, automação e inteligência artificial. Transformo regras de negócio complexas em sistemas elegantes e escaláveis.',
      location: 'Sorocaba, SP',
      btnProject: 'Ver Portfolio',
      btnContact: 'Entrar em Contato',
      btnCV: 'Baixar CV' 
    },
    about: {
      title: 'A Arquiteta por trás do Código',
      desc1: 'Minha jornada técnica une a robustez do desenvolvimento Back-end com a versatilidade do Front-end e a inovação da IA. Atualmente cursando Análise e Desenvolvimento de Sistemas na UNISO.',
      desc2: 'Tenho experiência prática na criação de sistemas desktop (Python/SQL) e aplicações web modernas. Meu foco é construir soluções completas, integrando APIs de IA com interfaces responsivas.',
      skillsTitle: 'Arsenal Técnico & Humano'
    },
    skills: {
      cat1: 'Back-end & Arquitetura',
      cat2: 'Banco de Dados',
      cat3: 'Segurança & Infra',
      cat4: 'Frontend & UI',
      cat5: 'Soft Skills'
    },
    projects: {
      title: 'Projetos em Destaque',
      btnCode: 'Ver Código',
      btnLive: 'Testar Online',
      btnLegacy: 'Projeto Concluído (2024)',
      p1_title: 'Belle Time - Studio System',
      p1_desc: 'Sistema de gestão completo para salões de beleza. Gerencia agendamentos e base de clientes com integridade de dados rigorosa.',
      p1_tech: ['Python', 'MySQL', 'PySide6', 'VirtualBox'],
      p1_repo: 'https://github.com/isabellascarassatii/BelleTime_Agenda',
      p2_title: 'Symphony IA - Music Agent',
      p2_desc: 'Agente inteligente que recomenda playlists musicais personalizadas utilizando a API do Groq.',
      p2_tech: ['Python', 'Groq API', 'Streamlit', 'LLM Engineering'],
      p2_repo: 'https://github.com/isabellascarassatii/SymphonyIA_ProjetoADS',
      p2_live: 'https://symphonyiaprojetoads-5dfiru6tjoubjst8kvsabn.streamlit.app/',
      p3_title: 'Robson Pinturas - Digital Presence',
      p3_desc: 'Liderança técnica no desenvolvimento de uma plataforma mobile-first com integração de WhatsApp e Google OAuth.',
      p3_tech: ['JavaScript', 'Bootstrap', 'WhatsApp API', 'OAuth 2.0'],
      p4_title: 'Umbra Sentinel - Security Audit',
      p4_desc: 'Ecossistema Full Stack de monitoramento e auditoria de logs. Implementa lógica de Honey Pot para detecção e rotulagem de acessos sensíveis em tempo real.',
      p4_tech: ['Node.js', 'MySQL', 'Railway', 'Honey Pot'],
      p4_repo: 'https://github.com/isabellascarassatii/umbra-sentinel',
      p4_live: 'https://umbra-sentinel.vercel.app'
    },
    contact: {
      title: 'Vamos criar algo incrível?',
      desc: 'Preencha o formulário abaixo. A mensagem chegará diretamente no meu e-mail profissional.',
      btn: 'Enviar Mensagem',
      sending: 'Enviando...',
      success: 'Mensagem enviada com sucesso!',
      error: 'Houve um erro ao enviar.',
      placeholderName: 'Seu Nome',
      placeholderEmail: 'Seu E-mail',
      placeholderMsg: 'Sua Mensagem'
    },
    footer: {
      copy: '© 2026 Isabella Dos Anjos. Todos os direitos reservados.'
    }
  },
  en: {
    hero: {
      role: 'Developer & AI Enthusiast',
      title: 'Code with Soul & Logic',
      subtitle: 'Developer passionate about software architecture, automation, and artificial intelligence.',
      location: 'Sorocaba, Brazil',
      btnProject: 'View Portfolio',
      btnContact: 'Get in Touch',
      btnCV: 'Download CV'
    },
    about: {
      title: 'The Architect Behind the Code',
      desc1: 'My technical journey bridges robust Back-end development with Front-end versatility and AI innovation.',
      desc2: 'I have practical experience building desktop systems and modern web applications with AI integration.',
      skillsTitle: 'Technical & Human Arsenal'
    },
    skills: {
      cat1: 'Back-end & Architecture',
      cat2: 'Database',
      cat3: 'Security & Infra',
      cat4: 'Frontend & UI',
      cat5: 'Soft Skills'
    },
    projects: {
      title: 'Featured Projects',
      btnCode: 'View Code',
      btnLive: 'Live Demo',
      btnLegacy: 'Completed Project (2024)',
      p1_title: 'Belle Time - Studio System',
      p1_desc: 'Complete management system for beauty salons. Manages scheduling and client base with strict data integrity.',
      p1_tech: ['Python', 'MySQL', 'PySide6', 'VirtualBox'],
      p1_repo: 'https://github.com/isabellascarassatii/BelleTime_Agenda',
      p2_title: 'Symphony IA - Music Agent',
      p2_desc: 'Intelligent agent that recommends personalized music playlists using the Groq API.',
      p2_tech: ['Python', 'Groq API', 'Streamlit', 'LLM Engineering'],
      p2_repo: 'https://github.com/isabellascarassatii/SymphonyIA_ProjetoADS',
      p2_live: 'https://symphonyiaprojetoads-5dfiru6tjoubjst8kvsabn.streamlit.app/',
      p3_title: 'Robson Pinturas - Digital Presence',
      p3_desc: 'Technical leadership in developing a mobile-first platform with WhatsApp integration and Google OAuth.',
      p3_tech: ['JavaScript', 'Bootstrap', 'WhatsApp API', 'OAuth 2.0'],
      p4_title: 'Umbra Sentinel - Security Audit',
      p4_desc: 'Full Stack logging and audit ecosystem. Features Honey Pot logic to detect and label sensitive access attempts in real-time.',
      p4_tech: ['Node.js', 'MySQL', 'Railway', 'Honey Pot'],
      p4_repo: 'https://github.com/isabellascarassatii/umbra-sentinel',
      p4_live: 'https://umbra-sentinel.vercel.app'
    },
    contact: {
      title: 'Let\'s build something amazing?',
      desc: 'Fill out the form below. The message will go directly to my professional email.',
      btn: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Error sending message.',
      placeholderName: 'Your Name',
      placeholderEmail: 'Your Email',
      placeholderMsg: 'Your Message'
    },
    footer: {
      copy: '© 2026 Isabella Dos Anjos. All rights reserved.'
    }
  }
};

const App = () => {
  const [lang, setLang] = useState('pt');
  const [theme, setTheme] = useState('dark');
  const form = useRef();
  const [formStatus, setFormStatus] = useState('idle');

  const t = content[lang];
  const softSkillsList = lang === 'pt' 
    ? ['Trabalho em Equipe', 'Organização', 'Comunicação Clara', 'Resolução de Problemas', 'Adaptabilidade'] 
    : ['Teamwork', 'Organization', 'Clear Communication', 'Problem Solving', 'Adaptability'];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const toggleLang = () => setLang(prev => prev === 'pt' ? 'en' : 'pt');

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    emailjs.sendForm('service_parjxqq', 'template_pkxt7e5', form.current, 'y8ylFUesGIArqOpkq')
      .then(() => {
          setFormStatus('success');
          e.target.reset();
          setTimeout(() => setFormStatus('idle'), 5000);
      }, () => {
          setFormStatus('error');
          setTimeout(() => setFormStatus('idle'), 5000);
      });
  };

  const styles = `
    :root {
      --bg-body: #0a0508; --bg-card: rgba(20, 10, 15, 0.6); --text-main: #eaddcf; 
      --text-muted: #9c8c94; --accent: #9b2242; --border: rgba(155, 34, 66, 0.2);
      --font-display: 'Playfair Display', serif; --font-body: 'Inter', sans-serif;
      --font-code: 'Fira Code', monospace;
    }
    
    /* MELHORIA DO MODO CLARO PARA EXPERIÊNCIA DO USUÁRIO */
    [data-theme="light"] {
      --bg-body: #f8f9fa; 
      --bg-card: rgba(255, 255, 255, 0.9); 
      --text-main: #1a1a1a; 
      --text-muted: #4a4a4a; 
      --accent: #800020; 
      --border: rgba(0, 0, 0, 0.1);
    }

    body { background-color: var(--bg-body) !important; color: var(--text-main) !important; font-family: var(--font-body); transition: all 0.3s; overflow-x: hidden; }
    
    a { 
      text-decoration: none !important; 
      color: inherit !important; 
      transition: 0.3s; 
    }
    a:hover { color: var(--accent) !important; }

    .text-gradient {
      background: linear-gradient(90deg, #fff, var(--accent));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
    }

    [data-theme="light"] .text-gradient {
      background: linear-gradient(90deg, var(--text-main), var(--accent));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .btn-goth { 
      border: 1px solid var(--accent); 
      color: var(--text-main); 
      padding: 12px 28px; 
      background: transparent; 
      font-family: var(--font-code); 
      border-radius: 50px; 
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      display: inline-flex; align-items: center; gap: 8px;
    }
    
    [data-theme="light"] .btn-goth {
      border-width: 1.5px;
      font-weight: 500;
    }

    .btn-goth:hover { 
      background: var(--accent); 
      color: #fff !important; 
      transform: scale(1.05);
      box-shadow: 0 0 25px rgba(155, 34, 66, 0.4); 
    }
    
    .glass-card { 
      background: var(--bg-card); 
      backdrop-filter: blur(12px);
      border: 1px solid var(--border); 
      padding: 2.5rem; 
      border-radius: 20px; 
      height: 100%; 
      transition: all 0.4s ease; 
    }
    .glass-card:hover { 
      transform: translateY(-10px); 
      border-color: var(--accent);
      box-shadow: 0 15px 35px rgba(0,0,0,0.3);
    }
    
    .nav-blur { background: rgba(10, 5, 8, 0.8); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border); }
    [data-theme="light"] .nav-blur { background: rgba(248, 249, 250, 0.8); }

    .skill-badge { 
      font-family: var(--font-code); 
      font-size: 0.85rem; 
      padding: 8px 16px; 
      background: rgba(155, 34, 66, 0.05); 
      border: 1px solid var(--border); 
      border-radius: 50px;
      color: var(--text-muted); 
      margin: 0 8px 8px 0; 
      transition: all 0.3s;
    }
    [data-theme="light"] .skill-badge {
       background: rgba(0, 0, 0, 0.02);
       color: var(--text-main);
    }

    .skill-badge:hover {
      background: var(--accent);
      color: #fff !important;
      transform: translateY(-3px) rotate(2deg);
    }

    .skill-category { border-left: 1px solid var(--border); padding-left: 1.5rem; margin-bottom: 2.5rem; }
    .text-accent { color: var(--accent) !important; }

    .social-icon {
      color: var(--text-muted) !important;
      transition: 0.3s;
    }
    .social-icon:hover {
      color: var(--accent) !important;
      transform: translateY(-3px);
    }

    .input-underlined { background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 12px; color: var(--text-main); padding: 15px 20px; width: 100%; outline: none; transition: 0.3s; }
    [data-theme="light"] .input-underlined { background: rgba(0, 0, 0, 0.02); }
    .input-underlined:focus { border-color: var(--accent); background: rgba(255,255,255,0.05); }
  `;

  return (
    <>
      <style>{styles}</style>
      <nav className="nav-blur fixed-top py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <motion.span initial={{x: -20, opacity: 0}} animate={{x: 0, opacity: 1}} className="font-display fw-bold" style={{fontSize: '1.4rem'}}>Isabella Dev<span className="text-accent">.</span></motion.span>
          <div className="d-flex align-items-center gap-4">
            <button onClick={toggleTheme} className="btn p-0 border-0 text-accent">{theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}</button>
            <button onClick={toggleLang} className="btn p-0 border-0 d-flex align-items-center gap-2" style={{color: 'var(--text-main)'}}>
              <Globe size={18} /> 
              <span className="font-code small">{lang === 'pt' ? 'EN' : 'PT'}</span>
            </button>
          </div>
        </div>
      </nav>

      <section className="min-vh-100 d-flex align-items-center pt-5">
        <div className="container text-center text-lg-start">
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.2}} className="d-inline-block px-3 py-1 mb-4 border border-secondary rounded-pill font-code text-accent small">{t.hero.role}</motion.div>
          <motion.h1 initial={{y: 30, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.8}} className="display-1 mb-4 fw-bold font-display"><span className="text-gradient">{t.hero.title}</span></motion.h1>
          <motion.p initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.4}} className="lead text-muted-custom mb-5" style={{maxWidth: '650px'}}>{t.hero.subtitle}</motion.p>
          
          <motion.div initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.6}} className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
            <a href="#projects" className="btn-goth">{t.hero.btnProject} <ArrowRight size={18}/></a>
            <a href="/Curriculo_IsabellaScarassati.pdf" download className="btn-goth" style={{borderColor: 'var(--text-muted)'}}>
              <FileText size={18} /> {t.hero.btnCV}
            </a>
          </motion.div>
          <div className="mt-4 d-flex align-items-center gap-2 text-muted-custom font-code small justify-content-center justify-content-lg-start">
            <MapPin size={16} className="text-accent" /> {t.hero.location}
          </div>
        </div>
      </section>

      <section id="about" className="py-5">
        <div className="container py-5">
          <div className="row g-5">
            <motion.div initial={{opacity: 0, x: -30}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.8}} viewport={{once: true}} className="col-lg-6">
              <h2 className="mb-5 display-5 font-display fw-bold">{t.about.title}</h2>
              <p className="text-muted-custom mb-4" style={{fontSize: '1.1rem', lineHeight: '1.8'}}>{t.about.desc1}</p>
              <p className="text-muted-custom" style={{fontSize: '1.1rem', lineHeight: '1.8'}}>{t.about.desc2}</p>
            </motion.div>
            <motion.div initial={{opacity: 0, x: 30}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.8}} viewport={{once: true}} className="col-lg-5 offset-lg-1">
              <h3 className="h5 mb-5 font-code text-accent">&lt; {t.about.skillsTitle} /&gt;</h3>
              <div className="skill-category">
                <h4 className="h6 mb-3 d-flex align-items-center gap-2"><Server size={18} className="text-accent"/> {t.skills.cat1}</h4>
                {['Python', 'Node.js', 'API REST', 'MVC', 'SQL'].map(s => <span key={s} className="skill-badge">{s}</span>)}
              </div>
              <div className="skill-category">
                <h4 className="h6 mb-3 d-flex align-items-center gap-2"><ShieldAlert size={18} className="text-accent"/> {t.skills.cat3}</h4>
                {['Cybersecurity', 'Honey Pot', 'Vercel', 'Railway'].map(s => <span key={s} className="skill-badge">{s}</span>)}
              </div>
              <div className="skill-category">
                <h4 className="h6 mb-3 d-flex align-items-center gap-2"><Layout size={18} className="text-accent"/> {t.skills.cat4}</h4>
                {['React.js', 'JavaScript', 'HTML5/CSS3', 'Bootstrap'].map(s => <span key={s} className="skill-badge">{s}</span>)}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-5">
        <div className="container py-5">
          <motion.h2 initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} className="display-4 mb-5 text-center font-display fw-bold">{t.projects.title}</motion.h2>
          <div className="row g-4">
            {[ 
              { title: t.projects.p4_title, desc: t.projects.p4_desc, tech: t.projects.p4_tech, repo: t.projects.p4_repo, live: t.projects.p4_live, icon: <Terminal size={28}/> },
              { title: t.projects.p2_title, desc: t.projects.p2_desc, tech: t.projects.p2_tech, repo: t.projects.p2_repo, live: t.projects.p2_live, icon: <Music size={28}/> },
              { title: t.projects.p1_title, desc: t.projects.p1_desc, tech: t.projects.p1_tech, repo: t.projects.p1_repo, icon: <ShieldCheck size={28}/> },
              { title: t.projects.p3_title, desc: t.projects.p3_desc, tech: t.projects.p3_tech, legacy: true, icon: <Layers size={28}/> }
            ].map((p, i) => (
              <motion.div key={i} initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} transition={{delay: i * 0.1}} viewport={{once: true}} className="col-md-6">
                <div className="glass-card d-flex flex-column">
                  <div className="text-accent mb-4">{p.icon}</div>
                  <h3 className="h4 mb-3 fw-bold">{p.title}</h3>
                  <p className="text-muted-custom mb-4 small flex-grow-1">{p.desc}</p>
                  <div className="mb-4">
                    {p.tech.map(tech => <span key={tech} className="skill-badge">{tech}</span>)}
                  </div>
                  {p.legacy ? (
                    <div className="text-center p-2 font-code small border border-dashed rounded text-muted-custom">{t.projects.btnLegacy}</div>
                  ) : (
                    <div className="d-flex gap-2">
                      <a href={p.repo} target="_blank" rel="noreferrer" className="btn-goth flex-grow-1"><Github size={16} /> {t.projects.btnCode}</a>
                      {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="btn-goth flex-grow-1" style={{background: 'var(--accent)', color: '#fff'}}>{t.projects.btnLive}</a>}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-5">
        <div className="container py-5 text-center">
          <motion.h2 initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} className="mb-5 font-display display-5 fw-bold">{t.contact.title}</motion.h2>
          <div className="row justify-content-center text-start">
            <div className="col-lg-6">
              <form ref={form} onSubmit={sendEmail} className="glass-card">
                <input type="text" name="name" className="input-underlined mb-4" placeholder={t.contact.placeholderName} required />
                <input type="email" name="email" className="input-underlined mb-4" placeholder={t.contact.placeholderEmail} required />
                <textarea name="message" className="input-underlined mb-4" rows="3" placeholder={t.contact.placeholderMsg} required></textarea>
                <button type="submit" className="btn-goth w-100 py-3" disabled={formStatus !== 'idle'}>
                  {formStatus === 'sending' ? t.contact.sending : <>{t.contact.btn} <Send size={16} /></>}
                </button>
                {formStatus === 'success' && <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="text-success mt-3 font-code text-center">{t.contact.success}</motion.div>}
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-5 border-top border-secondary mt-5">
        <div className="container text-center text-muted-custom font-code small">
          <div className="d-flex gap-4 justify-content-center mb-4">
            <a 
              href="https://www.linkedin.com/in/isabella-dos-anjos/" 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon"
            >
              <Linkedin />
            </a>
            <a 
              href="https://github.com/isabellascarassatii" 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon"
            >
              <Github />
            </a>
            <a 
              href="mailto:bellaadevs@gmail.com" 
              className="social-icon"
            >
              <Mail />
            </a>
          </div>
          <p>{t.footer.copy}</p>
        </div>
      </footer>
    </>
  );
};

export default App;