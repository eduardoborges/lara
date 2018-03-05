import React,{ Component } from 'react';
import { Section, Container, Button, Title, Breadcrumb, BreadcrumbItem, Label, Field, Control, Input, TextArea } from 'bloomer';
import { Link } from "react-router-dom";
import DashboardService from '../../services/dashboards';


class Nova extends Component {
    state = {
        name: '',
        descricao: '',
        isLoading: false
    }

    componentWillMount(){
        document.title = "Nova Dashboard - Lara";
    }


    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]:value })
    }


    handleCreate = (e) => {
        e.preventDefault()
        this.setState({ isLoading: true })
        const dashboard = {
            nome: this.state.nome,
            descricao: this.state.descricao
        };
        DashboardService.create( dashboard ).then(this.onCreateSuccess)
    }


    onCreateSuccess = () => {
        this.setState({ isLoading: false });
        this.props.history.push('/dashboards');
    }


    handleCancel = (e) => {

    }

    render() {
        return (
            <Section>
                <Container>
                    <Breadcrumb hasSeparator="arrow">
                        <ul>
                            <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/dashboards">Dashboards</Link></BreadcrumbItem>
                            <BreadcrumbItem isActive><Link to={this.props.location.pathname}>Nova Dashboard: {this.state.name}</Link></BreadcrumbItem>
                        </ul>
                    </Breadcrumb>

                    <Title>Nova Dashboard</Title>

                    <form action="#" onSubmit={this.handleCreate}>
                        <Field>
                            <Label>Nome</Label>
                            <Control>
                                <Input
                                    type="text"
                                    isSize="medium"
                                    placeholder="Algum titulo breve"
                                    name="nome"
                                    defaultValue={this.state.nome}
                                    onChange={this.onChange}
                                    min={8}
                                    required />
                            </Control>
                        </Field>

                        <Field>
                            <Label>Descrição</Label>
                            <Control>
                                <TextArea
                                    isSize="medium"
                                    placeholder="Uma descrição da Dashboard a ser criada para detalhar melhor do que se trata."
                                    name="descricao"
                                    defaultValue={this.state.descricao}
                                    onChange={this.onChange}
                                    min={10}
                                    required />
                            </Control>
                        </Field>

                        <Field isGrouped>
                            <Control>
                                <Button type="submit" isSize="medium" isColor='primary' isLoading={ this.state.isLoading }>Criar Dashboard</Button>
                            </Control>
                            <Control>
                                <Button isSize="medium">Cancelar e voltar</Button>
                            </Control>
                        </Field>
                    </form>

                </Container>
            </Section>
            
        );
    }
}

export default Nova;