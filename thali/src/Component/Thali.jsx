import React, { useState } from "react"

import { useDispatch, useSelector } from 'react-redux';

import { addThali } from "../slice"

import { useNavigate } from 'react-router-dom';


export default function Thali() {

  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const thali = useSelector(state => state.thali.thaliStore)

  const thalii = useSelector(state => state.thali.thali)


  const dispatch = useDispatch()


  const add = (item) => {

    item = JSON.parse(JSON.stringify(item));

    item.quantity = quantity;

    item.totalPrice = Number(item.quantity) * Number(item.price)

    dispatch(addThali(item));

  }

  function onnevigate() {
    if (thalii.length >= 2) {

      navigate('/show');
    }
    else {
      alert("Add Minimum two items")
    }

  }

  return (
    <div>
<br/>
      <button className="btn btn-success" onClick={onnevigate}> Checkout </button> <br/> <br/>


      {
        thali.map((ele, i) => {
          return (
            <div key={i} className="main">


              <h1> {ele.name}  </h1>

              <p>   <img className="rounded-circle" src={ele.image} style={{ height: "280px", width: "800px" }} /> </p>

              <button className="btn btn-warning" onClick={() => add(ele)} >Add</button>

              <h3 > Price : ${ele.price}</h3>


            </div>
          )
        })
      }


    </div>
  )


}