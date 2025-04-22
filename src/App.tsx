import './App.css'
import peres from './assets/Peres.svg'
import noite from './assets/Noite.svg'
import dia from './assets/Dia.svg'
import fundo from './assets/Fundo.svg'
import pessoa from './assets/Pessoa.svg'
import fabricio from './assets/Fabricio.svg'
import sobre from './assets/Sobre.svg'
import { useState } from 'react'

function App() {
  const [white, setWhite] = useState(false)

  const theme = () => setWhite(!white)

  return (
    <>
      <div className='absolute bg-[#1A1A1A] w-screen h-screen top-0 bottom-0 lef-0 right-0 m-auto overflow-x-hidden overflow-y-auto'>
        <header className='flex relative w-full h-15 top-10'>
          <div className='flex absolute w-[80%] md:w-[60%] left-[5%] md:left-[10%] h-15 items-center justify-between text-[#C1C1C1]'>
            <img className='w-10 md:w-15 lg:w-20' src={peres} alt="" />
            <div className='flex relative w-1/2 md:w-1/2 lg:w-1/3 items-center justify-between text-base'>
              <div className='text-xs md:text-base lg:text-lg hover:scale-105'>Ínicio</div>
              <div className='text-xs md:text-base lg:text-lg hover:scale-105'>Sobre Mim</div>
              <div className='text-xs md:text-base lg:text-lg hover:scale-105'>Projetos</div>
            </div>
            <div className='flex relative w-15 md:w-30 lg:w-30 h-5 md:h-10 lg:h-10 text-[2vw] md:text-xs lg:text-lg  border-1 border-[#4FC3F7] rounded-md items-center justify-center text-[#FFFFFF] hover:scale-105'>Falar Comigo</div>
          </div>
          {white ? 
            <><img onClick={theme} className='relative left-[90%] md:left-[80%] w-5 md:w-10 lg:w-10 hover:scale-105' src={dia} alt="" /></> 
            : 
            <><img onClick={theme} className='relative left-[90%] md:left-[80%] w-5 md:w-10 lg:w-10 hover:scale-105' src={noite} alt="" /></>
          }
        </header>

        <main>
          <div className='flex relative w-full h-auto top-90 items-center justify-center'>
            <img className='absolute bottom-35 md:bottom-0 lg:top-[-150%] w-auto md:w-[50%] lg:w-auto' src={fundo} alt="" />
            <img className='relative bottom-65 md:bottom-50 lg:bottom-50 w-30 md:w-50 lg:w-50' src={pessoa} alt="" />
            <img className='absolute bottom-48 md:top-1 w-1/2 md:w-auto lg:w-auto' src={fabricio} alt="" />
            <h2 className='absolute w-[90vw] lg:w-[35vw] text-white bottom-30 md:top-35 text-xs md:text-base lg:text-lg'>Sou um Estudante de Desenvolvedor Full-Stack. Atualmente estudo React (JS e TS) e posteriormente irei me aprofundar em Next. Utilizo NodeJS (Express) para a criação de códigos back-end e criação de APIs</h2>
          </div>

          <div className='flex relative w-full h-auto top-40 md:top-100 lg:top-140 items-center justify-center'>
            <img className='absolute' src={sobre} alt="" />
            <h2 className='relative top-55 md:top-40 lg:top-60 text-white w-[90%] lg:w-[50%] text-xs lg:text-lg'>Me chamo Fabrício Peres e atualmente estou estudando Ciências da Computação pela Universidade São Judas Tadeu, que irei finalizar ao fim deste ano.
              Meus estudos com programação começaram em 2021 com o jogo FIVEM, estudando programação LUA e com isso no ano de 2023 iniciei os estudos para criação de interfaces tanto web quanto para o FIVEM. Aprendi HTML, Css e JavaScript puro e a 1 Ano estou utilizando a biblioteca React para a criação de interfaces mais interativas e com desempenho melhor. <br /> <br />
              Com meus estudos também utilizo além do React e Lua, o NodeJS, mais especificamente o Expres.js para a criação da parte da back-end de alguns serviços. Atualmente desenvolvo mais APIs para alguns sistemas que crio para aprendizagem. Algumas das APIs criadas foram requisitar dados do MySQL, inserir dados, editar dados e remover dados. Algumas das APIs criadas foram para sistema de criação de contas e login e com isso utilizei o “bcrypt” para criptografar as senhas e deixar elas mais protegidas no banco de dados.
            </h2>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
