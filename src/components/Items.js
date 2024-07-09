import React, { Component } from 'react'
import Item from './Item'
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom'
import ProductInfo from './ProductInfo'
import App from '../App'

import ShowDopInfo from './ShowDopInfo'

export class Items extends Component {
  render() {
    return (
      <main>
        <div className='main__size'>
          <div className='main__text' >
            <h1 className='title1'>Realme C Series</h1>
            <h2 className='subtitle1'>Dear to Leap</h2>
            <button className='button12'>Lihat semua tipe</button>
          </div>
          <div className='main__img'>
            <div className='banner'></div>
            {this.props.items.map(el => (
                /*<h1>{el.title}</h1>*/
                <Item items = {this.props.items} key={el.id} item={el} onAdd={this.props.onAdd}/>
            ))}  
            </div>      
        </div> 
      </main>
    )
  }
}

export default Items