import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App'

// navbar effect to change the color when scrolling
window.addEventListener('scroll', function(){
    var header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>0);
        });
// scrolling animation effects
window.addEventListener('scroll', function(){
    var anime=document.querySelectorAll(".animeX");
    for(var s=0; s<anime.length; s++){
        var windowheight=window.innerHeight;
        var animetop=anime[s].getBoundingClientRect().top;
        var animepoint=150;
        if(animetop<windowheight-animepoint){
            anime[s].classList.add('active');
        }else{
            anime[s].classList.remove('active');
        }
    }
})

const root=ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)