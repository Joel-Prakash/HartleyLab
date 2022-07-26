import {Link,Navigate} from 'react-router-dom'
import { Component } from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Header extends Component {
    state = {loggedOut:false}

    onclickingLogout = ()=>{
        this.setState({loggedOut:true})
    }

    render() {
        const {loggedOut} = this.state
        
        if (loggedOut === true) {
            Cookies.remove('form_logged_in')
            return <Navigate to="/login" replace={true} />
        }

        return(
            <nav className="nav-bar-header">
            <img src="https://www.hartleylab.com/wp-content/themes/hartley/assets/images/logo.png" className="website-logo" alt="hartley" />
            <ul className='login-register-container'>
                <li>
                    <Link to="/" className='login-register-items'>Home</Link>
                </li>
                <li className='login-register-items'>
                    <Link to="/aboutus" className='login-register-items'>About Us</Link>
                </li>
                <li>
                    <button className='logout-button' onClick={this.onclickingLogout}>Logout</button>
                </li>
            </ul>
        </nav>

        )
    }
}

export default Header
