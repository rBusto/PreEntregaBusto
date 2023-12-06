import React from 'react'
import image from '../../assets/logo.png'
import './portada.css'

const Portada = () => {
    return (
        <div className='portada'>
            <div className='portada__img'>
                <img src={image} alt='' />
            </div>
        </div>
    )
}

export default Portada