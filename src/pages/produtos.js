import React from 'react'
import P1 from '../images/p1.jpg'
import P2 from '../images/p2.jpg'
import P3 from '../images/p3.jpg'
import P4 from '../images/p4.jpg'
import P5 from '../images/p5.jpg'
import P6 from '../images/p6.jpg'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../images/bannerProduto.jpg'

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
        imagem: P6,
        nome: 'BLINDAGEM ELETROSTÁTICA',
        descricao: 'Fabricamos blindagens eletrostáticas, para transformadores de grande e pequeno porte. São blindagens feitas em cobre isolado,…',
        slug: '/teste6'
    },
    {
        imagem: '',
        nome: 'CALÇOS DE MADEIRA COMUM',
        descricao: 'Fabricamos também diversos materiais em madeira densificada ou madeira comum (Angelin), utilizados em transformadores de pequeno…',
        slug: '/teste5'
    },
    {
        imagem: '',
        nome: 'CALÇOS DE PRESSPAN',
        descricao: 'Os calços são fabricados em papelão de média ou alta densidade, incluindo a execução de detalhes como raios para encaixe…',
        slug: '/teste5'
    },
    {
        imagem: '',
        nome: 'CALÇOS DO NÚCLEO MADEIRA DENSIFICADA',
        descricao: 'Fabricamos toda a parte de materiais utilizados no isolamento e montagem do núcleo. Fabricamos todos os isolamentos de tirante,…',
        slug: '/teste5'
    },
    {
        imagem: '',
        nome: 'CILINDROS DE BOBINAGEM',
        descricao: 'Temos uma estrutura montada para fabricação de cilindros, sendo cilindros base de bobina, montagens de bloco, cilindros…',
        slug: '/teste5'
    },
    {
        imagem: '',
        nome: 'CILINDROS DE DISTRIBUIÇÃO E MEIA FORÇA',
        descricao: 'Fabricamos cilindros para transformadores de pequeno porte, para núcleos enrolado e empilhado. Temos cilindros planos, com…',
        slug: '/teste5'
    },
    {
        imagem: '',
        nome: 'DETALHAMENTO DE SUPORTE',
        descricao: 'Fabricamos réguas para suportes de ligação em madeira densificada. Réguas de sustentação, componentes, peças usinadas…',
        slug: '/teste5'
    },
    {
        imagem: '',
        nome: 'ENCHIMENTO CALANDRADO',
        descricao: 'Enchimentos calandrados, ou cabeceiras calandradas feitos com várias chapas de papelão moldado, colados com caseína, com…',
        slug: '/teste5'
    },
    {
        imagem: '',
        nome: 'ESPAÇADORES',
        descricao: 'Fabricamos espaçadores para bobinas, que se encaixam nas estecas tipo T. Fabricamos espaçadores lisos, nas espessuras de…',
        slug: '/teste5'
    },
    {
        imagem: '',
        nome: 'ESPAGUETE',
        descricao: 'Fabricamos também itens específicos, como espaguetes isolantes ou canudos, em diversos diâmetros, espessuras de papel e…',
        slug: '/teste5'
    },
    {
        imagem: '',
        nome: 'ESTECAS / TALAS DE DISTRIBUIÇÃO E MEIA FORÇA',
        descricao: 'Fabricamos diferentes tipos de estecas / talas para transformadores de pequeno porte. Estecas em papelões de média densidade,…',
        slug: '/teste5'
    },
    {
        imagem: '',
        nome: 'ESTECAS / TALAS DE FORÇA E MÉDIA FORÇA',
        descricao: 'Fabricamos estecas, talas para bobinas, para montagem dos enrolamentos, para materiais de núcleo. Temos como largura…',
        slug: '/teste5'
    },
    {
        imagem: '',
        nome: 'KITS DE BOBINA',
        descricao: 'Realizamos a montagem completa do kit isolante. Tratamento e colagem do cilindro conforme especificação do cliente, alinhamento…',
        slug: '/teste5'
    },
    {
        imagem: '',
        nome: 'MATERIAIS DIVERSOS',
        descricao: 'Fabricamos diversos materiais em madeira densificada, madeira comum (Angelin), Fenolite e papelão de média densidade e de alta…',
        slug: '/teste5'
    },
    {
        imagem: '',
        nome: 'PAPÉIS EM ROLO',
        descricao: 'Trabalhamos com estoque de dois tipos de papéis, kraft neutro e diamantado termoestabilizado. Em diversas espessuras…',
        slug: '/teste5'
    },
    {
        imagem: '',
        nome: 'PROTEÇÃO DE PASSAGEM',
        descricao: 'Normalmente fabricadas em papelão de 1mm ou papel em 0,50mm de espessura, porém temos disponibilidade de fabricação em…',
        slug: '/teste5'
    },
    {
        imagem: '',
        nome: 'SETOR ANEL E SETOR CAPA MOLDADO',
        descricao: 'Este é o texto do setor anel e setor capa moldado do cadastro de produtos',
        slug: '/teste5'
    },
    {
        imagem: '',
        nome: 'SUPORTE DE LIGAÇÃO',
        descricao: 'Fabricamos diversos tipos de materiais isolantes que compõe os transformadores de pequeno porte, como cabeceiras, suportes…',
        slug: '/teste5'
    },
    {
        imagem: '',
        nome: 'ZIG-ZAG',
        descricao: 'Fabricamos anéis zig-zag, ou guias de óleo, em papelão de alta e média densidade, poliéster e em Nomex ®. Este material…',
        slug: '/teste5'
    },
]

const Produtos = () => {
    return (
        <div className='bg-[#041537]'>

            <div className='relative py-32 sm:py-56'>
                <img src={Banner} alt='mesa com papéis' className='opacity-25 absolute inset-0 h-full w-full object-cover' />
                <h2 className='mt-10 mx-auto text-center font-montserrat text-3xl sm:text-7xl tracking-widest font-bold text-[#e4d5e7]'>PRODUTOS</h2>
                <p className='mt-4 mx-auto text-center font-montserrat text-base sm:text-3xl font-bold text-[#e4d5e7]'>CONFIRA O CATÁLOGO</p>
                <Header></Header>
            </div>

            <h1 className='mt-20 xl:ml-24 ml-10 text-left text-[#a0a9cf] text-5xl xl:text-6xl tracking-wide font-extralight'>LINHA DE PRODUTOS</h1>
            <p className='mt-4 xl:ml-24 ml-10 text-left text-[#c2c8e4] text-lg font-normal'>Conheça os nossos produtos e descubra porque somos sinônimos de qualidade.</p>

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

            <Footer />
        </div>
    )
}

export default Produtos