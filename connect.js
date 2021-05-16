import React from 'react';
import {Button} from 'react-bootstrap';
function Connect() {
    return(
        <>

<div   data-aos ='fade-up' className="container connect">
        <h1><b>Connect With Our Founders</b> </h1><br />
        <p><b>
         <Button variant='success'>
         <a href="https://www.sumitoneness.me" rel="noreferrer" target="_blank" style={{textDecoration: 'none',color: 'white'}}> Sumit Oneness</a>
         </Button>
        </b></p>


        <p><b>
        <Button variant='success'>
        <a href="https://instagram.com/piyush_pk"  rel="noreferrer" target="_blank" style={{textDecoration: 'none',color: 'white'}}> Piyush Kaushik</a>
         </Button>
          
          </b></p>


      </div>
        </>
    )
}

export default Connect;