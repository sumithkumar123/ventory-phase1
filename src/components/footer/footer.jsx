import React from 'react'
import './footer.scss'
import fb from "../assets/facebook.png";
import ig from "../assets/instagram.png";
import tw from "../assets/twitter.png";
import In from "../assets/linkedin.png";

function Footer() {
  return (
    <div className="footer">
        <div className='sb__footer section__padding'>
            <div className='sb__footer-links'>
                <div className='sb__footer-links_div'>
                    <h4>For Business</h4>
                    <a href='/emplouer'>
                        <p>Employer</p>
                    </a>
                    <a href='/emplouer'>
                        <p>Customer App</p>
                    </a>  
                    <a href='/emplouer'>
                        <p>Digital Inventory</p>
                    </a>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Partners</h4>
                    <a href='/emplouer'>
                        <p>Swing Tech</p>
                    </a>
                
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Company</h4>
                    <a href='/emplouer'>
                        <p>About</p>
                    </a>
                    <a href='/emplouer'>
                        <p>Press</p>
                    </a> 
                    <a href='/emplouer'>
                        <p>Career</p>
                    </a>
                    <a href='/emplouer'>
                        <p>Contact</p>
                    </a>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Coming soon on</h4>
                    <div className="socialmedia">
                        <p><img src={fb} alt="fb"/></p>
                        <p><img src={In} alt="fb"/></p>
                        <p><img src={tw} alt="fb"/></p>
                        <p><img src={ig} alt="fb"/></p>

                    </div>
                   
                </div>
            </div>

            <hr></hr>

            <div className='sb__footer-below'>
                <div className='sb__footer-copyright'>
                    <p>
                        @{new Date().getFullYear()} Grig Technologies Pvt Ltd
                    </p>
                </div>
                <div className="sb__footer-below-links">
                    <a href='/terms'><div><p>Terms & Conditions</p></div></a>
                    <a href='/terms'><div><p>Privacy & policy</p></div></a>
                    <a href='/terms'><div><p>Return & refund policy</p></div></a>
                    <a href='/terms'><div><p>Plans and pricing</p></div></a>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer