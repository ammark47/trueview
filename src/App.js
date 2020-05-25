import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Route } from 'react-router-dom';
import Callback from './containers/Callback';
import NavigationContainer from './containers/NavigationContainer';
import UserProfileContainer from './containers/ProfileContainer';
import { CustomerChat } from './components/CustomerChat';
import { Products } from './components/Products';
import { Reviewer } from "./components/Reviewer";
import { CreateReview } from "./components/CreateReview";

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
          <h1></h1>
            <NavigationContainer />
            <Route exact path="/"  />
            <Route exact path="/new-item"/>
            <Route exact path="/user-profile" component={UserProfileContainer} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/callback" component={Callback} />
            <Route exact path="/customer-chat" component={CustomerChat} />
            <Route exact path="/reviewer" component={Reviewer} />
            <Route exact path="/reviewer/create_review" component={CreateReview} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;