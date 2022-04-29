// Import FirebaseAuth and firebase.
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Card, Container } from 'react-bootstrap';

// Configure Firebase.
const config = {
        apiKey: "AIzaSyAYzvi0vJVGvD-ISNpoWj8iGlTjdkcCiXw",
        authDomain: "homerev-users.firebaseapp.com",
        projectId: "homerev-users",
        storageBucket: "homerev-users.appspot.com",
        messagingSenderId: "599333584358",   
        appId: "1:599333584358:web:0a969ed395d39b38f06a27"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Email as auth providers.
  signInOptions: [
    {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    },
    {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // disable new sign ups
        disableSignUp: {
            status: true
        }
    }
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

// use the imported firebase ui block to log in with
export function SignIn() {
    return (
      <Container className="w-25">
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Sign in</Card.Title>
            <Card.Text>
              You need to sign in to continue.
            </Card.Text>
          </Card.Body>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </Card>
      </Container>
    )      
}

// sign the user out and remove all storage items
export async function SignOut() {
    await firebase.auth().signOut();
    sessionStorage.clear();
    window.location.pathname = '/';
}