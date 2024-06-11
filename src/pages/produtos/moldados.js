import React from 'react'
import HeaderProdutos from '../../components/HeaderProdutos'
import Footer from '../../components/Footer'
import Banner from '../../images/bannerProduto.jpg'

const conteudos = [
    {
        imagem: '../../images/produtos/P21SetorAnelSetorCapaMoldado/P1.JPG',
        nome: 'SETOR ANEL E SETOR CAPA MOLDADO',
        descricao: 'Este é o texto do setor anel e setor capa moldado do cadastro de produtos',
        slug: '/teste5'
    },
]

const Moldados = () => {
    return (
        <div className='bg-[#041537]'>

            <div className='relative py-32 sm:py-56'>
                <img src={Banner} alt='mesa com papéis' className='opacity-25 absolute inset-0 h-full w-full object-cover' />
                <h2 className='mt-10 mx-auto text-center font-montserrat text-3xl sm:text-7xl tracking-widest font-bold text-[#e4d5e7]'>PRODUTOS</h2>
                <p className='mt-4 mx-auto text-center font-montserrat text-base sm:text-3xl font-bold text-[#e4d5e7]'>MOLDADOS</p>
                <HeaderProdutos />
            </div>

            <h1 className='mt-20 xl:ml-24 ml-10 text-left text-[#a0a9cf] text-5xl xl:text-6xl tracking-wide font-extralight'>MOLDADOS</h1>
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

            <div className='mt-4 sm:mt-10 flex justify-center mb-10 sm:mb-16'>
                <a href='../' className='mt-4 mx-4 border-slate-300 border-2 sm:px-10 px-1 py-3 text-lg font-semibold text-slate-300 shadow-sm hover:text-[#041537] hover:bg-slate-300'>VER TODOS OS PRODUTOS <span aria-hidden='true'> &rarr;</span></a>
            </div>

            <Footer />
        </div>
    )
}

export default Moldados