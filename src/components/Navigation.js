import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import { signIn, signOut } from '../Auth0';
import { userLogoutAction } from '../store/actions/auth'
import { useDispatch, useSelector } from 'react-redux';
import { persistor } from 'store/configueStore';

const NavigationBar = styled.div`
  margin-bottom: 15px;
  background-color: lightgray;
`;

const Profile = styled.span`
  margin-left: 15px;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  max-width: 30px;
  margin-right: 5px;
`;


export default () => {
  const dispatch = useDispatch()
  const loggedIn = useSelector(state => state.authReducer.loggedIn)
  const user = useSelector(state => state.authReducer.user)

  const handleLogOut = async () => {
    signOut()
    await persistor.purge()
    dispatch(userLogoutAction())
  }
  
  return (
    <NavigationBar>
      {!loggedIn && <Button onClick={signIn}>Login</Button>}
      {loggedIn && (
          <Fragment>
              <Button onClick={handleLogOut}>Logout</Button>
              <Profile>
                  <ProfilePicture src={user.profile.picture} />
                  {user.profile.email}
              </Profile>
          </Fragment>
      )}
      {loggedIn && (
        <>
          <Link className="btn btn-secondary" to="/customer">
            Customer
          </Link>
          <Link className="btn btn-secondary" to="/reviewer">
            Reviewer
          </Link>
          <Link className="btn btn-secondary" to="/user-profile">
            Profile
          </Link>
          <Link className="btn btn-secondary" to="/products">
            Products
          </Link>
        </>
      )}
    </NavigationBar>
)}