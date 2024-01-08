import React from 'react'
import Carousel from '../carousel/Carousel'
import CartasDestacadas from '../CartasDestacadas/CartasDestacadas'
import Portada from '../portada/Portada'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import ItemListContainer from '../ItemListContainer/ItemListContainer'


const Inicio = () => {
    return (
        <div>   
            <Portada />
            <Navbar />
            <Carousel />
            <CartasDestacadas />
            <Footer />
        </div>
    )
}

export default Inicio