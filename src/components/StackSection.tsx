const technologies = [
  {
    number: '01',
    category: 'BACK-END',
    title: '.NET',
    description: 'Desenvolvimento de aplicações e serviços com o ecossistema .NET.'
  },
  {
    number: '02',
    category: 'BANCO DE DADOS',
    title: 'SQL Server',
    description: 'Modelagem e consultas para armazenar e organizar dados de aplicações.'
  },
  {
    number: '03',
    category: 'FRONT-END',
    title: 'React',
    description: 'Criação de interfaces componentizadas para aplicações web.'
  },
  {
    number: '04',
    category: 'LINGUAGENS',
    title: 'JavaScript & TypeScript',
    description: 'Interatividade e desenvolvimento tipado para projetos web.'
  },
  {
    number: '05',
    category: 'DESENVOLVIMENTO WEB',
    title: 'Blazor',
    description: 'Construção de interfaces web usando C# e tecnologias .NET.'
  },
  {
    number: '06',
    category: 'FIVEM',
    title: 'Lua',
    description: 'Desenvolvimento de scripts e recursos para servidores FiveM.'
  }
]

export function StackSection() {
  return (
    <section className="stack section-wrap" aria-labelledby="stack-title">
      <div className="section-heading section-heading-inline">
        <div>
          <p className="eyebrow">FERRAMENTAS E TECNOLOGIAS</p>
          <h2 id="stack-title">
            Meu <span>repertório</span>
          </h2>
        </div>
        <p className="section-note">
          Tecnologias que utilizo para criar aplicações, interfaces e recursos para FiveM.
        </p>
      </div>

      <div className="stack-grid">
        {technologies.map((technology) => (
          <article className="stack-card" key={technology.number}>
            <div className="stack-card-top">
              <span className="stack-category">{technology.category}</span>
              <span className="stack-number">{technology.number}</span>
            </div>
            <h3>{technology.title}</h3>
            <p>{technology.description}</p>
          </article>
        ))}

        <article className="stack-card stack-card-azure">
          <div className="stack-card-top">
            <span className="stack-category">COLABORAÇÃO E ENTREGA</span>
            <span className="stack-number">07</span>
          </div>
          <h3>Azure DevOps</h3>
          <p>
            Acompanho o fluxo de desenvolvimento: organizo tarefas no Board, trabalho com
            Branches e Pull Requests e participo da gestão de Features e Releases.
          </p>
          <ul className="azure-workflow" aria-label="Recursos do Azure DevOps">
            <li>Board</li>
            <li>Branches</li>
            <li>Pull Requests</li>
            <li>Features</li>
            <li>Releases</li>
          </ul>
        </article>
      </div>
    </section>
  )
}
