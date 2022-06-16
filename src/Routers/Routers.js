import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { lazy } from '@loadable/component';

import { Navbar, Main, NotFound } from '../components/layout';

import { Images } from '../components/images';
import { ImageDetail, UploadImage } from '../components/image';

import store from '../store';

// const Navbar = lazy(() => import('../components/layout/Navbar'));
// const Main = lazy(() => import('../components/layout/Main'));
// const Images = lazy(() => import('../components/images/Images'));
// const UploadImage = lazy(() => import('../components/image/UploadImage'));
// const NotFound = lazy(() => import('../components/notFound/NotFound'));

function Routers() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Main>
            <Switch>
              <Route exact path="/" component={Images} />
              <Route exact path="/uploadimage" component={UploadImage} />
              <Route exact path="/images/:index" component={ImageDetail} />
              <Route exact component={NotFound} />
            </Switch>
          </Main>
        </div>
      </Router>
    </Provider>
  );
}

export default Routers;
