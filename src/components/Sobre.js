import React from 'react'
import Empresa from '../images/imagemTeste.png'

const Sobre = () => {
    return (
        <div>
            <div class="mt-20 relative bg-slate-300">
                <div class="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                    <img class="h-full w-full object-cover" src={Empresa} alt="" />
                </div>
                <div class="relative mx-auto max-w-7xl py-10 px-4 lg:px-8 lg:py-20">
                    <div class=" md:ml-auto md:w-2/3 lg:w-1/2 lg:pl-20 lg:pr-0 xl:pl-20">
                        <p class="mt-0 text-3xl font-bold tracking-tight text-[#041537] sm:text-4xl">CONHEÇA A RVB</p>
                        <h2 class="text-base font-semibold leading-7 text-[#2b3b5a]">Isolantes para Transformadores LTDA</h2>

                        <p class="mt-6 text-base leading-7 font-semibold indent-5 text-[#041537]">A RVB Isolantes para transformadores LTDA é uma empresa que foi <b>fundada em 1994</b>, localizada no município de Blumenau, em Santa Catarina. A empresa surgiu com a terceirização do setor de isolantes, fabricado internamente na WEG.</p>
                        <p class="mt-6 text-base leading-7 font-semibold indent-5 text-[#041537]">Desde sua fundação, teve como objetivo principal o <b>fornecimento de materiais isolantes</b>, em um primeiro momento apenas em madeira de lei. Atualmente trabalha com materiais fabricados em papelões de alta densidade, em madeira desificada, fenolite, papéis neutros, diamantados termoestabilizados, Nomex® anéis metalizados, blindagens, dentre outros.</p>
                        <div class="mt-8 flex justify-center">
                            <a href="#" class="inline-flex rounded-md bg-[#041537] px-3.5 py-2.5 text-lg font-semibold text-slate-100 shadow-sm hover:bg-[#242f5f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">CONHEÇA AS NOSSAS POLÍTICAS</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sobre