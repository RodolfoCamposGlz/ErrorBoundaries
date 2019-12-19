import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './Hero';
import ErrorBoundary from './ErrorBoundary';

class App extends Component{
  render(){
    return(
      <div>
        <ErrorBoundary>
          <Hero heroName="Batman"></Hero>
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Superman"></Hero>
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Joker"></Hero>
        </ErrorBoundary>
      </div>
    )
  }
}
export default App;
