import React,{Component} from 'react';
import MensajeEstatico from "./MensajeEstatico";

class Peliculas extends Component{
    render() {
        return(
         <div>
             <p>Soy el component que tiene peliculas</p>
             <MensajeEstatico></MensajeEstatico>
         </div>
        )
    }
}

export default Peliculas;