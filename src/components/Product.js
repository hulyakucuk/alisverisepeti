import React from 'react'
import {useState} from "react";
import basketItem from './BasketItem';

function Product({product,basket,total,money,setBasket}) {
  
const basketItem = basket.find(item => item.id ===product.id)

  const addBasket = () =>{
    const checkBasket=basket.find(item=>
        item.id === product.id)
        if(checkBasket){

            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id),checkBasket])
        }else{
            setBasket([...basket,{
                id:product.id,
                amount:1
            }])
        }
  }
  
const removeBasket = () => {
    const currentBasket=basket.find(item=>  item.id === product.id)
    const basketWithoutCurrent =basket.filter(item => item.id !==product.id)

            currentBasket.amount -= 1
            if (currentBasket.amount === 0){

                    setBasket([...basketWithoutCurrent])
            }else {
                setBasket([...basketWithoutCurrent,currentBasket])

            }
        
}




    return (
    <>
    <div className='product'>
      <img src={product.image}></img>
      <h6>{product.title}</h6>
      <div className='price'>${product.price}</div>
      <div className='actions'>
        <button className="sell-btn" disabled={!basketItem} onClick={removeBasket}>sat</button>
        <span className='amount'>{basketItem && basketItem.amount || 0}</span>
        <button className="buy-btn"  onClick={addBasket}>satın al</button>

      </div>

      <style jsx>{`
.product {
  padding:10px;
  background:#fff;
  border:1px solid #ddd; 
  margin-bottom:20px;
  width:25%;
    }  
     .product img{
      width:100%;
     } 
    .product h6{
      font-size:20px;
      margin-bottom:10px;
    }  
    .product .price{
      font-size:20px;
      color:#2ba310;
    }
    .product .actions{
      display:flex;
      align-items:center;
    }
    .actions button{
      height:40px;
      padding:0 15px;
      flex:1;
    }
    .actions .buy-btn{
      background:#65a3e6;
      font-size:14px;
      font-weight:500;
      color:black;
      border-radius:0 4px 4px 0;
    }
    .actions .sell-btn{
      background:#ccc;
      font-size:14px;
      font-weight:500;
      color:black;
      border-radius: 4px 0 0  4px ;
    }
    .actions .amount{
      width:50px;
      text-align:center;
    }
      `}</style>
    </div>
    </>
  )
}
export default  Product