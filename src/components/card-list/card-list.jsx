import React from 'react';

import  { Card }  from '../card/card';

import './card-list.styles.css';

export const CardList = (props) => (
    <div className='card-list'>
        {props.products.map(product => (<Card key={product.productId} product={product} onLike={props.onLike}/>))}
    </div>
  
    
);

export default CardList