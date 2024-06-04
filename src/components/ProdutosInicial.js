import React from 'react'
import P1 from '../images/p1.jpg'
import P2 from '../images/p2.jpg'
import P3 from '../images/p3.jpg'
import P4 from '../images/p4.jpg'
import P5 from '../images/p5.jpg'
import P6 from '../images/p6.jpg'

const conteudos = [
    {
        imagem: P2,
        nome: "ANÉIS E CALÇOS DE PRENSAGEM",
        descricao: 'Fabricamos toda a parte de materiais utilizados no isolamento e montagem do núcleo. Fabricamos todos os isolamentos de tirante,…',
        slug: '/teste1',
    },
    {
        imagem: P4,
        nome: 'ANEL DE PRESSPANN',
        descricao: 'Recortamos anéis em papelão, conforme diâmetros especificados pelos clientes. Anéis com arredondamento nos cantos, execução…',
        slug: '/teste2'
    },
    {
        imagem: P5,
        nome: 'ANEL EQUIPOTENCIAL',
        descricao: 'Fabricamos anéis equipotenciais (estáticos) com alma em madeira densificada ou em papelão colado. Ambos os casos seguem…',
        slug: '/teste3'
    },
    {
        imagem: P3,
        nome: 'BASE DE PRESSPAN COM MADEIRA DENSIFICADA E FENOLITE',
        descricao: 'Fabricamos toda a parte de materiais utilizados no isolamento e montagem do núcleo…',
        slug: '/teste4'
    },
    {
        imagem: P1,
        nome: 'KITS DE BOBINA',
        descricao: 'Realizamos a montagem completa do kit isolante. Tratamento e colagem do cilindro conforme especificação do cliente, alinhamento…',
        slug: '/teste5'
    },
    {
        imagem: P6,
        nome: 'BLINDAGEM ELETROSTÁTICA',
        descricao: 'Fabricamos blindagens eletrostáticas, para transformadores de grande e pequeno porte. São blindagens feitas em cobre isolado,…',
        slug: '/teste6'
    }
]

const ProdutosInicial = () => {
    return (
        <div>
            <h1 className='mt-10 xl:ml-24 ml-10 text-left text-[#a0a9cf] text-5xl xl:text-6xl tracking-wide font-extralight'>LINHA DE PRODUTOS</h1>
            <p className='mt-4 xl:ml-24 ml-10 text-left text-[#c2c8e4] text-lg font-normal'>Conheça alguns dos nossos produtos e descubra porque somos sinônimos de qualidade.</p>
            <div className='mx-auto max-w-6xl mt-0 sm:mt-14 grid grid-cols-1 gap-x-8 gap-y-0 sm:gap-y-16 sm:grid-cols-2 lg:grid-cols-3'>

                {conteudos.map(conteudo => (
                    <div className='bg-slate-200 drop-shadow-xl mt-12 sm:mt-0 mx-8 sm:mx-0'>

                        <a href={conteudo.slug} target='blank'>
                            <img className='aspect-[3/2] w-full object-cover' src={conteudo.imagem} alt='imagem' />
                            <h3 className='mt-6 text-center text-lg font-bold leading-6 text-[#041537]'>{conteudo.nome}</h3>
                            <p className='mt-4 mx-4 text-center text-sm leading-6 text-[#041537]'>{conteudo.descricao}</p>
                        </a>
                        <div className='text-right mr-4'>
                            <a
                                href={conteudo.slug}
                                className='text-lg mb-8 font-semibold text-[#041537] hover:text-[#3f4f6e]'
                            >
                                <span aria-hidden='true' className='text-5xl'> &rarr;</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className='mt-4 sm:mt-10 flex justify-center'>
                <a href='' target="_blank" className='mt-4 mx-4 border-slate-300 border-2 sm:px-10 px-1 py-3 text-lg font-semibold text-slate-300 shadow-sm hover:text-[#041537] hover:bg-slate-300'>VER TODOS OS PRODUTOS <span aria-hidden='true'> &rarr;</span></a>
            </div>
        </div>
    )
}

export default ProdutosInicial