import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faXmark } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

import './styles.css'
import "@fontsource/roboto";

const Detalle = () => {
    const state = useSelector( state => state )
    const dispatch = useDispatch()
    
    useEffect(  () => {
        console.log('entro al efect');
         axios.get(`http://localhost:3001/detallePeliculas/${state.seleccionado}`)
            .then((res) => {
                console.log(res)
                dispatch({
                    type: 'SET_PELICULA_SELECCIONADA',
                    payload: res.data,
                }) 
            })
    }, [])

    const {
        pelicula
    } = state;
    console.log('pelicula: ',pelicula);

    const cerrar = () => {
        dispatch({
            type: 'REGRESAR_LISTADO',
        })
    }

    return(
        <div className='contenedor'>
            <div className='icon-cerrar'>
                <FontAwesomeIcon icon={faXmark} onClick={() => cerrar()}/>
            </div>
            <div className='cont-img-zoom'>
                <div className='cont-detalle'>
                    <div className='cont-img-detalle' style={
                            {
                                backgroundImage: `url(${pelicula.imagenDetalle})`,
                                height: '450px',
                            }
                        }>
                    </div>
                    <div>
                    </div>
                    <h2>{ pelicula.nombre}</h2>
                    <div className='cont-text-detalle'>
                        <img src={pelicula.imagenDetalle} alt="" />
                        <div className='descripcion'>
                            <span>
                                {pelicula.detalles.descripcion}
                            </span>
                            <div className='span-props'>
                                <span className='span-normal'>
                                    {pelicula.detalles.anio}
                                </span>
                                <span className='span-normal'>
                                    {pelicula.detalles.duracion}
                                </span>
                                {pelicula.detalles.subtitulada ?
                                <span className='span-lenguaje'>
                                    Subtitulada    
                                </span> : null }

                                {pelicula.detalles.doblada ? 
                                <span className='span-lenguaje'>
                                    Doblada
                                </span> : null}
                                <div className='div-detalles'>
                                    <span>Actor: </span>
                                    {pelicula.actores.map( item => <span className='span-subrayado'> {item},</span>)}
                                </div>
                                <div className='div-detalles'>
                                    <span>Escritor: </span>
                                    {pelicula.escritores.map( item => <span className='span-subrayado'> {item},</span>)}
                                </div>
                                <div className='div-detalles'>
                                    <span>Genero: </span>
                                    {pelicula.genero.map( item => <span className='span-subrayado'> {item},</span>)}
                                </div>
                                <div className='div-detalles'>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Detalle