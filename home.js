import React from 'react';
import Info from './home-info';


import Typewriter from 'typewriter-effect';



function Home() {
    return(
    <div>
        <div  data-aos ='fade-up' className=' main container '>


        <div className='row'>
          <div className='col'>
            <img src="logo.jpg" alt="logo" width='300px' height='300px' style={{margin: '20px'}}/>
          
          </div>
          <div className='col donate'>
            <Info title='Donate' text='Let us make a Difference' btn='Donate '
            />
          </div>
          <div className='col joinus'>
            <Info title='Join Us' text='Be a part of national volunteer network' btn='Join Us' />
          </div>






        </div>
        <br />
        <br /><br /><br /><br /><br /><br /><br />

        <div className='row logo' style={{margin: '20px'}} >

          <Typewriter

            onInit={(typewriter) => {

              typewriter

                .typeString("SPREADING CYBER AWARENESS AMONG TEENS, NOOB HACKERS OR CYBER SECURITY RESEARCHERS")

                .pauseFor(1)

                .start();
            }}
          />
          </div>
          <div className='container-2'>
            <p style={{ color: 'black' }}>Members : 1000</p>
            <p style={{ color: 'black' }}>HeadQuarters : New Delhi ,India</p>
            <p style={{ color: 'black' }}>Founded  : 2020</p>
          </div>




        </div>
        </div>

    )
}


export default Home;