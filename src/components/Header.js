import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Order from './Order'

/**Функции для проверки, есть ли в корзине товары, если нет: "Cart empty" */
const showOrders = (props) => {
  let sum = 0;
  props.orders.forEach(el => sum += Number.parseFloat(el.price));
  return(<div>
    {props.orders.map(el =>(
      <Order onDelete = {props.onDelete} key={el.id} item={el} />
    ))}
    <p className='sum'>Price all products: {new Intl.NumberFormat().format(sum)}$</p>
  </div>)
}

const showNothing = () => {
  return(<div className = 'empty'>
    <h2>Cart empty</h2>
  </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
      <div className="header__menu">
        <div className="header__logo">
                <Link to={'/'} className='link__decoration'><p className='header__logo_img'>realme</p></Link>
                {/* <p className="header__logo_img"> realme </p> */}
        </div>
        <div className="header__menu_box">
            <ul className='link'>Smartphone</ul>
            <ul className="link">TV</ul>
            <ul className="link">Aksessoris</ul>
            {/* <ul className="link">Recipes</ul>
            <ul className="link">About Us</ul> */}

            <div className="header__menu_box_image">
              <div className="link"><button className='button1'></button></div>
              <div className="link"><button onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`button2 ${cartOpen && 'active'}`}></button></div>
              <div className="link"><button className='button3'></button></div>
            </div>
            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.length > 0 ?
                  showOrders(props) : showNothing()
                }
              </div>
            )}


        </div>
      </div>
  </header>
  )
}
