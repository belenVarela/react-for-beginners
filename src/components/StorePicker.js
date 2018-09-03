import React from 'react'; //va a los archivos importados en node_modules y carga el paquete entero de react
import { getFunName } from '../helpers'; //usamos una función añadida por wesbos en ayuda

class StorePicker extends React.Component { //creamos un componente en react, lo que significa que creamos una clase
    //una clase en react necesita al menos un método: render
    //render determina que html (elementos dom) se renderizan en la página
    render() {
        return (
            <form className="store-selector">
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={ getFunName() }/>
                <button type="submit">Visit store</button>
            </form>
        )
    }
}

export default StorePicker; //exportamos el componente para hacerlo accesible desde otras partes de la aplicación

