import skillz from '../assets/Skillz.svg'
import inv from '../assets/Inventario.svg'
import cal from '../assets/Calculadora.svg'
import acess from '../assets/send.svg'

export function ProjectsSection() {
  const projects = [
    {
      title: 'Skillz',
      number: '01',
      category: 'Full stack',
      image: skillz,
      alt: 'Prévia do projeto Skillz',
      href: 'https://github.com/xPeres/Sistema-de-Divulga-o-de-Empresas',
      description:
        'Plataforma para divulgar serviços locais, conectando clientes e prestadores em um fluxo simples de cadastro e busca.',
      tags: ['React', 'Node.js', 'UI']
    },
    {
      title: 'Inventário',
      number: '02',
      category: 'Dashboard',
      image: inv,
      alt: 'Prévia do sistema de inventário',
      href: 'https://youtu.be/F0nvAkWIkDY',
      description:
        'Sistema de gestão para ambiente FiveM com organização visual, movimentação de itens e interface drag-and-drop.',
      tags: ['UI/UX', 'Gestão', 'FiveM']
    },
    {
      title: 'Calculadora',
      number: '03',
      category: 'Ferramenta',
      image: cal,
      alt: 'Prévia do projeto Calculadora',
      href: 'https://github.com/xPeres/Calculadora',
      description:
        'Calculadora funcional com foco em usabilidade e personalização visual, incluindo alternância entre temas.',
      tags: ['JavaScript', 'Design', 'UX']
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
        <p className="section-note">Experimentos, interfaces e soluções práticas desenvolvidas ao longo da minha trajetória.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-header">
              <span className="project-category">{project.category}</span>
              <span className="project-number">{project.number}</span>
            </div>
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
            </div>
            <p>{project.description}</p>
            <ul className="project-tags" aria-label={`Tecnologias do projeto ${project.title}`}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
