import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Route } from 'react-router-dom';
import Callback from './containers/Callback';
import NavigationContainer from './containers/NavigationContainer';
import UserProfileContainer from './containers/ProfileContainer';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
          <h1>To Do List</h1>
            <NavigationContainer />
            <Route exact path="/"  />
            <Route exact path="/new-item"/>
            <Route exact path="/user-profile" component={UserProfileContainer} />
            <Route exact path="/callback" component={Callback} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;