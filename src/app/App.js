import logo from '../logo.svg';
import './App.css';
import React, {Component} from 'react';
import HttpService from '../services/http-service';

const http = new HttpService();

class App extends Component{
    
    constructor(props){
        super(props);
        
        //bind functions
        this.loadApiData = this.loadApiData.bind(this);
        this.loadApiData();
    }
    
    //this will handle api request and take care of promises.
    loadApiData = () => {
        http.getProducts().then(
            productData => {
                //when promise brings data
                console.log(productData);
            },
            err => {
                //when promise brings error data
                console.log("error bringing data");
            }
        );
    }
    
 render(){
  return (
    <div className="App container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <p>hello world</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
 }
}

export default App;
