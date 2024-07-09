import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import ShowDopInfo from './ShowDopInfo'


export class Item extends Component {
  render() {

    return (
      
      /*<div>{this.props.item.title}</div>*/
      <div className='item'>
        <Link key={this.props.items} to={'/ShowDopInfo/:id'} className='link__decoration'>
          <img src={"./img/" + this.props.item.img} alt='' /*onClick={() => 1}*/ />
          <h2>{this.props.item.title} </h2>
          <p>{this.props.item.comment} </p>
          <b>{this.props.item.price} </b>
          <div className='card'></div> 
        </Link> 

        <div onClick={() => this.props.onAdd(this.props.item)}>
          <button>{this.props.item.click} </button>
        </div>

      </div>
    )
  }
}

export default Item