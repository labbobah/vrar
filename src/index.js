import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Menu from './Menu';
import Details from './Detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import AllLaunches from './AllLaunches';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route exact path='/' element={<App />}></Route>
      <Route exact path='/AllLaunches' element={<AllLaunches/>}></Route>
      <Route path='/Details/:id' element={<Details/>}></Route>
      
      {/*
       si aucun schema ne correspond, renvoyer 404 not found
       */}
      <Route
        path="*"
        element={
          <div style={
              {
                textAlign: "center",
                marginTop: "25%"
              }
            }
          >
            <h3> 404 NOT FOUND! </h3>
            <h6> hmmm something wrong </h6>
            <p> Vous essayez d'acceder à une page qui n'existe pas!</p>
          </div>
            
        }
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
