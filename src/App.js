import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import './styles/bootstrap.scss';
import './styles/global.scss';
import { store } from './redux/store';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { PokemonPage } from "./components/views/PokemonPage/PokemonPage";

const App = () => (
  <Provider store={ store }>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={ Homepage } />
          <Route exact path='/pokemon/:id' component={ PokemonPage } />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export { App };
