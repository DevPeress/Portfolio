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
import { useRef, useState } from 'react'

function App() {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  const copiar = () => {
    navigator.clipboard.writeText('fabricioperesdsantos@gmail.com');
  };

  const inicio = useRef(null)
  const sobre = useRef(null)
  const projetos = useRef(null)
  const scrollToSection = (sectionRef: any) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const [white, setWhite] = useState(false)

  const theme = () => setWhite(!white)

  return (
    <>
    <div className={white ? 'light' : 'dark'}>
        <div className='absolute bg-[#1A1A1A] light:bg-[#E0E8F6] w-screen h-screen top-0 bottom-0 lef-0 right-0 m-auto overflow-x-hidden overflow-y-auto' >
          <header className='flex fixed w-full h-15 top-10'>
            <div className='flex absolute w-[80%] md:w-[60%] left-[5%] md:left-[10%] h-15 items-center justify-between text-[#C1C1C1] light:text-[#050505]'>
              {white ? <><img className='w-10 md:w-15 lg:w-20' src={peres2} alt="" /></> : <><img className='w-10 md:w-15 lg:w-20' src={peres} alt="" /></>}
              <div className='flex relative w-1/2 md:w-1/2 lg:w-1/3 items-center justify-between text-base'>
                <div className='text-xs md:text-base lg:text-lg hover:scale-105' onClick={() => scrollToSection(inicio)}>Ínicio</div>
                <div className='text-xs md:text-base lg:text-lg hover:scale-105' onClick={() => scrollToSection(sobre)}>Sobre Mim</div>
                <div className='text-xs md:text-base lg:text-lg hover:scale-105' onClick={() => scrollToSection(projetos)}>Projetos</div>
              </div>
              <div className='flex relative w-15 md:w-30 lg:w-30 h-5 md:h-10 lg:h-10 text-[2vw] md:text-xs lg:text-lg  border-1 border-[#4FC3F7] light:border-[#050505] rounded-md items-center justify-center text-[#FFFFFF] light:text-[#050505] hover:scale-105' onClick={() => openInNewTab("https://www.linkedin.com/in/devperes")}>Contato</div>
            </div>
            {white ? 
              <><img onClick={theme} className='relative left-[90%] md:left-[80%] w-5 md:w-10 lg:w-10 hover:scale-105' src={dia} alt="" /></> 
              : 
              <><img onClick={theme} className='relative left-[90%] md:left-[80%] w-5 md:w-10 lg:w-10 hover:scale-105' src={noite} alt="" /></>
            }
          </header>

          <div ref={inicio}></div>
          
          <main>
            <div className='flex relative w-full h-auto top-100 lg:top-120 items-center justify-center'>
              {white ? <></>:<><img className='absolute bottom-35 md:bottom-37 lg:top-[-150%] w-auto md:w-[50%] lg:w-auto' src={fundo} alt="" /></>}
              <img className='relative bottom-65 md:bottom-50 lg:bottom-50 w-30 md:w-50 lg:w-50 rounded-full' src={pessoa} alt="" />
              <div className='absolute bottom-55 md:bottom-30 lg:bottom-30 text-[#FFFFFF] text-[6vw] lg:text-[3vw] light:text-[#484E53]'>Fabrício Peres</div>
              <div className='absolute bottom-52 md:bottom-24 lg:bottom-25 text-[3vw] lg:text-[1.2vw] text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#FFFFFF] light:to-[#484E53]'>Estudante Full-Stack <span className='text-[#FFFFFF]'>🧙‍♂️</span></div>
              <h2 className='absolute w-[90vw] md:w-[50vw] lg:w-[35vw] text-white bottom-30 md:top-35 text-xs md:text-base lg:text-lg light:text-[#484E53]'>Sou um Estudante de Desenvolvedor Full-Stack. Atualmente estudo React (JS e TS) e posteriormente irei me aprofundar em Next. Utilizo NodeJS (Express) para a criação de códigos back-end e criação de APIs</h2>
            </div>

            <div className='flex relative w-full h-auto top-40 md:top-100 lg:top-150 items-center justify-center' ref={sobre}>
              <div className='absolute md:top-25 lg:top-25 text-[#FFFFFF] light:text-[#2B2B2B] text-[6vw] lg:text-[3vw]'>Sobre Mim</div>
              <div className='absolute top-42 lg:top-47 text-[3vw] lg:text-[1.2vw] text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#FFFFFF] light:to-[#484E53]'>Conheça-me</div>
              <h2 className='relative top-55 md:top-55 lg:top-60 text-white w-[90%] lg:w-[50%] text-xs lg:text-lg light:text-[#1C1E53] '>Me chamo Fabrício Peres e atualmente estou estudando Ciências da Computação pela Universidade São Judas Tadeu, que irei finalizar ao fim deste ano.
                Meus estudos com programação começaram em 2021 com o jogo FIVEM, estudando programação LUA e com isso no ano de 2023 iniciei os estudos para criação de interfaces tanto web quanto para o FIVEM. Aprendi HTML, Css e JavaScript puro e a 1 Ano estou utilizando a biblioteca React para a criação de interfaces mais interativas e com desempenho melhor. <br /> <br />
                Com meus estudos também utilizo além do React e Lua, o NodeJS, mais especificamente o Expres.js para a criação da parte da back-end de alguns serviços. Atualmente desenvolvo mais APIs para alguns sistemas que crio para aprendizagem. Algumas das APIs criadas foram requisitar dados do MySQL, inserir dados, editar dados e remover dados. Algumas das APIs criadas foram para sistema de criação de contas e login e com isso utilizei o “bcrypt” para criptografar as senhas e deixar elas mais protegidas no banco de dados.
              </h2>
            </div>

            <div className='flex relative w-full h-auto top-120 md:top-200 lg:top-280 items-center justify-center'>
              <div className='absolute text-[#FFFFFF] light:text-[#2B2B2B] text-[6vw] lg:text-[3vw]'>Portfólio</div>
              <div className='absolute top-4 md:top-6 lg:top-10 text-[3vw] lg:text-[1.2vw] text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#FFFFFF] light:to-[#484E53]'>Sistemas que Utilizo!</div>
              <img className='absolute top-15 md:top-30 lg:top-40' src={white ? exp3 : exp1} alt="" />
              <img className='absolute top-60 md:top-95 lg:top-120' src={white ? exp4 : exp2} alt="" />
            </div>

            <div className='flex relative w-full h-auto top-220 md:top-400 lg:top-500 items-center justify-center' ref={projetos}>
              <div className='absolute bottom-85 text-[#FFFFFF] light:text-[#2B2B2B] text-[6vw] lg:text-[3vw]'>Projetos</div>
              <div className='absolute top-15 text-[3vw] lg:text-[1.2vw] text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#FFFFFF] light:to-[#484E53]'>Alguns dos meus Projetos!</div>
              <div className='relative h-100 w-300 top-30 items-center justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4'>
                <div className='text-left'>
                  <img className='flex relative bottom-5 w-full' src={skillz} alt="" />
                  <div className='relative text-[#C1C1C1] bottom-2 text-[5vw] md:text-[4vw] lg:text-[1vw] light:text-[#484E53]'>Skillz</div>
                  <div className='flex relative items-center justify-between w-full'>
                    <div className='relative text-[#A9A9A9] text-[3vw] md:text-[2vw] lg:text-[.7vw] w-[40vw] md:w-[30vw] lg:w-[11vw] light:text-[#484E53]'>Pequeno site com front-end e back-end para registro de serviços</div>
                    <img className='relative hover:scale-110' onClick={() => openInNewTab("https://github.com/xPeres/Sistema-de-Divulga-o-de-Empresas")} src={acess} alt="" />
                  </div>
                </div>
                <div className='text-left'>
                  <img className='flex relative bottom-5 w-full' src={inv} alt="" />
                  <div className='relative text-[#C1C1C1] bottom-2 text-[5vw] md:text-[4vw] lg:text-[1vw] light:text-[#484E53]'>Inventário</div>
                  <div className='flex relative items-center justify-between w-full'>
                    <div className='relative text-[#A9A9A9] text-[3vw] md:text-[2vw] lg:text-[.7vw] w-[40vw] md:w-[30vw] lg:w-[11vw] light:text-[#484E53]'>Sistema de Inventário para FIVEM que utiliza Drag UI.</div>
                    <img className='relative hover:scale-110' onClick={() => openInNewTab("https://youtu.be/F0nvAkWIkDY")} src={acess} alt="" />
                  </div>
                </div>
                <div className='text-left'>
                  <img className='flex relative bottom-5 w-full' src={cal} alt="" />
                  <div className='relative text-[#C1C1C1] bottom-2 text-[5vw] md:text-[4vw] lg:text-[1vw] light:text-[#484E53]'>Calculadora</div>
                  <div className='flex relative items-center justify-between w-full'>
                    <div className='relative text-[#A9A9A9] text-[3vw] md:text-[2vw] lg:text-[.7vw] w-[40vw] md:w-[30vw] lg:w-[11vw] light:text-[#484E53]'>Sistema de Calculadora simples com sistema de troca de cores.</div>
                    <img className='relative hover:scale-110' onClick={() => openInNewTab("https://github.com/xPeres/Calculadora")} src={acess} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </main>

          <footer className='flex relative w-full h-35 md:h-25 lg:h-25 top-[420vw] md:top-520 lg:top-550 border-t border-[#484E53]'>
            <div className='flex relative items-center justify-between w-[90%] lg:w-[80%] left-[5%] lg:left-[10%]'>
              <div className='text-[1.5vw] md:text-[1.5vw] lg:text-[1.2vw] text-[#A9A9A9] light:text-[#282938] top-10'>© 2025 todos os direitos reservados</div>
              <div className='flex top-9 md:top-8 lg:top-[1.5vw] w-35 md:w-60 lg:w-[20vw] h-7 md:h-10 lg:h-[2.5vw] border-1 rounded border-[#484E53] items-center justify-center'>
                <img className='w-[4vw] md:w-[2vw] lg:w-[2vw]' src={email} alt="" />
                <div className='text-[#C9C9C9] light:text-[#484E53] text-[1.5vw] md:text-[1.5vw] lg:text-[1vw]' onClick={copiar}>fabricioperesdsantos@gmail.com</div>
              </div>
              <div className='flex top-20 md:top-8 lg:top-[2.1vw] items-center justify-between w-40 md:w-40 lg:w-80'>
                <img src={white ? linkedin2 : linkedin} onClick={() => openInNewTab("https://www.linkedin.com/in/devperes")} alt="" />
                <img src={white ? site2 : site} onClick={() => openInNewTab("https://discord.gg/maze-store-2k-937899788735746129")} alt="" />
                <img src={white ? insta2 : insta} onClick={() => openInNewTab("https://www.instagram.com/fah.peres/")} alt="" />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
