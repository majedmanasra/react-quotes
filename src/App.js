import React, { Component } from 'react';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import reducers from "./Reducers";
import AppRouter from "./AppRouter";
import AppWrapper from "./AppWrapper";
import createSagaMiddleware from 'redux-saga'
import mySaga from "./Saga/Saga";

class App extends Component {
  render() {
      const sagaMiddleware = createSagaMiddleware();
      const store = createStore(reducers, applyMiddleware(sagaMiddleware));
      sagaMiddleware.run(mySaga)

      return (
          <Provider store={store}>
              <AppWrapper>
                  <AppRouter/>
              </AppWrapper>
          </Provider>
      );
  }
}

export default App;
