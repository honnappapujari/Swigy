import React from "react";
import ReactDOM  from "react-dom/client";

const createEl = React.createElement('h1', {}, 'hello world');

const createRoot = ReactDOM.createRoot(document.getElementById('root'));

createRoot.render(createEl);