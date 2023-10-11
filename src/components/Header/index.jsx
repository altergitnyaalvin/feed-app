import { Link } from 'react-router-dom'
import './Header.module.css'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Header = () => {
    const { isLoggedIn } = useContext(AuthContext)

    return(
        <header>
            <div>
                {/* Anchor tag */}
                {/* <a href='/Button.jsx'>
                    <h3 className='link-header'>Feed App</h3>
                </a> */}

                {/* React Router */}
                <Link to={'/'}>
                    <h3 className='link-header'>Feed App</h3>
                </Link>
            </div>
            <div>
                <Link to={'/chat-ai'}>
                    <span className='link-header'>Chat AI</span>
                </Link>
                <Link to={'/about'}>
                    <span className='link-header'>About Us</span>
                </Link>
                {
                    !isLoggedIn ? 
                        <Link to={'/login'}>
                            <span className='link-header'>Login</span>
                        </Link> :
                        <span className='link-header'>Welcome, barudak!</span>
                }
            </div>
        </header>
    )
}

export default Header