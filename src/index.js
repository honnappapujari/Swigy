import React from "react";
import ReactDOM  from "react-dom/client";
import logo from '../assets/food-logo.png';
import {Header} from './components/Header';
import Body from './components/Body';

const createEl = React.createElement('h1', {}, 'hello world');



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