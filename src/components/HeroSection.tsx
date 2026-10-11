import fundo from '../assets/Fundo.svg'
import pessoa from '../assets/Eu.jpg'

type HeroSectionProps = {
  white: boolean
}

export function HeroSection({ white }: HeroSectionProps) {
  return (
    <section className="hero section-wrap" id="inicio">
      {!white && <img className="hero-art" src={fundo} alt="" />}
      <div className="hero-copy">
        <p className="eyebrow">PORTFÓLIO · DESENVOLVIMENTO</p>
        <h1>
          Fabrício <span>Peres</span>
        </h1>
        <p className="hero-role">
          Engenheiro de Software <span aria-hidden="true">✦</span>
        </p>
        <p className="hero-description">
          Sou desenvolvedor de software, com foco em interfaces modernas e soluções robustas. Atualmente trabalho com React
          (JavaScript e TypeScript) e .NET para criar aplicações web e APIs.
        </p>
        <a className="primary-link" href="#projetos">
          Ver projetos <span aria-hidden="true">↘</span>
        </a>
      </div>
      <div className="portrait-wrap">
        <div className="portrait-ring">
          <img className="portrait" src={pessoa} alt="Fabrício Peres" />
        </div>
        <span className="portrait-caption">Osasco, São Paulo, Brasil</span>
      </div>
      <span className="hero-index" aria-hidden="true">
        01 / 04
      </span>
    </section>
  )
}
