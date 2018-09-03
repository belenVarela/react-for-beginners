import React from 'react'; //import necesario aunque no se use el elemento
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App'
import NotFound from './NotFound'

const Router = () => (
    <BrowserRouter>
        <Switch> {/*va probando una a una las urls hasta encontrar la que corresponda*/}
            <Route exact path="/" component={StorePicker} />
            <Route exact path="/store/:storeId" component={App} />
            <Route component={NotFound} /> {/*página por defecto si no se encuentra un enrutado*/}
        </Switch>
    </BrowserRouter>
)

export default Router;