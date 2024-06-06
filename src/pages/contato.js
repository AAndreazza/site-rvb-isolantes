import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PaginaContato from '../components/PaginaContato'


const Contato = () => {
    return(
        <div className='bg-[#041537]'>
        <Header></Header>
        <PaginaContato />
        <Footer />
        </div>
    )
}

export default Contato