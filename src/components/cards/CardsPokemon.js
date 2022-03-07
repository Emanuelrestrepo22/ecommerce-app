import React from 'react'
import { useFetch } from '../useFetch'

export const CardsPokemon = ({url}) => {
    const estado = useFetch(url);
    const {cargando, data}= estado

    return (
        <div> 
            {
                cargando
                ?
                <h1>cargando</h1>
                :
                <div className='cards' style={{width:"14rem"}}>
                    <div className='card-header'>
                        <h5 className='card-title'></h5>
                    </div>
                    
                    <div className='card-body'>
                        <img src='' alt='pokemon'/>
                    </div>

                    <div className='card-footer'>
                        <p className='card-text text-capitalize'> </p>
                    </div>

                </div>    
                
            }
        </div>          
    )
}