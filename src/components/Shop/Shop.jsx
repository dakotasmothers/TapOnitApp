import React, { Component } from 'react';

import CardList from '../card-list/card-list';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }
    

    componentDidMount(){
      setInterval(() => {
        this.getProducts();
      }, 500);
        
      };
    
      getProducts = () => {
        fetch('http://localhost:4000/products')
        .then(response => response.json())
        .then(response => this.setState({ products: response.data }))
        .catch(err => console.error(err))
      };

 
    render(){
        const { products } = this.state;
        return(
          <div>
            <CardList products={ products } />

            </div>
        )
    }
    
}

export default Shop;

