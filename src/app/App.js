import logo from '../logo.svg';
import './App.css';
import React, {Component} from 'react';
import HttpService from '../services/http-service';
import Product from '../product/product';

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
        <p class="lead">
          Welcome to ALM
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
          
    <div className="container product-display-section">

					        <div className="row">
					            <div className="col-sm-12 col-md-4">
					                <Product price="4.15" title="reyban sunglasses" imgUrl="https://images.ray-ban.com/is/image/RayBan/8053672614169__002.png?impolicy=RB_Product&width=1024&bgc=%23f2f2f2" />
					            </div>
					            <div className="col-sm-12 col-md-4">
					                <Product price="4.15" title="morchana" imgUrl="https://www.rkmarblesindia.com/wp-content/uploads/2020/10/Morchana-white-marble-7.jpg" />
					            </div>
					            <div className="col-sm-12 col-md-4">
					                <Product price="4.15" title="reyban sunglasses" imgUrl="https://images.ray-ban.com/is/image/RayBan/8053672614169__002.png?impolicy=RB_Product&width=1024&bgc=%23f2f2f2" />
					            </div>
					            <div className="col-sm-12 col-md-4">
					                <Product price="4.15" title="reyban sunglasses" imgUrl="https://images.ray-ban.com/is/image/RayBan/8053672614169__002.png?impolicy=RB_Product&width=1024&bgc=%23f2f2f2" />
					            </div>
                                <div className="col-sm-12 col-md-4">
					                <Product price="4.15" title="morchana" imgUrl="https://www.rkmarblesindia.com/wp-content/uploads/2020/10/Morchana-white-marble-7.jpg" />
					            </div>
					        </div>
          </div>
          
    </div>
      
      
  );
 }
}

export default App;
