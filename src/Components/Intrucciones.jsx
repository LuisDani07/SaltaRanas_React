import Slider from './Slider';

function Intrucciones() {
  return (
    <section className="instrucciones animeX" id="jugar1">
           <div className="content">
                    <h1>Controles básicos para jugar</h1>
                    <Slider imgs={['/1.PNG','2.PNG', '3.PNG','4.PNG', '5.PNG']}/>
           </div>
    </section>
  )
}

export default Intrucciones