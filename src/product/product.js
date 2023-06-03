//this file describes the product component

import React, {Component} from 'react';
import './product.css';

class Product extends Component{
    //whenever you want to show something on screen, you can render function
    //render() is particular to Component class
    //it returns thing you want to render. always a div block
    render() {
        return(
            //component definition.it should be minimal to prmote reusability
            <div className="card">
                <img className="card-img-top" src= {this.props.imgUrl} alt="Product">
                </img>
                <div className="card-block">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">Price: {this.props.price} </p>
                    <a href="#" className="btn btn-primary">Add to wishlist</a>
                </div>           
            </div>
        );
    }
}
export default Product;