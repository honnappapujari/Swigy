import React from "react";
import ReactDOM  from "react-dom/client";
import logo from '../assets/food-logo.png';
import {Header} from './components/Header';
import Body from './components/Body';
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import {RestorentMenu} from "./components/RestorentMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./components/ErrorPage";

const createEl = React.createElement('h1', {}, 'hello world');



const AppLayout = () =>
{
    return (<div id="Container">
            <Header/>
           <Outlet />
    </div>
    
    )
}
const Approuter = createBrowserRouter([
    {
        path: '/', element : <AppLayout />,
        children : [
            {
                path: '/', element:<Body/>
            },
            {
                path: '/about', element:<About/>
            },
            {
                path : '/contact', element: <Contact />
            },
            {
                path : '/restorent/:resid', element: <RestorentMenu />
            }
        ],
        errorElement: <ErrorPage/>
    },
    
])


const createRoot = ReactDOM.createRoot(document.getElementById('root'));

createRoot.render(<RouterProvider router={Approuter} />);