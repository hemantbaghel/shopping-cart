import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const SingleProduct = ({prod}) => {
  return (
    <div className='products'>
        <Card>
            <Card.Img variant='top' 
            src={prod.image} 
            alt={prod.name}

            />
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle style={{paddingBottom:10}}>
                    <span>💲{prod.proce.split(".")[0]}</span>
                {prod.fastDelivery ? (
                    <div>Fast Delivery</div>
                ):(<div>4 dyas delivery</div>)}
                <Rating rating={prod.ratings}/>
                </Card.Subtitle>
            </Card.Body>
        </Card>
    </div>
  )
}

export default SingleProduct