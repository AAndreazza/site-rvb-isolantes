import React from 'react'
import PoliticasEmpresa from '../components/PoliticasEmpresa'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Empresa = () => {
    return(
        <div className='bg-[#041537]'>
        <Header></Header>
        <PoliticasEmpresa />
        <Footer />
        </div>
    )
}

export default Empresa