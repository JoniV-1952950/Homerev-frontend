import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import React from 'react';
import TherapistMain from "./pages/Therapist/TherapistMain";
import PatientMain from "./pages/Patient/PatientMain";
import StudentMain from "./pages/Student/StudentMain";
import { SignIn } from './utils/Firebase';
import { Variables } from './utils/Variables';
import { Alert } from 'react-bootstrap';

interface IProps{}

interface IState{
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps){
    super(props);
    // if auth state changes update this component
    firebase.auth().onAuthStateChanged(() => {
      const user = firebase.auth().currentUser;
      if(user)
        user.getIdTokenResult().then((token) => {
        sessionStorage.setItem(Variables.ROLE, token.claims.role);
        sessionStorage.setItem(Variables.TOKEN, token.token);
        sessionStorage.setItem(Variables.UID, user.uid);
        this.forceUpdate();
      });
      else
        this.forceUpdate();
   });
  }

  // this function renders the page based on the current user
  render() {
    console.log(sessionStorage.getItem(Variables.TOKEN))
    // if no one is logged in show only the navigation bar and create a login modal to show (for now)
    if(!sessionStorage.getItem(Variables.TOKEN)) {
      return (
        <>
          <Navbar/>
          <br/> 
          <SignIn/>
        </>
      );
    }
    // if the current user is a therapist show the navbar and the main page (which renders based on the current url)
    if(sessionStorage.getItem(Variables.ROLE) === Variables.THERAPIST_ROLE)
    {
    return (
        <>
          <Navbar/>
          <TherapistMain/>
        </>
      );
    }
    // if the current user is a patient show the navbar and the main page (which renders based on the current url)
    if(sessionStorage.getItem(Variables.ROLE) === Variables.PATIENT_ROLE)
    {
    return (
        <>
          <Navbar/>
          <PatientMain/>
        </>
      );
    }
    // if the current user is a patient or a student => do nothing for now
    else if(sessionStorage.getItem(Variables.ROLE) === Variables.STUDENT_ROLE)
      return (
        <>
          <Navbar/>
          <StudentMain/>
        </>
      );
    else return (
      <Alert variant="warning">
        You should have a valid account to do stuff here
      </Alert>
    )
  }
}

export default App;
