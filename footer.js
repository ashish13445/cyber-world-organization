import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Footer() {
    return(
        <>
        <div className="container-fluid footer">
        <h3><b>Locations</b></h3>
        <div className="row">
          <div className="col">

            <p>Headquarter : <i>New Delhi, India 110086</i></p>
            <p><a href="https://www.bing.com/maps?where=New%20Delhi%2C%20Delhi%20110086%2C%20IN" rel="noreferrer" target="_blank" style={{textDecoration: 'none',color: 'brown'}}>Get Directions</a></p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55986.81101490668!2d77.02949451505498!3d28.71429509052711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d069ef154404b%3A0xd88678724f354206!2sNew%20Delhi%2C%20Delhi%20110086!5e0!3m2!1sen!2sin!4v1620374373794!5m2!1sen!2sin" width="300" height="300" allowFullScreen="" loading="lazy" title='abc'></iframe>
          </div>

          <div className="col">
            <p>Sub-Headquarter : <i>Jharsa, gurugram </i></p>
            <p><a href="https://www.bing.com/maps?where=Jharsa%2C%20Gurugram%20122022%2C%20IN" rel="noreferrer" target="_blank" style={{textDecoration: 'none',color: 'brown'}}>Get Directions</a></p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7016.21504090598!2d77.04724402292857!3d28.446175029966597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1860a4d10c07%3A0x8b0c56d532f6987c!2sJharsa%2C%20Gurugram%2C%20Haryana%20122022!5e0!3m2!1sen!2sin!4v1620374680423!5m2!1sen!2sin" width="300" height="300" allowFullScreen="" loading="lazy" title='def'></iframe>
          </div></div>
        
     
      <div className="container brands">
      <h4>Support Us :</h4>
<div >



    <a href="https://instagram.com/cyberworldorg"  rel="noreferrer" target="_blank"> <FontAwesomeIcon icon={["fab", "instagram"]} size='3x' color='#5851DB'/></a>



</div>
<div>
<a href="http://bit.ly/cyberpwned" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={["fab", "youtube"]} size='3x' color='#FF0000'/></a>
</div>
<div >
<a href="https://discord.gg/ZnXApXE" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={["fab", "discord"]} size='3x' color='#7289da'/></a>
</div>
<div>
<a href="https://twitter.com/CyberWorldOrg" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={["fab", "twitter"]} size='3x' color='#1DA1F2'/></a>
</div>
<div >
<a href="https://www.facebook.com/Cyber-World-Organisation-105132394747608" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={["fab", "facebook"]} size='3x' color='#4267B2'/></a>
</div>
<div >
<a href="https://www.linkedin.com/company/cyber-world-org/?originalSubdomain=in" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={["fab", "linkedin"]} size='3x' color='cyan blue'/></a>
</div>
</div>
</div>

        </>
    )
}


export default Footer;