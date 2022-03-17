import React, {useState, useEffect} from 'react'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemListContainer = ({saludo}) => {

  const onAdd = () => {
  console.log("Agregue al carrito")
    
}
  return (
    <>
      <h1>{saludo}</h1>
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </>
  )
}

