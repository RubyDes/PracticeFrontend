import React, { Component } from 'react'
//import React from 'react'
import { Link } from 'react-router-dom'
import Item from './Item'
//import Items from './Item'
import Layout from './Layout'
import Order from './Order'

class ShowDopInfo extends React.Component {


  render() {
    return (
      <div className='dop__info'>
        <div className='dop_info_second' >
          <img src={"./img/" + this.props.item.bigimg} alt='' onClick={() => this.props.onShowInfo(this.props.item)} />
          <h2>{this.props.item.title} </h2>
          <p>{this.props.item.comment} </p>
          <b>{this.props.item.price} </b>

          <div onClick={() => this.props.onAdd(this.props.item)}>
            <button>{this.props.item.click} </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowDopInfo