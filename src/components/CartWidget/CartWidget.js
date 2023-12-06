import React from 'react'
import imgCarrito from '../../assets/pokebag.png'
import './cartwidget.css'

const CartWidget = () => {
    return (
        <div className='cart-widget'>
            <img className="cart-widget-icon" src={imgCarrito} alt="cart-icon"/>
            <span className='cart-widget-count'>5</span>
        </div>

    )
}

export default CartWidget