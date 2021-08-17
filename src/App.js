import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Cats  from './Cats.js';
import Dogs  from './Dogs.js';
import Home  from './Home.js';
import Header from './Header.js';

class App extends Component {
  render (){
    return (
    <section className="cdApp">
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cats" component={Cats} />
            <Route exact path="/dogs" component={Dogs} />
          </Switch>
      </BrowserRouter>
    </section>
    );
  }
}

export default App;
