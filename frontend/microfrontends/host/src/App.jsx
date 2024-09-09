import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';


const Header = lazy(() => import('auth/Header').catch(() => {
 return { default: () => <div className='error'>Header is not available!</div> };
})
);


const App = () => (
  <div className="container">
      <BrowserRouter>
          <Header/>
      </BrowserRouter>
  </div>
);

const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)