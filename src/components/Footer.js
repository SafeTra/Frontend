const Footer = () => {
    return(
        <footer className='footer'>
            <div className='container'>
                <div className='d-flex justify-between align-start'>
                    <a className='footer_logo' href="#"><img src={require('../images/footer_logo.svg').default}/></a>
                    <div>
                        <h3>Useful Links</h3>
                        <ul>
                            <li className='nav_item'><a className='nav_link'>About Us</a></li>
                            <li className='nav_item'><a className='nav_link'>How It Works</a></li>
                            <li className='nav_item'><a className='nav_link'>Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Legal</h3>
                        <ul>
                            <li className='nav_item'><a className='nav_link'>Terms of service</a></li>
                            <li className='nav_item'><a className='nav_link'>Privacy policy</a></li>
                            <li className='nav_item'><a className='nav_link'>Return policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Address</h3>
                        <p>234 Somewhere avenue, Ikeja, Lagos,<br/> Nigeria.</p>
                        <div className='socials d-flex'>
                            <img src={require('../images/instagram.svg').default} alt="instagram"/>
                            <img src={require('../images/facebook.svg').default} alt="facebook"/>
                            <img src={require('../images/twitter.svg').default} alt="twitter"/>
                            <img src={require('../images/linkedin.svg').default} alt="linkedin"/>
                        </div>
                    </div>                
                </div>
                <div className='d-flex justify-center copyright'>
                    <p className='m-0'>© 2024 SafeTra+ Nigeria</p>
                    <p className='m-0'>All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;