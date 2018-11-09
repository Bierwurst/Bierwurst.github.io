import React, { Component, Fragment } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
// import NotFound from './views/NotFound';
import Scroll from './views/Scroll';
import Projects from './views/Projects';
import SingleProject from './views/SingleProject';
import Header from './components/Header';
import Footer from './components/Footer';
import  './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Fragment>
            <Header/>
            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route path="/projects/:id" component={SingleProject} />
                <Route exact path="/scroll" component={Scroll} />

                <Redirect to="/"/>
                {/* <Route component={NotFound} /> */}
              </Switch>
            </main>
            <Footer />
          </Fragment>
        </BrowserRouter>

    );
  }
}

export default App;
