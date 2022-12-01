import { async } from "@firebase/util";
import { collection, onSnapshot, addDoc, doc, setDoc } from "firebase/firestore";
import { useState,useEffect } from "react";
import db from './firebase';


function Contacto() {
      const [comments,setComments]=useState([]);
      const [name,setName]=useState("");
      const [email,setEmail]=useState("");
      const [message,setMessage]=useState("");

      const handleNew=async()=>{
            const collectionRef=collection(db, "comments");
            const payload={name:name, email:email, message:message};
          await addDoc(collectionRef, payload);
          setName("");
          setEmail("");
          setMessage("");
      }


      //firebase
           useEffect(()=>{
            const unsub=onSnapshot(collection(db, "comments"),(snapshot)=>{
                  setComments(snapshot.docs.map(doc=>({...doc.data(),id:doc.id})))
            });
            return unsub;
           },[])



      const [Data, setData] = useState('Vacio')

const findMyState=()=>{

        const success=(position)=>{
               const latitude=position.coords.latitude;
               const longitude=position.coords.longitude;
              const geoApiUrl=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=es`;
              fetch(geoApiUrl)
              .then(res=>res.json())
              .then(data=>{
                  setData(data)
              })
        }
        const error=()=>{
            status.textContent="no se pudo encontrar tu localización"
        }

        navigator.geolocation.getCurrentPosition(success, error);
}

  return (
    <footer id="contacto1" className="animeX">
        <div className="contact" id="map">
            <div className="map">
            {
                  Data === 'Vacio' && <button onClick={findMyState}>Localización</button>
            }

            {
                Data !== 'Vacio' && <h2>{ Data?.locality }, { Data.principalSubdivision }</h2>
            }
            </div>
           <div className="form">
                  <h1>Contactanos</h1>
                  <div className="inputBx">
                       <p>Ingresa tu nombre</p>
                       <input type="text" placeholder="Nombre completo" value={name} onChange={(e)=>{setName(e.target.value)}}  required/>
                 </div>
                 <div className="inputBx">
                       <p>Ingresa tu correo</p>
                       <input type="email" placeholder="Correo electronico" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                 </div>
                 <div className="inputBx">
                       <p>Mensaje</p>
                       <textarea placeholder="Escribe aquí..." value={message} onChange={(e)=>{setMessage(e.target.value)}} required></textarea>
                 </div>
                 <div className="inputBx">
                       <button onClick={handleNew}>Enviar</button>
                 </div>
                 <ul>
                     {comments.map((comment)=>(
                             (
                              <li key={comment.id}>{comment.email}</li>
                             )
                     ))}
                 </ul>
           </div>

      </div>
      <div className="footer">
            <div className="info">
                <a href="#" ><img src="/tepicGames.PNG" alt="TepicGames" /></a>
                <p><i className="bx bx-copyright"></i>2022 Todos lo derechos reservados</p>
                <ul>
                    <li><a href="#"><i className="bx bxl-facebook"></i></a></li>
                    <li><a href="#"><i className="bx bxl-instagram"></i></a></li>
                    <li><a href="#"><i className="bx bxl-twitter"></i></a></li>
                    <li><a href="#"><i className="bx bxl-youtube"></i></a></li>
                </ul>
          </div>
      </div>

    </footer>
  )
}

export default Contacto