import React from "react";
import Header from "./components/Header";

import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import Register from "./components/Register";

const App = () => (
  <div className="container">
    <div>Name: auth</div>
      <BrowserRouter>
          <Header/>
      </BrowserRouter>
  </div>
);

const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App/>)