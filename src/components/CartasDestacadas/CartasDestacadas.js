import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import imgPortada from '../../assets/star.png'
import imgPoke1 from '../../assets/cartas/ampharos.png'
import imgPoke2 from '../../assets/cartas/snivy.png'
import imgPoke3 from '../../assets/cartas/volcarona.png'
import imgPoke4 from '../../assets/cartas/oshawott.png'
import imgPoke5 from '../../assets/cartas/sylveon.png'
import imgPoke6 from '../../assets/cartas/kyuremblanco.png'

const CartasDestacadas = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section class="container-xxl main-sections__slider">
            <div class="text-white py-2 d-flex align-items-center m-3">
                <img class="img-fluid h-40px ps-5" src={imgPortada} alt="gear icon" style={{width: 100}}/>
                <span class="fs-3 ps-3" style={{fontWeight: 'bold'}}>Cartas Destacadas</span>    
            </div>
            <Carousel responsive={responsive}>
                <div class="card bg-dark bg-gradient text-white border-2.5 border-light" style={{width: 224}}>
                    <img class="card--image" src={imgPoke1} alt="poke1" width="222"/>
                    <hr></hr>
                    <h4 class="text-center">AMPHAROS</h4>
                    <h6 class="price m-2">$1200 ARS</h6>
                    <p class="m-2">Tipo: Electrico</p>
                    <div class="d-grid gap-2 text-center mt-1 ">
                        <button class="btn btn-warning m-0 fw-bold" type="button">Añadir al Carro</button>
                    </div>
                </div>


                <div class="card bg-dark bg-gradient text-white border-2.5 border-light" style={{width: 224}}>
                    <img class="card--image" src={imgPoke2} alt="poke1" width="222"/>
                    <hr></hr>
                    <h4 class="text-center">SNIVY</h4>
                    <h6 class="price m-2">$499 ARS</h6>
                    <p class="m-2">Tipo: Planta</p>
                    <div class="d-grid gap-2 text-center mt-1">
                        <button class="btn btn-warning m-0 fw-bold" type="button">Añadir al Carro</button>
                    </div>
                </div>


                <div class="card bg-dark bg-gradient text-white border-2.5 border-light" style={{width: 224}}>
                    <img class="card--image" src={imgPoke3} alt="poke1" width="222"/>
                    <hr></hr>
                    <h4 class="text-center">VOLCARONA</h4>
                    <h6 class="price m-2">$2999 ARS</h6>
                    <p class="m-2">Tipo: Fuego</p>
                    <div class="d-grid gap-2 text-center mt-1">
                        <button class="btn btn-warning m-0 fw-bold" type="button">Añadir al Carro</button>
                    </div>
                </div>


                <div class="card bg-dark bg-gradient text-white border-2.5 border-light" style={{width: 224}}>
                    <img class="card--image" src={imgPoke4} alt="poke1" width="222"/>
                    <hr></hr>
                    <h4 class="text-center">OSHAWOTT</h4>
                    <h6 class="price m-2">$499 ARS</h6>
                    <p class="m-2">Tipo: Agua</p>
                    <div class="d-grid gap-2 text-center mt-1">
                        <button class="btn btn-warning m-0 fw-bold" type="button">Añadir al Carro</button>
                    </div>
                </div>


                <div class="card bg-dark bg-gradient text-white border-2.5 border-light" style={{width: 224}}>
                    <img class="card--image" src={imgPoke5} alt="poke1" width="222"/>
                    <hr></hr>
                    <h4 class="text-center">SYLVEON</h4>
                    <h6 class="price m-2">$1999 ARS</h6>
                    <p class="m-2">Tipo: Hada</p>
                    <div class="d-grid gap-2 text-center mt-1">
                        <button class="btn btn-warning m-0 fw-bold" type="button">Añadir al Carro</button>
                    </div>
                </div>


                <div class="card bg-dark bg-gradient text-white border-2.5 border-light" style={{width: 224}}>
                    <img class="card--image" src={imgPoke6} alt="poke1" width="222"/>
                    <hr></hr>
                    <h4 class="text-center">KyureM Blanco</h4>
                    <h6 class="price m-2">$9999 ARS</h6>
                    <p class="m-2">Tipo: Dragon</p>
                    <div class="d-grid gap-2 text-center mt-1">
                        <button class="btn btn-warning m-0 fw-bold" type="button">Añadir al Carro</button>
                    </div>
                </div>
            </Carousel>






        </section>
    )
}

export default CartasDestacadas