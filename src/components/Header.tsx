import peres from '../assets/Peres.svg'
import peres2 from '../assets/Peres2.svg'
import noite from '../assets/Noite.svg'
import dia from '../assets/Dia.svg'

type HeaderProps = {
  white: boolean
  onToggleTheme: () => void
}

export function Header({ white, onToggleTheme }: HeaderProps) {
  return (
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
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={white ? 'Ativar tema escuro' : 'Ativar tema claro'}
        >
          <img src={white ? noite : dia} alt="" />
        </button>
      </div>
    </header>
  )
}
