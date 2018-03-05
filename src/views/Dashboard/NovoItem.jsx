import React,{ Component } from 'react';
import { Section, Container, Button, Title, Breadcrumb, BreadcrumbItem, Label, Field, Control, Input, TextArea, Select } from 'bloomer';
import { Link } from "react-router-dom";
import DashboardService from '../../services/dashboards';


class NovoItem extends Component {
    state = {
        name: '',
        descricao: '',
        isLoading: false
    }

    componentWillMount(){
        document.title = "Nova Item  - Lara";
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
        const dashboardId = this.props.match.params.id;
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

                    <Title>Novo Item na Dashboard #{dashboardId}</Title>

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

                        <hr/>

                        <Field isGrouped>
                          
                          <Control>
                            <Label>Banco</Label>
                            <Select isSize="medium">
                              <option value="">GHU</option>
                            </Select>
                          </Control>

                          <Control>
                            <Label>Tabela</Label>
                            <Select isSize="medium">
                              <option value="">PACIENTES</option>
                              <option value="">FARMACIA</option>
                              <option value="">EMERGENCIA</option>
                            </Select>
                          </Control>

                          <Control>
                            <Label>Tipo de Exibição</Label>
                            <Select isSize="medium">
                              <option value="">Gráfico de Pizza</option>
                              <option value="">Gráfico de Linhas</option>
                              <option value="">Gráfico de Barras</option>
                              <option value="">Tabela</option>
                            </Select>
                          </Control>

                          <Control>
                            <Label>Tempo de Atualização (em segundos)</Label>
                            <Input isSize="medium" type="number" min={2} defaultValue={4} />
                          </Control>

                        </Field>

                        <Field>
                          
                          <Control>
                            <Label>Campos a serem exibidos no item (Segure Ctrl para selecionar mais de um) </Label>
                            <div class="select is-multiple">
                            <select multiple size="5">
                              <option value="Argentina">nome</option>
                              <option value="Bolivia">data_nascimento</option>
                              <option value="Brazil">cpf</option>
                              <option value="Chile">nome_pai</option>
                            </select>
                          </div>
                          </Control>
                      
                        </Field>

                        <hr/>


                        <Field isGrouped>
                            <Control>
                                <Button type="submit" isSize="medium" isColor='success' isLoading={ this.state.isLoading }>Adicionar Item</Button>
                            </Control>
                            <Control>
                                <Button isSize="medium" isColor="danger">Cancelar e voltar</Button>
                            </Control>
                        </Field>
                    </form>

                </Container>
            </Section>
            
        );
    }
}

export default NovoItem;