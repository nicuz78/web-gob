import react, {Component} from 'react';
import mateicom from '../Assets/img/mateico-m.jpg';

export default class New extends Component {
    render(){
        return(
            <a href="#" className="new-card">
                    <img src={mateicom} />
                    <div className="short-description">
                        <h2>Titulo New</h2>
                        <p>Descripcion abreviada de la noticia del dia,
                            si clickea esta noticia se desplegara una pantalla
                            con la noticia detallada que pueden o no incluir imagenes y fotos.</p>
                    </div>
            </a>
        )
    }
}