import React, {useState, useEffect} from 'react'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemListContainer = () => {
  let count = 0;
  let stock = 5;
  // let newName = "";
  const [counter, setCounter] = useState(1);
  // const [nombre, setNombre] = useState("Restrepo");

  useEffect(() => {
  }, [counter]);

  const decrement = () => {
    if(counter > 1){
        count = counter-1;
        setCounter(count);
    }
 }

  const onAdd = () => {
      if(counter < stock){
          count=counter+1;
          setCounter(count);
      }
      
 }
  return (
    <>
      <ItemCount initial={counter} stock={5} onAdd={onAdd} decrement= {decrement}/>
    </>
  )
}

