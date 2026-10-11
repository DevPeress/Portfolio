import './App.css'
import peres from './assets/Peres.svg'
import noite from './assets/Noite.svg'
import dia from './assets/Dia.svg'
import fundo from './assets/Fundo.svg'
import pessoa from './assets/Eu.jpg'
import peres2 from './assets/Peres2.svg'
import exp1 from './assets/Exp1.svg'
import exp2 from './assets/Exp2.svg'
import exp3 from './assets/Exp3.svg'
import exp4 from './assets/Exp4.svg'
import skillz from './assets/Skillz.svg'
import inv from './assets/Inventario.svg'
import cal from './assets/Calculadora.svg'
import acess from './assets/send.svg'
import email from './assets/Email.svg'
import linkedin from './assets/Linkedin.svg'
import site from './assets/Site.svg'
import insta from './assets/Insta.svg'
import linkedin2 from './assets/Linkedin2.svg'
import site2 from './assets/Site2.svg'
import insta2 from './assets/Insta2.svg'
import { useState } from 'react'

function App() {
  const [white, setWhite] = useState(false)
  const [copied, setCopied] = useState(false)
  const emailAddress = 'fabricioperesdsantos@gmail.com'

  const copiar = async () => {
    await navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className={white ? 'site theme-light' : 'site theme-dark'}>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Fabrício Peres, início">
          <img src={white ? peres2 : peres} alt="Fabrício Peres" />
        </a>
        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre mim</a>
          <a href="#projetos">Projetos</a>
        </nav>
        <div className="header-actions">
          <a className="contact-link" href="https://www.linkedin.com/in/devperes" target="_blank" rel="noreferrer">Contato</a>
          <button className="theme-toggle" type="button" onClick={() => setWhite(!white)} aria-label={white ? 'Ativar tema escuro' : 'Ativar tema claro'}>
            <img src={white ? noite : dia} alt="" />
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="inicio">
          {!white && <img className="hero-art" src={fundo} alt="" />}
          <div className="hero-copy">
            <p className="eyebrow">PORTFÓLIO · DESENVOLVIMENTO</p>
            <h1>Fabrício <span>Peres</span></h1>
            <p className="hero-role">Estudante Full-Stack <span aria-hidden="true">✦</span></p>
            <p className="hero-description">Sou estudante de desenvolvimento Full-Stack. Atualmente estudo React (JS e TS) e pretendo me aprofundar em Next.js. Utilizo Node.js (Express) para criar back-ends e APIs.</p>
            <a className="primary-link" href="#projetos">Ver projetos <span aria-hidden="true">↘</span></a>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-ring"><img className="portrait" src={pessoa} alt="Fabrício Peres" /></div>
            <span className="portrait-caption">São Paulo, Brasil</span>
          </div>
          <span className="hero-index" aria-hidden="true">01 / 04</span>
        </section>

        <section className="about section-wrap" id="sobre">
          <div className="section-heading">
            <p className="eyebrow">UM POUCO SOBRE MIM</p>
            <h2>Aprender.<br /><span>Construir.</span></h2>
          </div>
          <div className="about-copy">
            <p>Me chamo Fabrício Peres e atualmente estudo Ciências da Computação na Universidade São Judas Tadeu.</p>
            <p>Minha jornada com programação começou em 2021, estudando Lua para o FiveM. Em 2023, comecei a criar interfaces web e para FiveM. Aprendi HTML, CSS e JavaScript e, há cerca de um ano, uso React para desenvolver interfaces mais interativas e com melhor desempenho.</p>
            <p>Também utilizo Node.js, especialmente Express.js, para criar back-ends e APIs. Nos projetos de estudo, já trabalhei com operações em MySQL e sistemas de cadastro e login, usando bcrypt para proteger senhas.</p>
          </div>
        </section>

        <section className="stack section-wrap" aria-labelledby="stack-title">
          <div className="section-heading section-heading-inline">
            <div><p className="eyebrow">FERRAMENTAS E TECNOLOGIAS</p><h2 id="stack-title">Meu <span>repertório</span></h2></div>
            <p className="section-note">Tecnologias que fazem parte dos meus estudos e projetos.</p>
          </div>
          <div className="stack-gallery">
            <img src={white ? exp3 : exp1} alt="Tecnologias de desenvolvimento" />
            <img src={white ? exp4 : exp2} alt="Ferramentas e linguagens utilizadas" />
          </div>
        </section>

        <section className="projects section-wrap" id="projetos">
          <div className="section-heading section-heading-inline">
            <div><p className="eyebrow">SELEÇÃO DE TRABALHOS</p><h2>Projetos <span>em destaque</span></h2></div>
            <p className="section-note">Experimentos e sistemas desenvolvidos durante meu aprendizado.</p>
          </div>
          <div className="project-grid">
            <article className="project-card">
              <a className="project-image" href="https://github.com/xPeres/Sistema-de-Divulga-o-de-Empresas" target="_blank" rel="noreferrer" aria-label="Ver projeto Skillz no GitHub"><img src={skillz} alt="Prévia do projeto Skillz" /><span><img src={acess} alt="" /></span></a>
              <div className="project-meta"><h3>Skillz</h3><span>01</span></div>
              <p>Pequeno site com front-end e back-end para registro de serviços.</p>
            </article>
            <article className="project-card">
              <a className="project-image" href="https://youtu.be/F0nvAkWIkDY" target="_blank" rel="noreferrer" aria-label="Ver demonstração do Inventário"><img src={inv} alt="Prévia do sistema de inventário" /><span><img src={acess} alt="" /></span></a>
              <div className="project-meta"><h3>Inventário</h3><span>02</span></div>
              <p>Sistema de inventário para FiveM com interface drag-and-drop.</p>
            </article>
            <article className="project-card">
              <a className="project-image" href="https://github.com/xPeres/Calculadora" target="_blank" rel="noreferrer" aria-label="Ver projeto Calculadora no GitHub"><img src={cal} alt="Prévia do projeto Calculadora" /><span><img src={acess} alt="" /></span></a>
              <div className="project-meta"><h3>Calculadora</h3><span>03</span></div>
              <p>Calculadora simples com alternância entre temas de cores.</p>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <div><p className="eyebrow">VAMOS CONVERSAR?</p><a className="footer-email" href={`mailto:${emailAddress}`}>{emailAddress}</a></div>
          <button className="copy-button" type="button" onClick={copiar} aria-label="Copiar endereço de e-mail"><img src={email} alt="" />{copied ? 'Copiado!' : 'Copiar e-mail'}</button>
          <div className="social-links" aria-label="Redes sociais">
            <a href="https://www.linkedin.com/in/devperes" target="_blank" rel="noreferrer" aria-label="LinkedIn"><img src={white ? linkedin2 : linkedin} alt="" /></a>
            <a href="https://discord.gg/maze-store-2k-937899788735746129" target="_blank" rel="noreferrer" aria-label="Discord"><img src={white ? site2 : site} alt="" /></a>
            <a href="https://www.instagram.com/fah.peres/" target="_blank" rel="noreferrer" aria-label="Instagram"><img src={white ? insta2 : insta} alt="" /></a>
          </div>
        </div>
        <div className="footer-bottom section-wrap"><span>© 2026 Fabrício Peres</span><a href="#inicio">Voltar ao início ↑</a></div>
      </footer>
    </div>
  )
}

export default App
