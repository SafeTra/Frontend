import { useState, useEffect, useRef } from 'react';
import { Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const [menu, setMenu] = useState(true);
    const handleMenu = () => setMenu(menu => !menu);

    const [isSticky, setIsSticky] = useState(false);
    const headerRef = useRef(null);

    const handleScroll = () => {
        const heroHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
        const scrollPosition = window.scrollY;
        setIsSticky(scrollPosition > heroHeight);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <header ref={headerRef} className={`header ${isSticky ? 'sticky' : ''}`}>
            <div className='container'>
                    <nav className='d-flex justify-between'>
                        <div className='d-flex justify-between'>
                            <Link to="/"><img src={require('../images/logo.svg').default}/></Link>                
                            <img className='menu' onClick={handleMenu} src={require(`../images/icon-${menu ? 'menu' : 'close'}.svg`)}/>
                        </div>                
                        <ul className={`nav_list d-flex ${menu ? 'disable' : ''}`}>
                            <li className='nav_item'> <Link to="/" className='nav_link active'>Home</Link></li>
                            <li className='nav_item'> <Link to="/about" className='nav_link'>About</Link></li>
                            <li className='nav_item'> <Link to="/#services" className='nav_link'>Services</Link></li>
                            <li className='nav_item'> <Link to="/#how-it-works" className='nav_link'>How It Works</Link></li>
                            <li className='nav_item'> <Link to="/#faqs" className='nav_link'>FAQs</Link></li>
                        </ul>
                        <ul className={`nav_list d-flex ${menu ? 'disable' : ''}`}>                            
                            <li className='nav_item'><Link to='/signup' className='btn btn-outline'>Sign In</Link></li>
                            <li className='nav_item'><Link to='/login' className='btn btn-primary'>Join for Free</Link></li>
                        </ul>
                    </nav>
            </div>
        </header>
    )
}

export default Header;