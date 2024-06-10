import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from '../images/bannerProduto.jpg'
import Header from "../components/Header"
import Footer from "../components/Footer"

import P1 from '../images/produtos/P1AneisCalcosPrensagem/P1.JPG'
import P2 from '../images/produtos/P1AneisCalcosPrensagem/P2.jpg'
import P3 from '../images/produtos/P1AneisCalcosPrensagem/P3.JPG'
import P4 from '../images/produtos/P1AneisCalcosPrensagem/P4.jpg'

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    //autoplay: true,
    //autosplaySpeed: 50,
};

const conteudo = [
    {
        img1: P1,
        img2: P2,
        img3: P3,
        img4: P4,
        nome: "ANÉIS E CALÇOS DE PRENSAGEM",
        descricao: 'Fabricamos toda a parte de materiais utilizados no isolamento e montagem do núcleo. Fabricamos todos os isolamentos de tirante, isolamentos para armadura, para coluna, isolamentos para travessa. Fabricamos canais de resfriamento, calços de prensagem, calços do núcleo ou calços escadinha, e anéis de prensagem superiores e inferiores.',
    }
]

const P1AneisCalcosPrensagem = () => {
    const { img1, img2, img3, img4, nome, descricao } = conteudo[0];

    return (

        <div className='bg-[#041537]'>

            <div className='relative py-32 sm:py-60'>
                <img src={Banner} alt='imagem' className='opacity-10 absolute inset-0 h-full w-full object-cover' />
                <h2 className='mt-10 mx-auto text-center font-montserrat text-3xl sm:text-7xl font-bold text-[#e4d5e7]'>{nome}</h2>
                <Header></Header>
            </div>

            <nav className="mt-20 mx-2 sm:mx-40 isolate flex flex-wrap divide-x divide-gray-300 rounded-lg shadow" aria-label="Tabs">
                <a href="../produtos/blindagem-eletrostatica" className="group relative min-w-0 flex-1 overflow-hidden rounded-l-lg bg-gray-100 px-2 py-2 sm:px-4 sm:py-4 text-center text-sm sm:text-base font-medium text-gray-800 hover:bg-gray-300 hover:text-gray-800 focus:z-10">
                    <span>Blindagem Eletrostática</span>
                    <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent"></span>
                </a>
                <a href="../produtos/distribuicao-e-meia-forca" className="group relative min-w-0 flex-1 overflow-hidden bg-gray-100 px-2 py-2 sm:px-4 sm:py-4 text-center text-sm sm:text-base font-medium text-gray-800 hover:bg-gray-300 hover:text-gray-800 focus:z-10">
                    <span>Distribuição e Meia Força</span>
                    <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent"></span>
                </a>
                <a href="../produtos/media-forca-e-forca" className="group relative min-w-0 flex-1 overflow-hidden bg-gray-100 px-2 py-2 sm:px-4 sm:py-4 text-center text-sm sm:text-base font-medium text-gray-900 hover:bg-gray-300 hover:text-gray-800 focus:z-10">
                    <span>Média Força e Força</span>
                    <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-[#5384df]"></span>
                </a>
                <a href="../produtos/moldados" className="group relative min-w-0 flex-1 overflow-hidden rounded-r-lg bg-gray-100 px-2 py-2 sm:px-4 sm:py-4 text-center text-sm sm:text-base font-medium text-gray-800 hover:bg-gray-300 hover:text-gray-800 focus:z-10">
                    <span>Moldados</span>
                    <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent"></span>
                </a>
            </nav>

            <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 class="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">{nome}</h2>
                    <p class="mt-4 text-gray-400">{descricao}</p>

                    <div class="mt-10">
                        <h2 class="text-2xl text-center font-bold tracking-tight text-gray-300 sm:text-3xl">SOLICITE UM ORÇAMENTO</h2>
                        <form action='https://formsubmit.co/alanaandreazza26@gmail.com' method='POST' className='mx-auto max-w-xl px-10'>
                            <input type='text' name='nome' id='nome' autocomplete='given-name' placeholder='Nome' className='mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 sm:py-2 sm:mt-4 text-gray-900 shadow-sm bg-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                            <input type='email' name='email' id='email' autocomplete='email' placeholder='E-mail' className='mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 sm:py-2 sm:mt-4  text-gray-900 shadow-sm bg-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                            <input type='tel' name='telefone' id='telefone' autocomplete='tel' placeholder='Telefone' className='mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 sm:py-2 sm:mt-4  text-gray-900 shadow-sm bg-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                            <textarea name='mensagem' id='mensagem' rows='4' placeholder='Mensagem' className='mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 sm:py-2 sm:mt-4 text-gray-900 shadow-sm bg-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                            <input type='hidden' name='_next' value='INCLUIR' />
                            <input type="hidden" name="_template" value="table" />
                            <input type='hidden' name='_captcha' value='false' />
                            <input type="hidden" name="_subject" value={nome} />

                            <div className='mt-4 sm:mt-4 flex justify-center'>
                                <button
                                    type='submit' className='border-slate-300 border-2 sm:px-4 px-1 py-1 text-sm sm:text-lg font-semibold text-slate-300 shadow-sm hover:text-[#041537] hover:bg-slate-300'>SOLICITAR ORÇAMENTO <span aria-hidden='true'> &rarr;</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="slider-container relative">
                <Slider {...settings}>
                    <div>
                        <img src={img1} alt=' ' />
                    </div>
                    <div>
                        <img src={img2} alt=' '  />
                    </div>
                    <div>
                        <img src={img3} alt=' ' />
                    </div>
                    <div>
                        <img src={img4} alt=' ' />
                    </div>
                </Slider>
            </div>
                {/*<div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100" />
                    <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg" alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100" />
                    <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg" alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100" />
                    <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg" alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100" />
                </div>*/}
            </div>

            <Footer />

        </div >
    )
}

export default P1AneisCalcosPrensagem