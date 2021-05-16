import React from 'react';

import {Form,Button} from 'react-bootstrap';

function Joinus() {
    function validate() {
       console.warn("form submiited");
    }
    return(
        <div>
            
            <div className='container joinus' >
            <h1 id="data"><b>Join Us</b></h1>
            <Form  className='joinus-form 'id="myform" onSubmit={validate }>
    <div className="input_field">
        <input type="text" placeholder="Name" id="name"/>
    </div>
    <br />
    <div className="input_field">
        <input type="text" placeholder="Department" id="subject"/>
    </div>
    <br />
    <div className="input_field">
        <input type="text" placeholder="Phone" id="phone"/>
    </div>
    <br />
    <div className="input_field">
        <input type="email" placeholder="Email" id="email"/>
    </div>
    <br />
    <div className="input_field">
        <textarea placeholder="Why do we want to join us?" id="message"></textarea>
    </div>
    <br />
    <div className="btn">
        <Button type='submit' variant='success'> Submit</Button>
    </div>
  </Form>
  

            </div>


        </div>
    )
}

export default Joinus;