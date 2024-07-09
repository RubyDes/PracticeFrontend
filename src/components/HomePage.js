import React, { Component } from 'react'
import Items from './Items'
import Header from './Header'
import Footer from './Footer'
import Layout from './Layout'

export class HomePage extends React.Component {
  constructor(props) {
    props ={name:'app_props'}
    super(props)
    this.state = {
      orders:[],
      items: [
        {
          id: 1,
          title: 'Realme C55',
          comment: '64MP Kamera Juara',
          price: '2.499.000',
          img: 'productimages.png',
          bigimg: 'productimagesbig.png',
          click: 'Add To Cart'
        },
        {
          id: 2,
          title: 'Realme C35',
          comment: '32M Kamera Juara',
          price: '1.599.00',
          img: 'productimage.png',
          // bigimg: 'productimagesbig.png',
          click: 'Add To Cart'
        }
      ],
      ShowDopInfo: false,
      DopInfo: {}

    }
    this.onShowInfo = this.onShowInfo.bind(this)
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }  
  render() {
    return (
      <div>
        <Header orders={this.state.orders} onDelete = {this.deleteOrder}/>
        <div className="header__img">
          <div className="header__text">
            <h1 className="title"> Realme 10 Pro+ 5G </h1>
            <h2 className="subtitle">Curved Display, New Vision</h2>
            <p className="postsubtitle">120Hz Curved Vision display | 108MP Pro light Camera</p>
            <h2 className='priceText'>Rp 5.999.000</h2>
            <button className="buttonCek_Spesifikasi">Cek Spesifikasi</button>
            <button className="buttonBeli_Sekarang">Beli Sekarang</button>
          </div>
        </div>
        <Items onShowInfo={this.onShowInfo} items={this.state.items} onAdd={this.addToOrder}/>
        {this.state.ShowDopInfo && <Layout onShowInfo={this.onShowInfo} item={this.state.DopInfo} />} 

        {/* <Footer /> */}
      </div>
    )
  }
    /*Вызывается при нажатии на товар*/
    onShowInfo(item) {
      this.setState({DopInfo: item})
      this.setState({ShowDopInfo: !this.state.ShowDopInfo})
    }

    addToOrder(item) {
      let isInArray = false
      this.state.orders.forEach(el => {      /*Проверка на наличие одинаковых товаров в корзине*/
        if(el.id === item.id)
          isInArray = true
      });
      if(!isInArray)
        this.setState({orders: [...this.state.orders, item] })
    }

    deleteOrder(id) {
      this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }
}

export default HomePage