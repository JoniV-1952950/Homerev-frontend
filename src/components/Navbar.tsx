import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav } from 'react-bootstrap';
import { SignOut } from '../utils/Firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Variables } from '../utils/Variables';

interface IProps {
}

interface IState {
}

class MyNavbar extends React.Component<IProps, IState>{
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
                        <Navbar.Text>Signed in as: <a href={Variables.HOME_URL}>{user.displayName}</a></Navbar.Text>
                    </Navbar.Collapse>
                </>
            );
        // return the navigation bar with the appropiate navItem (defined above)
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href={Variables.HOME_URL}>Homerev</Navbar.Brand>
                        <Navbar.Toggle />
                        {navItem}
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default MyNavbar;
