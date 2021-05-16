import React from 'react';
import Home from './home';
import Iframe from 'react-iframe';

function Events() {
    return(
        <>
        <Home/>
        <div className="container-fluid events">

        <h3><b>REGULAR BASED ACTIVITIES</b></h3>
        <br />
        <ul>
<li>Weekly live sessions at Youtube or Zoom.</li>
<li>Weekly quiz activity after every session.</li>
<li>Free Certifications to alll attendees during the session as well as the quizzes.</li>
</ul>

<Iframe width="560" height="315" url="https://www.youtube.com/embed/LLH4GgPQPt4" title="YouTube video player" frameBorder="0" allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>

        </div>
        </>
    )
}

export default Events;