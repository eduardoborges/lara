import React, { Component } from 'react';
import MaterialIcon from "material-icons-react";

class Table extends Component {
  render() {
    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    {this.props.nome}
                </p>
                <a href="/" className="card-header-icon" aria-label="more options">
                <span className="icon">
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                </span>
                </a>
            </header>
            <div className="card-table">
                <div className="content">
                    <table className="table is-fullwidth is-striped">
                        <thead>
                            { this.props.atributos.map( atr => <th>{atr}</th> ) }
                        </thead>
                        <tbody>
                        { Array.from(new Array(300)).map( (item, i) => 
                            <tr key={i}>
                            { this.props.atributos.map( atr => <td>Teste de {String(atr).toUpperCase()}</td> ) }
                            </tr>
                        ) }
                        </tbody>
                    </table>
                </div>
            </div>
            <footer className="card-footer">
                <button className=" button is-light is-fullwidth" value={this.props.id} onClick={this.props.handleRemoveDashboardItem}>Excluir</button>
            </footer>
        </div>
    );
  }
}

export default Table;