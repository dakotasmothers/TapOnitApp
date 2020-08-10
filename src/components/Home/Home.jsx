import React, { Component } from 'react';

import CardList from '../card-list/card-list';

const ShopContext = React.createContext();

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }
    

    componentDidMount(){
        this.getProducts();
      }
    
      getProducts = () => {
        fetch('http://localhost:4000/products')
        .then(response => response.json())
        .then(response => this.setState({ products: response.data }))
        .catch(err => console.error(err))
      }

      likeProductId = (id) => {
        fetch(`http://localhost:4000/products/likeproduct?productId=${id}`)
        .then(response => response.json())
        .then(response => this.setState({ products: response.data }))
        .catch(err => console.error(err))
      }

      handleClick = (id) => {
        this.setState(this.likeProductId(id));
      }
    render(){
        const { products } = this.state;
        return(
          <div>
            <CardList products={ products } onLike={this.handleClick} />
            <ShopContext.Provider value={{ ...this.state,
              getProducts: this.getProducts,
              likeProduct: this.likeProduct
              }}>
                  {this.props.children}
                  
              </ShopContext.Provider>
            </div>
        )
    }
    
}

export { ShopContext };
export default HomePage;