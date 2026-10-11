import email from '../assets/Email.svg'
import linkedin from '../assets/Linkedin.svg'
import site from '../assets/Site.svg'
import insta from '../assets/Insta.svg'
import linkedin2 from '../assets/Linkedin2.svg'
import site2 from '../assets/Site2.svg'
import insta2 from '../assets/Insta2.svg'

type FooterProps = {
  white: boolean
  emailAddress: string
  copied: boolean
  onCopyEmail: () => void
}

export function Footer({ white, emailAddress, copied, onCopyEmail }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-main section-wrap">
        <div>
          <p className="eyebrow">VAMOS CONVERSAR?</p>
          <a className="footer-email" href={`mailto:${emailAddress}`}>
            {emailAddress}
          </a>
        </div>
        <button className="copy-button" type="button" onClick={onCopyEmail} aria-label="Copiar endereço de e-mail">
          <img src={email} alt="" />
          {copied ? 'Copiado!' : 'Copiar e-mail'}
        </button>
        <div className="social-links" aria-label="Redes sociais">
          <a href="https://www.linkedin.com/in/devperes" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <img src={white ? linkedin2 : linkedin} alt="" />
          </a>
          <a href="https://discord.gg/maze-store-2k-937899788735746129" target="_blank" rel="noreferrer" aria-label="Discord">
            <img src={white ? site2 : site} alt="" />
          </a>
          <a href="https://www.instagram.com/fah.peres/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <img src={white ? insta2 : insta} alt="" />
          </a>
        </div>
      </div>
      <div className="footer-bottom section-wrap">
        <span>© 2026 Fabrício Peres</span>
        <a href="#inicio">Voltar ao início ↑</a>
      </div>
    </footer>
  )
}
