import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import App from './App';
// import counterReducer from './redux/counterReducer';
// import colorReducer from './redux/colorReducer';
import reportWebVitals from './reportWebVitals';
// import textReducer from './redux/textReducer';
import todo from './redux/actions/todo';
import thunk from 'redux-thunk';

const store = createStore(todo,applyMiddleware(thunk));
// const rootReducer = combineReducers({
//   counter: counterReducer,
//   color: colorReducer,
//   text: textReducer
// });
// const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();