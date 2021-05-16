import React from 'react';
import Home from './home';
import {Button} from 'react-bootstrap';

function Internships() {
    return(
        <>
        <Home/>
        <div    className='container  text-center'>
       <Button variant ='success'><a href="https://forms.gle/chh8Br1wUQvFx98S8" rel="noreferrer" target="_blank" style={{textDecoration: 'none',color: 'white'}}>Join our community to avail internships</a></Button>
        </div>

        </>
    )
}

export default Internships;