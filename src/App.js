import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import store from './store';
import { Provider } from 'react-redux';
import Home from './pages/home';
import City from './pages/city';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={Nav}/>
        <Route path="/" exact component={Home} />
        <Route path="/city/:id" exact component={City} />
      </Router>
    </Provider>
  );
}

export default App;