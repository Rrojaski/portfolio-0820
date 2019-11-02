import React, { Fragment } from "react";
import { Route, Switch } from 'react-router-dom';

// Styles
import "reset.css";
import "./styles.scss";

// Components
import Header from "./layout/Header/Header";
import Home from "./layout/Home/Home";
import Work from "./layout/Work/Work";
import Contact from "./layout/Contact/Contact";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <Fragment>
      <div id='style-1' className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;