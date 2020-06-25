import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute'
import { Callback } from './components/Callback';
import { UserProfile } from './components/UserProfile'
import { CustomerChat } from './components/CustomerChat';
import { Products } from './components/Products';
import { Reviewer1 } from "./components/Reviewer1";
import { CreateReview } from "./components/CreateReview";
import { ReviewForm } from './components/ReviewForm'
import Navigation from 'components/Navigation'
import Footer from 'custom_components/Footer/Footer'
import { ProductReviewerList } from 'components/ProductReviewerList1';
import { PendingChatRequests } from 'components/PendingChatRequests'
import { ReviewerChat } from 'components/ReviewerChat'
import { LandingPage } from 'components/LandingPage'
import { Customer } from 'components/Customer';
import { CustomerProductReviewerList } from 'components/CustomerProductReviewerList';
import { Reviewer } from 'components/Reviewer';
import { Grid } from '@material-ui/core';

class App extends Component {
  render() {
    return (
        <Grid container style={{ backgroundColor: "#D7FDEC" }}>
          <Grid item xs={12}  style={{ minHeight: '100%' }}>
            <Navigation />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/customers/:path?" component={Customer} />
            <Route exact path="/customers/products/:productId" component={CustomerProductReviewerList} />
            <Route exact path="/reviewers/:path?" component={Reviewer} />
            <Route exact path="/user-profile" component={UserProfile} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:productId" component={ProductReviewerList} />
            <Route exact path="/callback" component={Callback} />
            <Route exact path="/customer-chat" component={CustomerChat} />
            <ProtectedRoute exact path="/reviewer">
              <Reviewer1/>
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
            <ProtectedRoute path="/reviewer/chat/:customerId?/:reviewId?">
              <ReviewerChat />
            </ProtectedRoute>
            <ProtectedRoute path="/customer/chat">
              <CustomerChat />
            </ProtectedRoute>
          </Grid>
          <Grid item md={12}  style={{ marginTop: '3em' }}>
            <Footer whiteFont/>
          </Grid>
        </Grid>  
        
      
    );
  }
}

export default App;