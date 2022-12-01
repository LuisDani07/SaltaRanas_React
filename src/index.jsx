import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App'
//se importa firebase
import firebase from 'firebase/compat/app'

//credenciales de config firebase
const firebaseConfig = {
    apiKey: "AIzaSyC1tSMb86j7sfkDRCD0rE5lbSKsNO6GnC8",
    authDomain: "saltaranas-94ba8.firebaseapp.com",
    databaseURL: "https://saltaranas-94ba8-default-rtdb.firebaseio.com",
    projectId: "saltaranas-94ba8",
    storageBucket: "saltaranas-94ba8.appspot.com",
    messagingSenderId: "994599418173",
    appId: "1:994599418173:web:e1b566b94058d0b603ad54"
  };

  //inicializar firebase

  firebase.initializeApp(firebaseConfig);



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