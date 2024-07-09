import React, { Component } from 'react'
import { useParams } from 'react-router-dom'

export default class ProductInfo extends Component {

  render() {
    console.log(useParams)
    return (
      <div>ProductInfo</div>

    )
  }
}
