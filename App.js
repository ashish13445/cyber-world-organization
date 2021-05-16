import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navfile from './navbar';
import Home from './home';
import About from './about';
import CP from './CP';
import Connect from './connect';
import Services from './services';
import Footer from './footer';
import Courses from './courses';
import Internships from './internships';
import Events from './events';
import Joinus from './joinus';

import {Route} from 'react-router-dom';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)











function App() {
  
  useEffect(()=> {
    AOS.init(
      {
        duration: 1000
      }
    )

  },[])

  
  return (
  
 
    <div>
     
      <Navfile />
      {/* <div  data-aos ='slide-up' className='container ' style={{width: '200px',height: '200px',backgroundColor: 'black'}}>

</div> */}

      <Route path='/' exact ={true}  >
      <Home/>
      <br /><br /><br /><br /><br />
      <About />
      <br /><br /><br /><br /><br />
      <CP/>   
      <br /><br /><br /><br /><br />
      <Services/>
      <br /><br />
      <Connect/>
      </Route>
     
<Route path='/courses'>
  <Courses/>
</Route>
<Route path='/joinus'>
  <Joinus/>
</Route>

<Route path='/internships'>
  <Internships/>
</Route>

<Route path='/events'>
  <Events/>
</Route>
<Route path='/home' >
  <Home/>
</Route>


     

<Route path='/about' >
<br /><br /><br /><br /><br />
<About/>
<br /><br /><br /><br /><br />
<CP/>
<br /><br />
      <Connect/>

     
</Route>
    
     
      
   
      <Route path='/services'  exact ={true} >
        
      <Services/>
      <br /><br />
      <Connect/>

      <br /><br />
      </Route>
      
      <br/>
      <Route path='/'> <Footer/></Route>
      

    </div>
  )
}

export default App;