import react, {Component} from 'react';
import New from './New';

export default class News extends Component {
    render(){
        return(
            <div className="news" >
                <New className="firstnew" />
                <New className="secondnew" />
            </div>

        )
    }
}