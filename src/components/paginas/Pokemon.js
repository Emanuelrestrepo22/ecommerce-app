import React, {useState} from 'react'
import { useFetch } from '../useFetch'
import { Cards } from '../cards/Cards';

const Pokemon = () => {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const estado = useFetch(url);
    const {cargando, data}= estado
    cargando? console.log("cargando"):console.log(data.results)
  return (
    <div>
        <h1>Esta es un eCommerce de Pokemon</h1>
        {
            cargando
            ?
            <h1>Cargando...</h1>
            :
            <Cards results={data.results}/>
        }

    </div>
  )
}
export default Pokemon