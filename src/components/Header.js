import React from 'react'


function Header({total,money}) {
  return (
    <>
        {total>0 && money-total!==0 &&(
            <div  className='header'>Harcayacak ${money-total} paranız kaldı.
            </div>
        )}
        {total===0&&(
            <div  className='header'>Harcamak için ${money} paranız var!</div>
        )}
        {
            money-total ===0 && (
                <div  className='header'>paranız bitti!</div>
            )
        }
      
        <style  jsx="true">{`
        .header{
            position:sticky;
            top:0;
            background:linear-gradient(to bottom,#e65c07,#d4955b);
            height:60px;
            display:flex;
            align-items:center;
            justify-content:center;
            color:#fff;
            font-size:24px;
            letter-spacing:1px;
            font-weight:bold;
        }`}

        </style>
    </>
  )
}
export default Header