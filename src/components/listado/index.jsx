import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import './styles.css'
import "@fontsource/roboto";

const Listado = () => {
    
    const state = useSelector( state => state)
    const dispatch = useDispatch()

    const  {
        arrPeliculas,
        stringFiltrado,
    } = state

    const arrFiltrado = arrPeliculas.filter((pelicula) => {
        return pelicula.nombre.toLowerCase().includes(stringFiltrado)
    })

    useEffect( () => {
        axios
            .get(`http://localhost:3001/peliculas`)
            .then((res) => {
                dispatch({
                    type: 'SET_ARRAY_PELICULAS',
                    payload: res.data,
                }) 
            })
    }, [])

    const cambiarValor = (event) => {
        dispatch({
            type: 'CAMBIAR_VALOR_STRING_FILTRADO',
            payload: event.target.value,
        })
    }

    const irDetalle = (id) => {
        console.log('selec',id)
        dispatch({
            type: 'IR_A_DETALLE',
            payload: id,
        })
    }
    
    return (
        <div className='contenedor'>
            <div className='filtro'>
                <label for="buscar">Buscar</label>
                <input
                    type="search"
                    id='buscar'
                    onChange={(event) => cambiarValor(event)}
                />
            </div>
            <div className='cont-listado'>
                <div className='listado'>
                {arrFiltrado.map((item) => {
                    return (
                        <div className='card' onClick={() => irDetalle(item.id)}>
                            <img
                                src={item.imagenHorizontal}
                                alt=""
                            />
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    );
}

export default Listado