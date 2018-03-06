import React, { Component } from 'react';
import { Section, Container, Button, Columns, Column, Hero, HeroBody, Title, Subtitle, Tag } from 'bloomer';
import { Link } from "react-router-dom";
import MaterialIcon from "material-icons-react";
import dashboardsService from '../../services/dashboardsService';

class Overview extends Component {
    state = {
        dashboards: []
    }

    componentWillMount(){
        document.title = "Minhas Dashboards - Lara"
    }

    getDashboards = () => dashboardsService.all().then( data => this.setState({ dashboards: data }) )

    render() {
        this.getDashboards();
        return (
           <Section>
            <Container>
                <Columns>
                    <Column>
                        <Title>Minhas Dashboards</Title>
                    </Column>
                    <Column>
                        <Link to="/dashboards/nova">
                            <Button isSize="medium" isColor="primary" isPulled="right">Criar Nova Dashboard</Button>
                        </Link>
                        
                    </Column>
                
                </Columns>
                
                <hr/>

                <Columns isMultiline>

                    { this.state.dashboards.map( (dashboard, index) => (
                        <Column isSize={6} className="animated fadeInUp" style={{animationDelay: `.${index}s`}}>
                            <Link to={`/dashboards/${dashboard.id}/detalhes`}>
                                <Hero isSize="small" isColor="primary" isBold style={{borderRadius: '3px'}}>
                                    <HeroBody>
                                        <Columns>
                                            <Column>
                                                <Title>{dashboard.nome}</Title>
                                                <Subtitle>{dashboard.descricao}</Subtitle>
                                            </Column>
                                            <Column hasTextAlign="right" isSize={3}>
                                                <Tag>{dashboard.id}</Tag> 
                                            </Column>
                                        </Columns>
                                        <span><MaterialIcon icon="update" color="#FFF" size="small" /> Última atualização em 23h</span>
                                        <br/>
                                                                         
                                    </HeroBody>
                                </Hero>
                            </Link>
                        </Column>
                    ) ) }

                    { this.state.dashboards.length === 0 && <MaterialIcon icon="loading"/> }
                
                </Columns>
            </Container>
           </Section>
        );
    }
}

export default Overview;