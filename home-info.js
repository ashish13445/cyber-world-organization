import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Info(props) {
    return(
        <div style={{margin:'20px'}}>
            <h2>{props.title}</h2>
            <p><i>{props.text}</i></p>
            <Button variant='success'> <Link className='link' to='/joinus'style={{textDecoration: 'none',color: 'white'}}>{props.btn}</Link></Button>
        </div>
    )
}



export default Info;