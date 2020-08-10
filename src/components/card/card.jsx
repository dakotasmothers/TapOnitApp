import React, { useState } from 'react';
import { Div, Button, Row, Col, Container, Image } from 'atomize';
import Modal from 'react-modal';
import './card.styles.css';

export const Card = (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);    


    const likeProduct = (productId) => {
        fetch(`http://localhost:4000/products/likeproduct?productId=${productId}`)
        .then(response => response.json())
        .then(response => console.log(response.data))
        .catch(err => console.error(err))
      };
        return(
           <Container className='card-container'>
                <Row>
                    <Col>
                        <Image alt='product' src={props.product.ImageURL}></Image>
                        <Div>{props.product.ProductTitle}</Div>
                    <Button onClick={() => setModalIsOpen(true)} className='btn'>More Info...</Button>
                    <Modal isOpen={modalIsOpen}>
                        <h2>{props.product.ProductDescription}</h2>
                        <Image className='modalImg' alt='product' src={props.product.ImageURL}></Image>
                        <Div>{props.product.ProductTitle}</Div>
                        <Div>{props.product.ProductDescription}</Div>
                        <Div className='price'>${props.product.Price}</Div>
                        <Div className='btnContainer'>
                            <Button onClick={(e) => likeProduct(props.product.ProductId)} className='btnModal'>Likes {props.product.Likes}</Button>
                            <Button  onClick={() => setModalIsOpen(false)} className='btnModal'>Close</Button>
                        </Div>
                    </Modal>
                    </Col>
                </Row>
        </Container>
        )
};