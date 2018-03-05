import pjson from '../../package.json'

import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Container, Navbar, NavbarItem, NavbarBrand, NavbarDropdown, NavbarBurger, NavbarStart, Tag, NavbarEnd, NavbarMenu, NavbarLink, NavbarDivider } from "bloomer";
import MaterialIcon from "material-icons-react";

import System from '../services/system';

class Header extends Component {
    state = {
        isActive: false,
        system: {},
        systemStatusIsLoading: false
    }

    componentDidMount(){
        // setInterval(this.checkSystem, 4000)
        this.checkSystem()
    }

    onClickNav = () => this.setState({ isActive: !this.state.isActive })

    checkSystem = () => {
        System.status().then( resp => this.setState({ system: resp }))
    }
    

    render() {
        const systemStatus = this.state.system.status;
        return (
            <Navbar className="is-dark">
                <Container>
                    <NavbarBrand>
                        <NavbarItem>
                            Lara Project v.{pjson.version}
                        </NavbarItem>
                        <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
                    </NavbarBrand>
                    <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
                        <NavbarStart>
                            <NavbarItem>
                                { systemStatus && <small>Status dos serviços: <Tag isColor={systemStatus === 200 ? 'success' : 'warning'}> { systemStatus === 200 ? 'Online': 'Problem' }</Tag></small> }
                            </NavbarItem>
                        </NavbarStart>
                        <NavbarEnd>
                            <NavLink className="navbar-item" activeClassName="is-active" to="/dashboards">
                                 Minhas Dashboards
                            </NavLink>

                            <NavbarItem hasDropdown isHoverable>
                                <NavbarLink>
                                    <MaterialIcon icon="account_circle" color="#000"/> <span  style={{marginLeft: '5px'}} >Olá, Fulano</span>
                                </NavbarLink>
                                <NavbarDropdown>
                                    <NavbarItem href='#/'>One A</NavbarItem>
                                    <NavbarItem href='#/'>Two B</NavbarItem>
                                    <NavbarDivider />
                                    <NavbarItem href='#/'>Logout</NavbarItem>
                                </NavbarDropdown>
                            </NavbarItem>
                        
                        </NavbarEnd>
                    </NavbarMenu>
                </Container>
            </Navbar>
        );
    }
}

export default Header;