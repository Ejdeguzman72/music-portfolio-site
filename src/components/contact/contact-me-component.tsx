import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { SocialMediaBarComponent } from '../home/social-media-component';

export class ContactMeComponent extends React.Component<any,any> {
    constructor(props: any) {
        super(props);

        this.state = {
            name: "",
            emai: "",
            message: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleChange(event:any) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event: any) {
        event.preventDefault()

        const { name, email, message } = this.state
    }

    render() {
        return (
            <div>
                <div id="margin-hero">
                    <div id="contact-me-background">
                        <div id="contact-me-container">
                            <Form>
                                <h1>Contact Information:</h1>
                                <p>Email: stephon-owens@gmail.com</p>
                                <p>Phone: 201-546-0750</p>
                                <FormGroup>
                                    <Label>Enter Name: </Label>
                                    <Input 
                                    type="text"
                                    name="name"
                                    onChange = {this.handleChange}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label>Enter Email Address: </Label>
                                    <Input
                                    type="email"
                                    name="email"
                                    onChange = {this.handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <Label>Write Message: </Label>
                                    <Input
                                    type="textarea"
                                    name="message"
                                    onChange = {this.handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <Button className ="dark" onClick={this.handleSubmit}>Submit</Button>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}