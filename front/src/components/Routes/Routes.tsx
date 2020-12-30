import React from "react";
import {
  Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

import createHistory from 'history/createBrowserHistory';

import Home from './../Home/Home';
import CreateArticle from './../Article/CreateArticle/CreateArticle';
import ViewArticle from './../Article/FullArticle/index';
import ImgUpload from './../Article/CreateArticle/ImgUpload';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const Routes = () => {
    return (
          <Switch>
            <Route exact  path="/createArticle">
              <CreateArticle />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/Article/:uuid">
              <ViewArticle />
            </Route>
            <Route path='/upload'>
            <ImgUpload/>
            </Route>
          </Switch>
    );
  }

  export default Routes;