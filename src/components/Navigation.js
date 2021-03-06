import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Fragment } from 'react';
import { logIn, signUp, signOut } from '../Auth0';
import { userLogoutAction } from '../store/actions/auth'
import { useDispatch, useSelector } from 'react-redux';
import { persistor } from 'store/configueStore';
import Header from 'custom_components/Header/Header';
import { LoggedOutHeaderLinks } from './LoggedOutHeaderLinks'
import HeaderLinks from 'custom_components/Header/HeaderLinks';
import { LoggedInHeaderLinks } from './LoggedInHeaderLinks';



export default () => {
  const dispatch = useDispatch()
  const loggedIn = useSelector(state => state.authReducer.loggedIn)
  const user = useSelector(state => state.authReducer.user)

  const handleLogOut = async () => {
    signOut()
    await persistor.purge()
    dispatch(userLogoutAction())
  }

  const HeaderLinks = !loggedIn ? <LoggedOutHeaderLinks  logIn={logIn} /> : <LoggedInHeaderLinks logOut={handleLogOut} />

  
  return (
    <>
      <Header 
        brand="True View"
        color="custom"
        fixed
        rightLinks={HeaderLinks}
        changeColorOnScroll={{
          height: 400,
          color: "rose"
        }} />

    </>





    // <NavigationBar>
    //   {!loggedIn && <Button onClick={logIn}>Login</Button>}
    //   {!loggedIn && <Button onClick={signUp}>Register</Button>}
    //   {loggedIn && (
    //       <Fragment>
    //           <Button onClick={handleLogOut}>Logout</Button>
    //           <Profile>
    //               <ProfilePicture src={user.profile.picture} />
    //               {user.profile.email}
    //           </Profile>
    //       </Fragment>
    //   )}
    //   {loggedIn && (
    //     <>
    //       <Link className="btn btn-secondary" to="/customer">
    //         Customer
    //       </Link>
    //       <Link className="btn btn-secondary" to="/reviewer">
    //         Reviewer
    //       </Link>
    //       <Link className="btn btn-secondary" to="/user-profile">
    //         Profile
    //       </Link>
    //       <Link className="btn btn-secondary" to="/products">
    //         Products
    //       </Link>
    //     </>
    //   )}
    // </NavigationBar>
  )
}