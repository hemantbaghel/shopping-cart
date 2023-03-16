import React ,{useReducer,createContext,useContext} from "react";
import faker from "faker";
import { cartReducer } from "./Reducer";


const Context =createContext();
faker.seed(99)
const context = ({children}) => {
    const products=[...Array(20)].map(()=>({
        id: faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.random.image(),
        inStock:faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        ratings:faker.random.arrayElement([1,2,3,4,5]),

    })); 
   
    const[state,dispatch]= useReducer(cartReducer ,{
        Products:products,
        Cart:[]
    })
   
  return (

  <Context.Provider value={{ state,dispatch }}>{children}</Context.Provider>)
}

export default context;

export const CartState=()=>{
    return useContext(Context)

}