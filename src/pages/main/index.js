import React, {Component} from 'react';
import api from '../../services/api';
import './style.css'

export default class Main extends Component {
    state = {
        itens: []
    }

    componentDidMount(){
        this.loadItens();
    }

    loadItens = async () => {
        const result = await api.get('/itens');
        this.setState({itens: result.data.docs});;
    };

    render(){
        const { itens } = this.state;
        return(
            
            <div className="itens-list">
                {
                    itens.map(itens => (
                        <article key={ itens._id }>
                            <strong>{ itens.titulo }</strong> 
                            <p>{ itens.dataCadastro }</p>

                            <a href="">Acessar</a>
                        </article>   
                    ))
                }
                <div className="actions">
                    <button>Anterior</button>
                    <button>Proximo</button>
                </div>
            </div>         
        )
    }
}