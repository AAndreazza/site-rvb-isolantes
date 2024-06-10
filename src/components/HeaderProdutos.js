import React, { useState } from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logo1.png'

const HeaderProduto = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <header className='absolute inset-x-0 -top-8 z-50'>
            <nav className='flex items-center justify-between p-5 lg:px-8' aria-label='Global'>
                <div className='flex lg:flex-1'>
                    <Link to='/' className='-m-1.5 p-1.5'>
                        <span className='sr-only'>RVB Isolantes para transformadores</span>
                        <img className='h-20 w-20 lg:h-36 lg:w-36' src={Logo} alt='Logo' />
                    </Link>
                </div>

                {/* Barra lateral - abrir */}
                <div className='flex lg:hidden'>
                    <button
                        type='button'
                        className='-m-1.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200'
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        <span className='sr-only'>Abrir menu</span>
                        <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                            <path stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                        </svg>
                    </button>
                </div>
                <div className='hidden lg:flex lg:gap-x-14'>
                    <Link to='/' className='text-xl font-normal leading-6 text-gray-200'>Home</Link>
                    <Link to='../../empresa' className='text-xl font-normal leading-6 text-gray-200'>Empresa</Link>
                    <Link to='../../empresa' className='text-xl font-normal leading-6 text-gray-200'>Políticas</Link>
                    <Link to='../' className='text-xl font-normal leading-6 text-gray-200'>Produtos</Link>
                    <Link to='../../contato' className='text-xl font-normal leading-6 text-gray-200'>Contato</Link>
                    <Link to='../../blog' className='text-xl font-normal leading-6 text-gray-200'>Blog</Link>
                </div>

            </nav>

            {/* Barra lateral - opções e fechar */}
            <div className={`lg:hidden ${isSidebarOpen ? '' : 'hidden'}`} role='dialog' aria-modal='true'>
                <div className='fixed inset-0 z-50'></div>
                <div className='bg-[#101d41] fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-fundoGeral px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                    <div className='flex items-center justify-between'>
                        {/*<Link to='/' className='-m-1.5 p-1.5'>
                                <button onClick={() => setIsSidebarOpen(false)}>
                                    <span className='sr-only'>Psicóloga Jullia</span>
                                    <img className='h-8 w-auto' src={Logo} alt='' />
                                </button>
    </Link> */}
                        <button
                            type='button'
                            className='-m-2.5 rounded-md p-2.5 text-gray-200'
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <span className='sr-only'>Fechar menu</span>
                            <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                                <path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        </button>
                    </div>
                    <div className='mt-6 flow-root'>
                        <div className='-my-6 divide-y divide-gray-500/10'>
                            <div className='space-y-2 py-6'>
                                <Link to='/' className='-mx-3 block rounded-lg px-3 py-2 text-xl font-light leading-7 text-gray-200 hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>Home</button></Link>
                                <Link to='../../empresa' className='-mx-3 block rounded-lg px-3 py-2 text-xl font-light leading-7 text-gray-200 hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>Empresa</button></Link>
                                <Link to='../../empresa' className='-mx-3 block rounded-lg px-3 py-2 text-xl font-light leading-7 text-gray-200 hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>Políticas</button></Link>
                                <Link to='../' className='-mx-3 block rounded-lg px-3 py-2 text-xl font-light leading-7 text-gray-200 hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>Produtos</button></Link>
                                <Link to='../../contato' className='-mx-3 block rounded-lg px-3 py-2 text-xl font-light leading-7 text-gray-200 hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>Contato</button></Link>
                                <Link to='../../blog' className='-mx-3 block rounded-lg px-3 py-2 text-xl font-light leading-7 text-gray-200 hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>Blog</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderProduto