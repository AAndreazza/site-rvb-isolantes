import React from 'react'
import Header from '../components/Header'
import Banner from '../images/bannerContato.jpg'

const PaginaContato = () => {
    return (
        <div>
            <div className='relative py-32 sm:py-56'>
                <img src={Banner} alt='mesa com papéis' className='opacity-25 absolute inset-0 h-full w-full object-cover' />
                <h2 className='mt-10 mx-auto text-center font-montserrat text-3xl sm:text-7xl tracking-widest font-bold text-[#e4d5e7]'>CONTATO</h2>
                <p className='mt-4 mx-auto text-center font-montserrat text-base sm:text-3xl font-bold text-[#e4d5e7]'>FALE CONOSCO</p>
                <Header></Header>
            </div>

            <div class="relative isolate -mt-12 sm:-mt-20">
                <div class="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-2">
                    <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                            <h2 class="ml-1 text-5xl font-bold text-[#2f4c86]">ENTRE EM CONTATO</h2>
                            <h2 class="-mt-24 sm:-mt-12 text-5xl font-bold text-gray-300">ENTRE EM CONTATO</h2>
                            <dl class="mt-8 space-y-4 text-base leading-7 text-gray-300">
                                <div class="flex gap-x-4">
                                    <dt class="flex-none">
                                        <span class="sr-only">Endereço</span>
                                        <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                        </svg>
                                    </dt>
                                    <dd> <a class="hover:text-white" href="https://maps.app.goo.gl/WoEcTAMKSreeGiar7" target='_blank' rel="noreferrer">R. Gustavo Zimmermann, 3300 - Itoupava Central <br /> Blumenau, SC - 89062-101</a></dd>
                                </div>
                                <div class="flex gap-x-4">
                                    <dt class="flex-none">
                                        <span class="sr-only">Telefone</span>
                                        <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </dt>
                                    <dd>+55 (47) 3337-3769</dd>
                                </div>
                                <div class="flex gap-x-4">
                                    <dt class="flex-none">
                                        <span class="sr-only">Email</span>
                                        <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </dt>
                                    <dd><a class="hover:text-white" href="mailto:contato@rvbisolantes.com.br">contato@rvbisolantes.com.br</a></dd>
                                </div>
                                <div class="flex gap-x-4">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14245.37262134634!2d-49.0928723!3d-26.7972001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dee1d227341f67%3A0xdf62e871661db224!2sRVB%20Isolantes%20Para%20Transformadores!5e0!3m2!1spt-BR!2sbr!4v1717775073089!5m2!1spt-BR!2sbr"
                                        width="600"
                                        height="300"
                                        className='w-full mx-auto max-w-[22rem] lg:max-w-[53.25rem] mt-4'
                                        allowfullscreen=""
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"
                                        title='Mapa da localização da RVB Isolantes para Transformadores LTDA'>
                                    </iframe>
                                </div>
                            </dl>
                        </div>
                    </div>
                    {/* ALTERAR ACTION */}
                    <form action='https://formsubmit.co/alanaandreazza26@gmail.com' method='POST' class="px-6 lg:mt-60">
                        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label for="nome" class="block text-sm font-semibold leading-6 text-white">NOME</label>
                                    <input type="text" name="nome" id="nome" class=" mt-2.5 block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                                </div>
                                <div>
                                    <label for="telefone" class="block text-sm font-semibold leading-6 text-white">TELEFONE</label>
                                    <input type="tel" name="telefone" id="telefone" class="mt-2.5 block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="email" class="block text-sm font-semibold leading-6 text-white">EMAIL</label>
                                    <input type="email" name="email" id="email" class="mt-2.5 block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="assunto" class="block text-sm font-semibold leading-6 text-white">ASSUNTO</label>
                                    <input type="text" name="assunto" id="assunto" class="mt-2.5 block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="mensagem" class="block text-sm font-semibold leading-6 text-white">MENSAGEM</label>
                                        <textarea name="mensagem" id="mensagem" rows="4" class="mt-2.5 block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"></textarea>
                                </div>
                            </div>

                            <input type='hidden' name='_next' value='https://escobencontabilidade.netlify.app/' />
                            <input type='hidden' name='_captcha' value='false' />

                            <div class="mt-8 flex justify-end">
                                <button type="submit" class="rounded-md bg-[#4b6caf] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">ENVIAR MENSAGEM</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default PaginaContato;