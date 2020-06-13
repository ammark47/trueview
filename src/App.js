import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Route } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute'
import { Callback } from './components/Callback';
import { UserProfile } from './components/UserProfile'
import { CustomerChat } from './components/CustomerChat';
import { Products } from './components/Products';
import { Reviewer } from "./components/Reviewer";
import { CreateReview } from "./components/CreateReview";
import { ReviewForm } from './components/ReviewForm'
import Navigation from 'components/Navigation';
import { ProductReviewerList } from 'components/ProductReviewerList';
import { PendingChatRequests } from 'components/PendingChatRequests'

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
          <h1></h1>
            <Navigation />
            <Route exact path="/"  />
            <Route exact path="/user-profile" component={UserProfile} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:productId" component={ProductReviewerList} />
            <Route exact path="/callback" component={Callback} />
            <Route exact path="/customer-chat" component={CustomerChat} />
            <ProtectedRoute exact path="/reviewer">
              <Reviewer/>
            </ProtectedRoute>
            <ProtectedRoute exact path="/reviewer/create-review">
              <CreateReview />
            </ProtectedRoute>
            <ProtectedRoute exact path="/reviewer/create-review/checkout">
              <ReviewForm />
            </ProtectedRoute>
            <ProtectedRoute exact path="/reviewer/pending-chat-requests">
              <PendingChatRequests />
            </ProtectedRoute>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;