import React, { Component } from 'react';
import { Section, Container, Columns, Column, Title, Subtitle, Tag, Breadcrumb, BreadcrumbItem, Button, Field, Label, Input } from 'bloomer';
import { Link } from "react-router-dom";
import MaterialIcon from "material-icons-react";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import AreaChart from "../../components/AreaChart";
import Table from '../../components/Table';

import ModalRemoveDashboard from "../../components/ModalRemoveDashboard";

import dashboardsService from "../../services/dashboardsService";
import dashBoardsItemsService from "../../services/dashBoardsItemsService";

class Detalhes extends Component {

    state = {
        dashboard: {},
        items: [],
        itensByColumn: 2,
        columnSizes: {
            "1": "12",
            "2": "6",
            "3": "4",
            "4": "3"
        },
        modals: {
            remove: false
        }
    }

    componentDidMount(){
        this.getDashboardDetails();
        this.getItems();
    }


    getDashboardDetails = () => {
        dashboardsService
            .get(this.props.match.params.id)
            .then( data => this.setState({ dashboard: data }) )
    }


    getItems = () => {
        dashboardsService
            .getItems( this.props.match.params.id )
            .then( data => this.setState({ items: data }) )
    }


    handleRemoveDashboard = () => {
        const id = this.props.match.params.id;
        dashboardsService.delete(id).then( ()=> this.props.history.push('/dashboards') )
    }

    handleRemoveDashboardItem = (e) => {
        const itemId = e.target.value;
        dashBoardsItemsService.delete(itemId).then( ()=> this.getItems() )
    }


    toggleModalRemove = () => {
        this.setState({ modals: { remove: !this.state.modals.remove } })
    }


    render() {
        const { dashboard } = this.state;
        return (
           <Section>
            <ModalRemoveDashboard
                isActive={this.state.modals.remove}
                dashboard={this.state.dashboard}
                toggleModalRemove={this.toggleModalRemove}
                handleRemoveDashboard={this.handleRemoveDashboard} />
            <Container>

                <Breadcrumb hasSeparator="arrow">
                    <ul>
                        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/dashboards">Dashboards</Link></BreadcrumbItem>
                        <BreadcrumbItem isActive><Link to={this.props.location.pathname}>Detalhes da Dashboard #{dashboard.id}</Link></BreadcrumbItem>
                    </ul>
                </Breadcrumb>


                <Columns isMultiline>
                    <Column isSize="3/4">
                        <Title>{dashboard.nome}</Title>
                        <Subtitle>{dashboard.descricao}</Subtitle>
                        <p>
                        </p>
                        <span>Última atualização em {dashboard.lastUpdate}</span>
                        <br/>
                        <Tag isColor="info">{dashboard.id}</Tag>  
                    </Column>
                    <Column hasTextAlign="right">
                        <div className="buttons is-right">
                            <Link to={`/dashboards/${dashboard.id}/adicionar/item`} className="button is-medium is-primary">Adicionar Itens</Link>
                            <Button isSize="medium" isColor="danger" onClick={this.toggleModalRemove}>Excluir</Button>

                            <Field isFullWidth>
                                <Label>Quant. de Colunas: <b>{this.state.itensByColumn}</b> </Label>
                                <input class="slider is-fullwidth is-large is-circle" value={this.state.itensByColumn} step="1" min="1" max="4" type="range" onChange={ (e)=> this.setState({ itensByColumn: e.target.value }) } />
                            </Field>
                        </div>
                    </Column>
                
                </Columns>
                
                <hr/>

                <Columns isMultiline>
                    
                    { this.state.items.map( item => (
                        <div class={`column is-${this.state.columnSizes[this.state.itensByColumn]}`} key={item.id}>
                            { item.tipo === 'tabela' && <Table {...item} handleRemoveDashboardItem={this.handleRemoveDashboardItem} /> }
                            { item.tipo === 'barras' && <BarChart {...item} handleRemoveDashboardItem={this.handleRemoveDashboardItem} /> }
                            { item.tipo === 'linhas' && <LineChart {...item} handleRemoveDashboardItem={this.handleRemoveDashboardItem} /> }
                            { item.tipo === 'pizza' && <PieChart {...item} handleRemoveDashboardItem={this.handleRemoveDashboardItem} /> }
                            { item.tipo === 'area' && <AreaChart {...item} handleRemoveDashboardItem={this.handleRemoveDashboardItem} /> }
                        </div>
                    )) }
                    
                </Columns>
            </Container>
           </Section>
        );
    }
}

export default Detalhes;