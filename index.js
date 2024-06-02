import React from "react";
import ReactDOM  from "react-dom/client";
import logo from './assets/food-logo.png';

const createEl = React.createElement('h1', {}, 'hello world');

const Header = () =>
{
    return (
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
        <a className="navbar-brand"><img height={100} src={logo}/></a>
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
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
        </ul>
        </div>
      </nav>
    )
}

const RestroCard = () =>
{
    return(
        <div className="resto-card">
            <h1>Meghana Food </h1>
        </div>
    )
}

const Body = () =>
{
    return (
        <div className="body">
            <div className="restro-container">
               <RestroCard />
            </div>
        </div>
    )
}
const AppLayout = () =>
{
    return (<div id="Container">
            <Header/>
            <Body />
    </div>
    
    )
}


const createRoot = ReactDOM.createRoot(document.getElementById('root'));

createRoot.render(<AppLayout/>);