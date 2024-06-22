import React from "react";
import ReactDOM  from "react-dom/client";
import logo from '../assets/food-logo.png';
import {Header} from './components/Header';
import Body from './components/Body';
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const createEl = React.createElement('h1', {}, 'hello world');



const AppLayout = () =>
{
    return (<div id="Container">
            <Header/>
            <Body />
    </div>
    
    )
}
const Approuter = createBrowserRouter([
    {
        path: '/', element : <AppLayout />
    },
    {
        path: '/about', element:<About/>
    },
    {
        path : '/contact', element: <Contact />
    }
])


const createRoot = ReactDOM.createRoot(document.getElementById('root'));

createRoot.render(<RouterProvider router={Approuter} />);