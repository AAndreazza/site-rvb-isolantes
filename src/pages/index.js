import React from 'react'
import Hero from '../components/Hero'
import ProdutosInicial from '../components/ProdutosInicial'
import Sobre from '../components/Sobre'
import Footer from '../components/Footer'

const Index = () => {
    return(
        <div className='bg-[#041537]'> {/*bg-[#041537] [#273574]*/}
        <Hero />
        <ProdutosInicial />
        <Sobre />
        <Footer />
        </div>
    )
}

export default Index