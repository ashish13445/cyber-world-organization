import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";

import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';





import './App.css';
function Navfile(){
  return(

    <>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark " className=" navbar" >
  <Navbar.Brand href="#home"><b>C</b>yber<b>W</b>orld <b>O</b>rganization</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto navbar ">
      <Nav.Link > <Link onClick={this.toggleNavbar} className='link home' to='/' style={{textDecoration: 'none',color: 'white'}}> Home </Link></Nav.Link>
      <Nav.Link ><Link onClick={this.toggleNavbar} className='link'to='/about' style={{textDecoration: 'none',color: 'white'}}> About Us </Link></Nav.Link>
      <Nav.Link > <Link onClick={this.toggleNavbar} className='link' to='/events'style={{textDecoration: 'none',color: 'white'}}>Initiatives</Link> </Nav.Link>
      <Nav.Link ><Link onClick={this.toggleNavbar} className='link' to='/courses' style={{textDecoration: 'none',color: 'white'}}> Courses </Link>  </Nav.Link>
      <Nav.Link ><Link onClick={this.toggleNavbar} className='link' to='/internships' style={{textDecoration: 'none',color: 'white'}}> Internships </Link>   </Nav.Link>
      <Nav.Link ><Link onClick={this.toggleNavbar} className='link' to='/events'style={{textDecoration: 'none',color: 'white'}}>Events</Link>  </Nav.Link>
      <Nav.Link > <Link onClick={this.toggleNavbar} className='link' to='/internships' style={{textDecoration: 'none',color: 'white'}}> Vacancies </Link> </Nav.Link>
      <Nav.Link ><Link onClick={this.toggleNavbar} className='link' to='/services'style={{textDecoration: 'none',color: 'white'}}>Services</Link>  </Nav.Link>
      <Nav.Link> <Link onClick={this.toggleNavbar} className='link' to='/home'style={{textDecoration: 'none',color: 'white'}}>Contact Us</Link> </Nav.Link>
      <Button variant='success' className='btn' >  <Link onClick={this.toggleNavbar} className='link' to='/joinus'style={{textDecoration: 'none',color: 'white'}}>Join Us</Link></Button> 
      <Button variant='light' className='btn' > <Link onClick={this.toggleNavbar} className='link' to='/joinus'style={{textDecoration: 'none',color: 'white'}}>Login</Link></Button> 
       
       
        
       





    </Nav>
  </Navbar.Collapse>
</Navbar>



    </>
  )
}

export default Navfile;