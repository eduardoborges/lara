import React,{ Component } from 'react';
import { Section, Container, Button, Title, Breadcrumb, BreadcrumbItem, Label, Field, Control, Input, TextArea, Select } from 'bloomer';
import { Link } from "react-router-dom";
import dashboardItemService from '../../../services/dashBoardsItemsService';


class NovoItem extends Component {
    state = {
        nome: 'Lista de Pacientes',
        banco: 'ghu',
        tabela: 'pacientes',
        tipo: 'linhas',
        updateTime: 4,
        atributos: ['nome', 'cpf'],
        isLoading: false
    }

    componentWillMount(){
        document.title = "Nova Item  - Lara";
    }


    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]:value })
    }


    onChangeMultiple = (e) => {
        const { name, options } = e.target;
        let value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        this.setState({ [name]:value })
    }


    handleCreate = (e) => {
        e.preventDefault()
        this.setState({ isLoading: true })
        const { nome, banco, tabela, tipo, updateTime, atributos } = this.state
        const dashboard = { id: Date.now(), nome, banco, tabela, tipo, updateTime, atributos, dashboardId: this.props.match.params.id };
        dashboardItemService.create( dashboard ).then(this.onCreateSuccess)
    }


    onCreateSuccess = () => {
        this.setState({ isLoading: false });
        this.props.history.push(`/dashboards/${this.props.match.params.id}/detalhes`);
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
                            <Select isSize="medium"
                                    name="banco"
                                    defaultValue={this.state.banco}
                                    onChange={this.onChange}
                                    required>
                                    <option value="" disabled>Selecione...</option>
                              <option value="ghu">GHU</option>
                            </Select>
                          </Control>

                          <Control>
                            <Label>Tabela</Label>
                            <Select isSize="medium"
                                    name="tabela"
                                    defaultValue={this.state.tabela}
                                    onChange={this.onChange}
                                    required>
                                <option value="" disabled>Selecione...</option>
                                <option value="pacientes">PACIENTES</option>
                                <option value="farmacia">FARMACIA</option>
                                <option value="emergencia">EMERGENCIA</option>
                            </Select>
                          </Control>

                          <Control>
                            <Label>Tipo de Exibição</Label>
                            <Select isSize="medium"
                                    name="tipo"
                                    defaultValue={this.state.tipo}
                                    onChange={this.onChange}
                                    required>
                                <option value="" disabled>Selecione...</option>
                                <option value="pizza">Gráfico de Pizza</option>
                                <option value="linhas">Gráfico de Linhas</option>
                                <option value="barras">Gráfico de Barras</option>
                                <option value="tabela">Tabela</option>
                            </Select>
                          </Control>

                          <Control>
                            <Label>Tempo de Atualização (em segundos)</Label>
                            <Input  isSize="medium"
                                    type="number"
                                    name="updateTime"
                                    defaultValue={this.state.updateTime}
                                    onChange={this.onChange}
                                    min={2}
                                    required />
                          </Control>

                        </Field>

                        <Field>
                          
                          <Control>
                            <Label>Campos a serem exibidos no item (Segure Ctrl para selecionar mais de um) </Label>
                            <div class="select is-multiple">
                            <select size="5"
                                    name="atributos"
                                    defaultValue={this.state.atributos}
                                    onChange={this.onChangeMultiple}
                                    required
                                    multiple>
                                <option value="nome">nome</option>
                                <option value="data_nascimento">data_nascimento</option>
                                <option value="cpf">cpf</option>
                                <option value="nome_pai">nome_pai</option>
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