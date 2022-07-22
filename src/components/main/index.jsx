import { Component, Fragment } from "react";
import Header from '../header/index'
import Listado from "../listado";
import Detalle from "../detalle";
import { useSelector, useDispatch } from 'react-redux'
import './styles.css'

const Main = () => {
    const state = useSelector( state => state)
    return (
      <Fragment>
        <Header/>
        { state.vista === 'listado' ? <Listado/> : <Detalle/> }
      </Fragment>
    );
}

export default Main