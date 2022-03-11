import React from 'react'
import { CardWidget } from './CardWidget'

export const Item = (props) => {
    console.log(props)
  return (
    <div>
        <img src="./images/carritoIcono" alt="icono carrito" />
        <CardWidget>{props}</CardWidget>
    </div>
  )
}
