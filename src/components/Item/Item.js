import React from 'react';
import Card from 'react-bootstrap/Card';
import AnimatedButton from '../AnimatedButton';

import { Link } from 'react-router-dom';

import './Item.css'

export default function Item(props) {

    const {item} = props;

    const imageStyle = {
      width : '14rem',
      height: '14rem'

    }

  return (
        <Card style={{ width: '14rem' }} className='card-i'>
              <Card.Img variant="top" src={item.imageUrl} style={imageStyle} />

              <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
              </Card.Body>

              <Link to={process.env.PUBLIC_URL + `/item/${item.id}`} className='product-detail-link'>
                  <AnimatedButton text={'Ver detalle'} type={'default'}/>
              </Link>
        </Card>  
  )
}
