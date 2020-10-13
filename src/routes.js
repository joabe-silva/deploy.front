import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main';
import Item from './pages/item';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/item/:id" component={Item} />
        </Switch>
    </BrowserRouter>
);

export default Routes;