import auth0 from 'auth0-js';

const auth0Client = new auth0.WebAuth({
  // the following three lines MUST be updated
  domain: 'nexttest.auth0.com',
  audience: 'https://nexttest.auth0.com/userinfo',
  clientID: 'TCooomK1xTn5yK0r5qrpbjiVM6o3ouGy',
  redirectUri: 'http://localhost:3000/callback',
  responseType: 'id_token',
  scope: 'openid profile email'
});

export function handleAuthentication() {
  return new Promise((resolve, reject) => {
    auth0Client.parseHash((err, authResult) => {
      if (err) return reject(err);
      if (!authResult || !authResult.idToken) {
        return reject(err);
      }
      const idToken = authResult.idToken;
      const profile = authResult.idTokenPayload;
      // set the time that the id token will expire at
      const expiresAt = authResult.idTokenPayload.exp * 1000;
      resolve({
        authenticated: true,
        idToken,
        profile,
        expiresAt
      });
    });
  });
}

export function logIn() {
  auth0Client.authorize();
}

export function signUp() {
  auth0Client.authorize();
}

export function signOut() {
  auth0Client.logout({
    returnTo: 'http://localhost:3000',
    clientID: 'TCooomK1xTn5yK0r5qrpbjiVM6o3ouGy'
  })
}