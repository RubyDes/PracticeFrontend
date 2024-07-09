import React from "react"
import ShowDopInfo from "./components/ShowDopInfo" 
import { Link, Routes, Switch, Route, BrowserRouter, Outlet } from 'react-router-dom'
import Layout from "./components/Layout"
import HomePage from "./components/HomePage"
import ProductInfo from "./components/ProductInfo"


export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders:[],
      item: [],
      ShowFullItem: false,
      DopInfo: {}
    }
    // this.addToOrder = this.addToOrder.bind(this)
  }   
 /* <Items items={this.state.items}/> */ 
  render() { 
    return (
      <>
        <div className="wrapper">          
          <Routes>
            <Route path="/" element={<HomePage items={this.state.item} />}/>           
            <Route path="/ShowDopInfo/:id" element={<Layout />} />
          </Routes>

        </div>    
      </>
      //<div>Shop and Buy</div>
    );   
  }  
    /*Вызывается при нажатии на товар*/
    // onShowInfo(items) {
    //   this.setState({DopInfo: items})
    //   this.setState({ShowDopInfo: !this.state.ShowDopInfo})
    // } 


    // addToOrder(item) {
    //   this.setState({orders: [...this.state.orders, item] })
    // }


}
export default App;
