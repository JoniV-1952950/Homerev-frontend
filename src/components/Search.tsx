import React, { KeyboardEvent } from "react";
import { Form, Container, InputGroup, Button } from "react-bootstrap";

interface IProps {
    searchPatients: (value: string | null) => void
}

// save the searchName as a state in the component
interface IState {
    searchName: string | null
}

class Search extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state = {
            searchName: null
        }
        // bind the function to this component
        this.handleKeyPress = this.handleKeyPress.bind(this); 
    }

    // if the key pressed was the enter key search for patients
    handleKeyPress(event: KeyboardEvent) {
        if(event.key === "Enter") {
            this.props.searchPatients(this.state.searchName)
        }
    }

    render() {
        return (
            <>
                <br/>
                <Container className="w-25">
                    <InputGroup className="mb-3">
                        {/*onKeypress => execute handleKeyPress, onChange => update the state of the component so the value is stored*/}
                        <Form.Control type="search" placeholder="Search patients..." onKeyPress={this.handleKeyPress} onChange={(event) => this.setState({searchName: event.target.value})}/>
                        {/*if the button is clicked, search for patients */}
                        <Button variant="secondary" onClick={() => this.props.searchPatients(this.state.searchName)}>Search</Button>
                    </InputGroup>
                </Container>
            </>);
    }
}

export default Search;