import React from 'react'
import BasketItem from './BasketItem';

 function Basket({basket,resetBasket,total,products}) {
  return (
    <>
    <div style={{border:"0.5px solid black", textAlign:"center",borderRadius:"3px",padding:"10px",width:"400px", margin:"10px auto"}}>
      {basket.map(item => (
      <BasketItem   key={basket.id}  item={item} product={products.find(p=>p.id === item.id)}/>
      ))}
     
<div >
    Toplam: ${total}
</div>
<button style={{border:"0.5px solid green",padding:"3px",margin:"4px",backgroundColor:"green",color:"white"}} onClick={resetBasket}>Sepeti sıfırla</button>
</div>
    </>
  )
}
export default Basket