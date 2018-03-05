import React from 'react';
import { Link } from "react-router-dom";
import { Hero, HeroBody, Container, Title, Subtitle, Button } from 'bloomer'

class Home extends React.Component {
    state = {  }

    componentWillMount(){
        document.title = "Dashboard - Lara";
    }
    
    render() {
        return (
            <Hero isFullHeight isColor="primary">
                <HeroBody>
                    <Container>
                        <Title isSize="1">Bem Vindo ao Lara</Title>
                        <Subtitle>Uma solução para consumo e exibição de dados para <b><i>Humanos</i></b> </Subtitle>
                        <Link to="/login">
                            <Button isSize="medium" isColor="white">Vamos começar!</Button>
                        </Link>    
                    </Container>
                </HeroBody>
            </Hero>
        );
    }
}

export default Home;