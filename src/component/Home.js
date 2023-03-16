import React from 'react'
import { CartState } from '../Context/Context';
import Filter from './Filter';
import SingleProduct from './SingleProduct';
import "./style.css"



const Home = () => {
  
  const {
    state
  }=CartState();
  const products=state.Products;
  console.log("home",products)
    return (
    <div className='home'>
    <Filter/>
      <div className='productContainer'>
        {
          products.map((prod)=>{
           return <SingleProduct prod={prod} key ={prod.id}/>
          })
        }
        
      </div>
    </div>
  )
}

export default Home