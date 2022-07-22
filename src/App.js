import './App.css';
import { Component, Fragment } from "react";
import Header from './components/header/index';
import Listado from "./components/listado";
import Detalle from "./components/detalle";
import { useSelector } from 'react-redux'

const App = () => {
  const state = useSelector( state => state)
  return (
    <Fragment>
      <Header/>
      { state.vista === 'listado' ? <Listado/> : <Detalle/> }
    </Fragment>
  );
}
 
export default App;
