import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage/errorMessage';
import CharacterPage from '../characterPage/characterPage'

import './app.css';


class App extends Component {
    state = {
        showRandomChar: true,
        error: false
    }
    componentDidCatch() {
        console.log('Error')
        this.setState({
            error: true
        })
    }
    clickWrapper = () => {
        this.setState({showRandomChar: !this.state.showRandomChar})
    }
    render() {
        const char = this.state.showRandomChar ? <RandomChar /> : null
        if(this.state.error) {
            return <ErrorMessage />
        }
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                        {char}
                        <button className="hidingButton" onClick={this.clickWrapper}>Toggle random character</button>
                        </Col>
                    </Row>
                    <CharacterPage />
                </Container>
            </>
        );
    }
};

export default App;