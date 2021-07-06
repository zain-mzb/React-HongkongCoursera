import React, { Component } from "react";
import Main from "./components/MainComponent";
import "./App.css";
import { render } from "@testing-library/react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';



const store = ConfigureStore();


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
