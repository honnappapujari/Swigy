import { Link } from 'react-router-dom';
import {LOGO_URL} from '../utils/constant';
import { useState, useEffect } from 'react';
export const Header = () =>
{
    useEffect(() =>
    {
        console.log('use effect')
    }, [])
    console.log('header render')
    const [login, setLogin] = useState('Login');
    return (
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
        <a className="navbar-brand"><img height={20} src={LOGO_URL}/></a>
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="contact">Contact us</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={() => login === 'Login'? setLogin('Logout') : setLogin('Login')}>{login}</a>
            </li>
        </ul>
        </div>
      </nav>
    )
}


export default Header;