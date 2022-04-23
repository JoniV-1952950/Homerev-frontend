import React from 'react';
import logo from './logo.svg';
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Modal, Button } from 'react-bootstrap';
import { SignIn, SignOut } from '../utils/Firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// props interface, contains a function that makes the modal visible or invisible
interface IProps {
    setShowLoginModal: (s: boolean) => void
}

interface IState {
}

class MyNavbar extends React.Component<IProps, IState>{
    constructor(props: IProps){
        super(props);     
    }

    render(){
        const user = firebase.auth().currentUser;
        let navItem;
        // if there is a user logged in, show a logout link and the current users name
        if(user)
            navItem = ( 
                <>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link onClick={async () => {
                                                        await SignOut();
                                                    }
                            }>Logout</Nav.Link>
                        </Nav>
                        <Navbar.Text>Signed in as: <a href="">{user.displayName}</a></Navbar.Text>
                    </Navbar.Collapse>
                </>
            );
        // if there is no user logged in, show a log in button
        else
            navItem = (
                <Nav className="justify-content-end">
                    <Nav.Link onClick={ () => this.props.setShowLoginModal(true) }>Login</Nav.Link>
                </Nav>
            );
        // return the navigation bar with the appropiate navItem (defined above)
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Homerev</Navbar.Brand>
                        <Navbar.Toggle />
                        {navItem}
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default MyNavbar;
