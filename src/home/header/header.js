import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import './header.css';

class Header extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'home',
        };
    }

    render() {
        return (
            <Tabs
                id="controlled-tab-example"
                activeKey={this.state.key}
                onSelect={key => this.setState({ key })}
            >
                <Tab eventKey="home" title="Users">
                </Tab>
                <Tab eventKey="profile" title="Pointers">
                </Tab>
            </Tabs>
        );
    }
}

export default Header;