import React from 'react';
import Home from './home';
import Iframe from 'react-iframe';
import './App.css';


function Courses() {
    return(
        <>
       <Home/>
       <h3 style={{textAlign: 'center',backgroundColor: 'whitesmoke'}}> <b>SUBSCRIBE US IN YOUTUBE TO FOLLOW UP WITH OUR COURSES</b></h3>
       <div  data-aos ='fade-up' className="container-fluid Courses">
       

<div>
<Iframe width="400" height="300" url="https://www.youtube.com/embed/CmJcZ6CDUk8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>

<Iframe width="400" height="300" url="https://www.youtube.com/embed/CmJcZ6CDUk8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>

<Iframe width="400" height="300" url="https://www.youtube.com/embed/Y1SHMrMJxGo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>
</div>
<div>
<Iframe width="400" height="300" url="https://www.youtube.com/embed/5PfdCUVMXOE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>

<Iframe width="400" height="300" url="https://www.youtube.com/embed/MTPNxMunFaE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>

<Iframe width="400" height="300" url="https://www.youtube.com/embed/CA4lRtfiLdI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>

</div>


       </div>
      

      

        </>
    )
}

export default Courses;