import skillz from '../assets/Skillz.svg'
import inv from '../assets/Inventario.svg'
import cal from '../assets/Calculadora.svg'
import acess from '../assets/send.svg'

export function ProjectsSection() {
  const projects = [
    {
      title: 'Skillz',
      number: '01',
      image: skillz,
      alt: 'Prévia do projeto Skillz',
      href: 'https://github.com/xPeres/Sistema-de-Divulga-o-de-Empresas',
      description: 'Pequeno site com front-end e back-end para registro de serviços.'
    },
    {
      title: 'Inventário',
      number: '02',
      image: inv,
      alt: 'Prévia do sistema de inventário',
      href: 'https://youtu.be/F0nvAkWIkDY',
      description: 'Sistema de inventário para FiveM com interface drag-and-drop.'
    },
    {
      title: 'Calculadora',
      number: '03',
      image: cal,
      alt: 'Prévia do projeto Calculadora',
      href: 'https://github.com/xPeres/Calculadora',
      description: 'Calculadora simples com alternância entre temas de cores.'
    }
  ]

  return (
    <section className="projects section-wrap" id="projetos">
      <div className="section-heading section-heading-inline">
        <div>
          <p className="eyebrow">SELEÇÃO DE TRABALHOS</p>
          <h2>
            Projetos <span>em destaque</span>
          </h2>
        </div>
        <p className="section-note">Experimentos e sistemas desenvolvidos durante meu aprendizado.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <a
              className="project-image"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Ver projeto ${project.title}`}
            >
              <img src={project.image} alt={project.alt} />
              <span>
                <img src={acess} alt="" />
              </span>
            </a>
            <div className="project-meta">
              <h3>{project.title}</h3>
              <span>{project.number}</span>
            </div>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
