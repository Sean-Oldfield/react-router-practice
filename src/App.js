import React from 'react';
import './App.css';
import { Home } from './Home';
import { About } from './About';
import { Shop } from './Shop';
import { Nav} from './Nav';
import { ShopItem } from './ShopItem';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export class App extends React.Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} /> 
                    <Route path="/about" component={About} />
                    <Route path="/shop" exact component={Shop} />
                    <Route path="/shop/:id" component={ShopItem} />
                </Switch>
            </div>
      </Router>
    );
  }
}
