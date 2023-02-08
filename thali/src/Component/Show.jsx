import React from 'react'

import { useSelector, useDispatch } from 'react-redux';

import { RemoveElement } from '../slice';

const Show = () => {

  
  const thali = useSelector(state => state.thali.thali)
  
  const dispatch = useDispatch()
  
  
  const Remove = () => {
    dispatch(RemoveElement())

  }
 
  let totalBill = 0

  for(let i=0;i<thali.length;i++){
    totalBill=totalBill+thali[i].totalPrice
  }

  
  return (
    
     
    <div >
      <div className="show2">
        {
          thali.map((ele, i) => (<div className="show">

            <p key={i}> 
            
             <img className="rounded-circle" src={ele.image} style={{ height: "80px", width: "180px" }} /> <br/>
        
              
                 Dish :{ele.name} {},
                
                
                   
                    Price :  ${ele.price} {}
                
                  <button  className="btn btn-danger" onClick={() => Remove(i)} >Remove-Item
                  </button>
              
      
            </p>
            
          </div>
          )
          )
        }
        
     <h1 className="result">  Total Bill : $ {totalBill }</h1>  

       
      
      </div>
    </div>
  )
}

export default Show