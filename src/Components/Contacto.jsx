

function Contacto() {
  return (
    <footer className="contact">
           <img src="/lago.jpg" alt="" />
           <div className="form">
                  <h1>Contactanos</h1>
                  <div className="inputBx">
                       <p>Ingresa tu nombre</p>
                       <input type="text" placeholder="Nombre completo" />
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
                       <input type="submit" name="Submit"/>
                 </div>
           </div>
    </footer>
  )
}

export default Contacto