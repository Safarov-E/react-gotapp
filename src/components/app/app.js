import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage/errorMessage';
import CharacterPage from '../characterPage/characterPage'
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import gotService from '../services/gotService'

import './app.css';


class App extends Component {
    gotService = new gotService();
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
                    <Row>
                        <Col md='6'>
                            <ItemList 
                                onItemSelected={this.onItemSelected}
                                getData={this.gotService.getAllBooks}
                                renderItem={(item) => item.name}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                                onItemSelected={this.onItemSelected}
                                getData={this.gotService.getAllHouses}
                                renderItem={(item) => item.name}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};

export default App;