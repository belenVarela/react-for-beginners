import React from 'react'; //va a los archivos importados en node_modules y carga el paquete entero de react
import { render } from 'react-dom'; //en este caso cargamos solo el método render del paquete react dom
import Router from './components/Router';
import "./css/style.css"

//indicamos donde montar el código javascript (es decir, el componente creado) en el dom del html
render(<Router />, document.querySelector('#main')); //lamamos al router para que resuelva la url indicada

