import { Link } from 'react-router-dom'
import './Header.module.css'

const Header = () => {
    return(
        <header>
            <div>
                <Link to={'/'}>
                    <h3 className='link-header'>Feed App</h3>
                </Link>
            </div>
            <div>
                <Link to={'/about'}>
                    <span className='link-header'>About Us</span>
                </Link>
                <Link to={'/login'}>
                    <span className='link-header'>Login</span>
                </Link>
            </div>
        </header>
    )
}

export default Header