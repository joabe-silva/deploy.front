import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

export default class Item extends Component {

    state = {
        item: {},
    };

    async componentDidMount(){

        const { id } = this.props.match.params;

        const response = await api.get(`/item/${id}`);

        this.setState({ item: response.data });
    }

    render(){
        
        const { item } = this.state;

        return(
            <div className="item-info">
                <article key={ item._id }>
                    <strong>{ item.titulo }</strong>
                    <p>{ item.dataCadastro }</p>
                    <Link to={`/`}>Voltar</Link>
                </article>
            </div>
        );
        
    }
}