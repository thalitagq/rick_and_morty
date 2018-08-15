import React from 'react';
import CharacterCard from '../components/CharacterCard';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../App'


const  Router = (character) =>  (
    <BrowserRouter>
        <Switch>
            <Route path = "/" component = {App} exact />
            <Route path = "/character/:id" component = {CharacterCard}/>
        </Switch>
    </BrowserRouter>
);

export default Router;
