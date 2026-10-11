export function ProjectsSection() {
  const projects = [
    {
      title: 'Site de Gerenciamento de Vendas',
      number: '01',
      category: 'Full stack',
      href: 'https://github.com/DevPeress/Site-de-Gerenciamento-de-Vendas',
      description:
        'Sistema completo para gestão de vendas com autenticação segura, painel administrativo e integração com banco de dados relacional.',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'MySQL']
    },
    {
      title: 'Back-End E-Commerce Básico',
      number: '02',
      category: 'API & Segurança',
      href: 'https://github.com/DevPeress/E-Commerce',
      description:
        'API de e-commerce em Node.js com autenticação JWT, criptografia de senhas, proteção contra abuso e testes automatizados.',
      tags: ['Node.js', 'Express', 'JWT', 'Bcrypt', 'Jest']
    },
    {
      title: 'API EduConnect',
      number: '03',
      category: 'Backend',
      href: 'https://github.com/DevPeress/EduConnect-API',
      description:
        'API REST para gestão escolar desenvolvida em C# e .NET, com autenticação JWT e integração com SQL Server.',
      tags: ['C#', '.NET', 'JWT', 'SQL Server', 'EF Core']
    },
    {
      title: 'Front-end EduConnect',
      number: '04',
      category: 'UI & UX',
      href: 'https://github.com/DevPeress/EduConnect-Web',
      description:
        'Aplicação web escolar com dashboard, calendário, notificações e fluxo moderno de navegação com React e Tailwind.',
      tags: ['React', 'TypeScript', 'Tailwind', 'Axios', 'Zod']
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
              className="project-visual"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Ver projeto ${project.title}`}
            >
              <span className="project-visual-label">Ver projeto</span>
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
