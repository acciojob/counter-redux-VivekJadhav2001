
import React from "react";
import './../styles/App.css';
import { Provider } from "react-redux";
import CounterApp from "./CounterApp";
import { store } from "../app/store";

const App = () => {
  return (
    <Provider store={store}>
        {/* Do not remove the main div */}
        <CounterApp/>
    </Provider>
  )
}

export default App
