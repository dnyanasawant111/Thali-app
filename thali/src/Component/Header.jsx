import React from 'react'

import { useSelector } from 'react-redux'


export default function Header() {

  const thalii = useSelector(state => state.thali.thali)

  return (
    <div>


      <h1 className="header">  Welcome To Indian Special Thali  </h1> <br/>

      <img className="rounded-circle" width="280px" height="110px" src="https://i.pinimg.com/originals/21/00/03/2100034c4cf5f023320a214be6fb61d4.jpg" />


      <h3> cart- {thalii.length} </h3>
    </div>
  )
}