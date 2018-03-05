import React, { Component } from 'react';
import { Section, Container, Columns, Column, Title, Subtitle, Tag, Breadcrumb, BreadcrumbItem } from 'bloomer';
import { Link } from "react-router-dom";
import MaterialIcon from "material-icons-react";
import Chart from "../../components/Chart";



class Detalhes extends Component {
    state = {
        dashboard: {}
    }

    render() {

        const dashboardId = this.props.match.params.id;

        return (
           <Section>
            <Container>

                <Breadcrumb hasSeparator="arrow">
                    <ul>
                        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/dashboards">Dashboards</Link></BreadcrumbItem>
                        <BreadcrumbItem isActive><Link to={this.props.location.pathname}>Detalhes da Dashboard #{dashboardId}</Link></BreadcrumbItem>
                    </ul>
                </Breadcrumb>


                <Columns isMultiline>
                    <Column isSize="3/4">
                        <Title>Dashboard #1</Title>
                        <Subtitle>Descricao da Dashboard</Subtitle>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quas animi eveniet ducimus voluptas nemo.
                        </p>
                        <span>Última atualização em 23h</span>
                        <br/>
                        <Tag isColor="info">A385CS</Tag>  
                    </Column>
                    <Column hasTextAlign="right">
                        <div className="buttons is-pulled-right">
                            <Link to={`/dashboards/${dashboardId}/adicionar/item`} className="button is-medium is-primary">Adicionar Itens</Link>
                            <Link to="/" className="button is-medium is-danger">Excluir</Link>
                        </div>
                    </Column>
                
                </Columns>
                
                <hr/>

                <Columns isMultiline>
                    <Column>    
                        <div className="card">
                            <div className="card-header">
                                <div className="card-header-title">Card Type: Chart</div>
                            </div>
                            <div className="card-content">
                                <Chart></Chart>
                            </div>  
                            <footer className="card-footer">
                                <a href="/" className="card-footer-item">Save</a>
                                <a href="/" className="card-footer-item">Edit</a>
                                <a href="/" className="card-footer-item">Delete</a>
                            </footer>
                        </div>
                    </Column>


                    <Column>
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">
                                Card Type: List
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
                                    <tbody>
                                    { Array.from(new Array(300)).map( (item, i) => 
                                        <tr key={i}>
                                            <td width="5%"> <MaterialIcon icon="cloud"/> </td>
                                            <td>Lorum ipsum dolem aire</td>
                                            <td><a className="button is-small is-primary" href="/">Action</a></td>
                                        </tr>
                                    ) }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <footer className="card-footer">
                            <a href="/" className="card-footer-item">View All</a>
                        </footer>
                        </div>
                    </Column>
                   
                
                </Columns>
            </Container>
           </Section>
        );
    }
}

export default Detalhes;