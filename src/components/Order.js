import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
          <img src={"./img/" + this.props.item.img} alt='' /*onClick={() => 1}*/ />
          <h2>{this.props.item.title} </h2>
          <p>{this.props.item.comment} </p>
          <b>{this.props.item.price} </b>
          <FaTrash className='delete-img' onClick={() => this.props.onDelete(this.props.item.id)} />
      </div>
    )
  }
}

export default Order