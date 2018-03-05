import React from 'react';
import { Hero, HeroBody, Container, Title, Subtitle, Input, Columns, Column, Button } from 'bloomer';
import { Link } from "react-router-dom";

import Auth from '../services/auth';

class Login extends React.Component {
    state = {
        login: 'eduardo.borges@dcomp.uf.br',
        password: 'escadarolante',
        isLogged: false,
        isLoading: false
    }

    componentWillMount(){
        document.title = "Login - Lara";
    }

    doLogin = (e) => {
        e.preventDefault();
        const { login, password } = this.state;
        this.setState({ isLoading: true });
        Auth.login( login, password).then( resp=>{
            this.props.history.push('/dashboards');
        }) 
        
    }

    

    onChangeInput = (event) => {
       const { name, value } =  event.target;
       this.setState({ [name]:value })
    }

    render() {
        return (
            <Hero isFullHeight isColor="white">
                <HeroBody>
                    <Container>
                        <Title>Login</Title>
                        <Subtitle>Utilize suas credênciais do HU para se autenticar no Lara</Subtitle>
                        <form onSubmit={this.doLogin}>
                            <Columns>
                                <Column isSize={3}>
                                    <Input name="login" isSize="medium" type="email" placeholder="Login" value={this.state.login} onChange={this.onChangeInput} required />
                                </Column>
                                <Column isSize={3}>
                                    <Input name="password" isSize="medium" type="password" placeholder="Senha" value={this.state.password} onChange={this.onChangeInput} required />
                                </Column>
                                <Column>
                                    <Button isSize="medium" isColor="primary" type="submit" isLoading={this.state.isLoading}>Entrar</Button>
                                </Column>
                            </Columns>
                        </form> 
                        <br/>
                        <Link to="/" className="button is-white">Voltar para o inicio</Link>
                    </Container>
                </HeroBody>
            </Hero>
        );
    }
}

export default Login;   