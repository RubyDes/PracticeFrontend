import React, { Component } from 'react'
//import React from 'react'
import { Link } from 'react-router-dom'
import Item from './Item'
//import Items from './Item'
import Layout from './Layout'
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

class ShowDopInfo extends React.Component {


  render() {
    return (
      <div className='dop__info'>
        <h1>Dop Information</h1>
          <div className='item'>
          </div>
      </div>
    )
  }
}

export default ShowDopInfo