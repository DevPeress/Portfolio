import exp1 from '../assets/Exp1.svg'
import exp2 from '../assets/Exp2.svg'
import exp3 from '../assets/Exp3.svg'
import exp4 from '../assets/Exp4.svg'

type StackSectionProps = {
  white: boolean
}

export function StackSection({ white }: StackSectionProps) {
  return (
    <section className="stack section-wrap" aria-labelledby="stack-title">
      <div className="section-heading section-heading-inline">
        <div>
          <p className="eyebrow">FERRAMENTAS E TECNOLOGIAS</p>
          <h2 id="stack-title">
            Meu <span>repertório</span>
          </h2>
        </div>
        <p className="section-note">Tecnologias que fazem parte dos meus estudos e projetos.</p>
      </div>
      <div className="stack-gallery">
        <img src={white ? exp3 : exp1} alt="Tecnologias de desenvolvimento" />
        <img src={white ? exp4 : exp2} alt="Ferramentas e linguagens utilizadas" />
      </div>
    </section>
  )
}
