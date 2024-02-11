import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className='pink_overlay'>
            <div className='container'>
                <div className='d-flex justify-between align-start'>
                    <Link className='footer_logo slider-btn-lg' to="/"><img src={require('../images/footer_logo.svg').default}/></Link>
                    <Link className='footer_logo slider-btn-sm' to="/"><img src={require('../images/logo.svg').default}/></Link>
                    <div>
                        <h3>Useful Links</h3>
                        <ul>
                            <li className='nav_item'><a className='nav_link'>About Us</a></li>
                            <li className='nav_item'><a className='nav_link'>Services</a></li>
                            <li className='nav_item'><a className='nav_link'>How It Works</a></li>
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
                <p className='copyright text-center fw-700'>&copy; 2024 safeTra Nigeria &nbsp; All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;