//import React, { Component } from 'react'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ShowDopInfo from './ShowDopInfo'
import Item from './Item'
import { Link, Outlet } from 'react-router-dom'
import Items from './Items'

class Layout extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      items: [], 
      ShowDopInfo: false,
      DopInfo: {}
    };
    //this.items = this.items.bind(this)
  }

  render() {
    return (
        <div className='loyout'>
          <Header />

          <ShowDopInfo items={this.state.itmes} />

          <Outlet />
 

          <Footer />
        </div>

    )
  }
    /*Вызывается при нажатии на товар*/
    onShowInfo(item) {
      this.setState({DopInfo: item})
      this.setState({ShowDopInfo: !this.state.ShowDopInfo})
    }
}
export default Layout
