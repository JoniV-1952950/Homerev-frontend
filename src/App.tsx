import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { LoginModal } from './components/LoginModal'; 
import { Button } from 'react-bootstrap';
import React from 'react';
import Main from "./components/Main";

interface IProps{}

interface IState{
  showLoginModal: boolean,
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps){
    super(props);
    // create a state for this component
    this.state = {
      showLoginModal: false
    };
    // bind this function to this component so you can access it from other components
    this.setShowLoginModal = this.setShowLoginModal.bind(this); 
    // if auth state changes update this component
    firebase.auth().onAuthStateChanged(() => {
      const user = firebase.auth().currentUser;
      if(user)
        user.getIdTokenResult().then((token) => {
        sessionStorage.setItem('role', token.claims.role);
        sessionStorage.setItem('token', token.token);
        this.forceUpdate();
      });
      else
        this.forceUpdate();
   });
  }

  setShowLoginModal(show: boolean){
    this.setState({showLoginModal: show});
  } 

  // this function renders the page based on the current user
  render() {
    // if no one is logged in show only the navigation bar and create a login modal to show (for now)
    if(!firebase.auth().currentUser)
      return (
        <>
          <Navbar setShowLoginModal={this.setShowLoginModal}/>
          <LoginModal show={this.state.showLoginModal} setShow={this.setShowLoginModal}/>
        </>
      );
    // if the current user is a therapist show the navbar and the main page (which renders based on the current url)
    else if(sessionStorage.getItem("role") === "therapist")
    {
    console.log(sessionStorage.getItem("token"))  
    return (
        <>
          <Navbar setShowLoginModal={this.setShowLoginModal}/>
          <Main/>
        </>
      );
    }
    // if the current user is a patient or a student => do nothing for now
    else if(sessionStorage.getItem("role") === "patient" || sessionStorage.getItem("role") === "student")
      return (
        <>
          <Navbar setShowLoginModal={this.setShowLoginModal}/>
        </>
      );
  }
}

export default App;
