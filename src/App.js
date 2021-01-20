import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import { Provider } from 'react-redux';
import './styles/bootstrap.scss';
import './styles/global.scss';
//import { store } from './redux/store.js';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';

const App = () => (
  //<Provider store={ store }>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={ Homepage } />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  //</Provider>
);

export { App };
