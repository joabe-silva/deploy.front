import React, {Component} from 'react';
import api from '../../services/api';
import './style.css'
import { Link } from 'react-router-dom';

export default class Main extends Component {
    state = {
        itens: [],
        itensInfo: [],
        page: 1,
    }

    componentDidMount(){
        this.loadItens();
    }

    loadItens = async (page=1) => {

        const result = await api.get(`/itens?page=${page}`);

        const { docs, ...intesInfo } = result.data;

        this.setState({ itens: docs, intesInfo, page });
        
    };

    prevPage = () => {

        const { page } = this.state;

        if(page === 1) return;

        const pageNumber = page - 1;

        this.loadItens(pageNumber);

    }

    nextPage = () => {
        const { page, intesInfo } = this.state;

        if(page === intesInfo.pages) return;

        const pageNumber = page + 1;

        this.loadItens(pageNumber);
    }

    render(){

        const { itens, page, itensInfo } = this.state;

        return(
            
            <div className="itens-list">
                {
                    itens.map(itens => (
                        <article key={ itens._id }>
                            <strong>{ itens.titulo }</strong> 
                            <p>{ itens.dataCadastro }</p>

                            <Link to={`/item/${itens._id}`}>Acessar</Link>
                        </article>   
                    ))
                }
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === itensInfo.pages} onClick={this.nextPage}>Proximo</button>
                </div>
            </div>         
        )
    }
}