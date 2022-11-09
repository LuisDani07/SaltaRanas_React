import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App'

window.addEventListener('scroll', function(){
    var header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>0);
        });

const root=ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)