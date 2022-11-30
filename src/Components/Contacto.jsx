import { useState } from "react";

function Contacto() {

      const [Data, setData] = useState('Vacio')
      console.log(Data)
const findMyState=()=>{
      //   const status=document.getElementById("map");

        const success=(position)=>{
               console.log(position)
               const latitude=position.coords.latitude;
               const longitude=position.coords.longitude;
              const geoApiUrl=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=es`;
              fetch(geoApiUrl)
              .then(res=>res.json())
              .then(data=>{
                  setData(data)
                  // status.textContent=`${data.locality }, ${data.principalSubdivision} latitud:${latitude} longitud:${longitude}`;
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
                       <input type="text" placeholder="Nombre completo"  required/>
                 </div>
                 <div className="inputBx">
                       <p>Ingresa tu correo</p>
                       <input type="email" placeholder="Correo electronico" required/>
                 </div>
                 <div className="inputBx">
                       <p>Mensaje</p>
                       <textarea placeholder="Escribe aquí..." required></textarea>
                 </div>
                 <div className="inputBx">
                       <input type="submit"  name="Submit"/>
                 </div>
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