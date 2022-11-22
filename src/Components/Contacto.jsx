
function Contacto() {
  return (
    <footer id="contacto1" className="animeX">
        <div className="contact ">
           <img src="/lago.jpg" alt="" />
           <div className="form">
                  <h1>Contactanos</h1>
                  <div className="inputBx">
                       <p>Ingresa tu nombre</p>
                       <input type="text" placeholder="Nombre completo"  />
                 </div>
                 <div className="inputBx">
                       <p>Ingresa tu correo</p>
                       <input type="email" placeholder="Correo electronico" />
                 </div>
                 <div className="inputBx">
                       <p>Mensaje</p>
                       <textarea placeholder="Escribe aquí..." ></textarea>
                 </div>
                 <div className="inputBx">
                       <input type="submit"  name="Submit"/>
                 </div>
           </div>
      </div>
      <div className="footer">
            <div className="info">
                <a href="#" className="logo">TepicGames</a>
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