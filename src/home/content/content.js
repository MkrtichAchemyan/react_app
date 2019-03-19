import React, { Component } from 'react'
import './content.css'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

class Content extends Component{
    constructor(props) {
        super(props)
        this.state = {
            buttonValue:"Add"
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            buttonValue: nextProps.buttonValue
        })
        console.log(nextProps)
    }
    render() {
        return(
            this.props.type === 'users'?
                     <div className='formContent'>
                         <Form>
                             <Form.Group controlId="formBasicName">
                                 <Form.Label><b>Name</b></Form.Label>
                                 <Form.Control type="text" placeholder="Name" />
                             </Form.Group>
                             <Form.Group controlId="formBasicEmail">
                                 <Form.Label><b>Email</b></Form.Label>
                                 <Form.Control type="email" placeholder="Email" />
                             </Form.Group>
                             <Button variant="primary" type="submit" className="float-right">{this.state.buttonValue}</Button>
                         </Form>
                     </div>
                    :<div className='formContent'>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCountry">
                                <Form.Label><b>Country</b></Form.Label>
                                <Form.Control type="text" placeholder="Country" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridRegion">
                                <Form.Label><b>Region</b></Form.Label>
                                <Form.Control type="text" placeholder="Region" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label><b>City</b></Form.Label>
                                <Form.Control placeholder="City" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZipcode">
                                <Form.Label><b>Zipcode</b></Form.Label>
                                <Form.Control placeholder="Zipcode" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formStreet">
                                <Form.Label><b>Street</b></Form.Label>
                                <Form.Control placeholder="Street"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formUser">
                                <Form.Label><b>User</b></Form.Label>
                                <Form.Control placeholder="User"/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGeo">
                                <Form.Label><b>Gelocation</b></Form.Label>
                                <Form.Control placeholder="Gelocation"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formDate">
                                <Form.Label><b>Date</b></Form.Label>
                                <Form.Control placeholder="Date"/>
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="submit" className="float-right">{this.state.buttonValue}</Button>
                    </Form>
                     </div>
                )
    }
}

export default Content