import {LOGO_URL} from '../utils/constant';
import { useState } from 'react';
export const Header = () =>
{
    const [login, setLogin] = useState('Login');
    return (
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
        <a className="navbar-brand"><img height={20} src={LOGO_URL}/></a>
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
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