import React, { Component } from 'react'
import './content.css'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

class Content extends Component{
    constructor(props) {
        super(props)
        this.state = {
                userName:'',
                userEmail:'',
                pointerCountry:'',
                pointerRegion:'',
                pointerCity:'',
                pointerZipCode:'',
                pointerStreet:'',
                pointerUser:'',
                pointerGeo:'',
                pointerDate:''
            };
        this.addUser = this.props.addUser
        this.addPointer = this.props.addPointer
    }

    //user handlers
    handleChangeUserName = (event)=>{
        this.setState({userName:event.target.value});
    }

    handleChangeUserEmail = (event)=>{
        this.setState({userEmail:event.target.value});
    }

    //pointer handlers
    handlerPointerCountry = (event)=>{
        this.setState({pointerCountry:event.target.value});
    }

    handlerPointerRegion = (event)=>{
        this.setState({pointerRegion:event.target.value});
    }

    handlerPointerCity= (event)=>{
        this.setState({pointerCity:event.target.value});
    }

    handlerPointerZipCode = (event)=>{
        this.setState({pointerZipCode:event.target.value});
    }

    handlerPointerStreet = (event)=>{
        this.setState({pointerStreet:event.target.value});
    }

    handlerPointerUser = (event)=>{
        this.setState({pointerUser:event.target.value});
    }

    handlerPointerGeo = (event)=>{
        this.setState({pointerGeo:event.target.value});
    }

    handlerPointerDate = (event)=>{
        this.setState({pointerDate:event.target.value});
    }

    handleUserSubmit = ()=>{
        const data = {
            id: Math.random(),
            name: this.state.userName,
            email: this.state.userEmail
        };
        this.addUser(data)
        document.getElementById("userForm").reset();
    }

    handlePointerSubmit = ()=>{
        const data = {
            id: Math.random(),
            country:this.state.pointerCountry,
            region:this.state.pointerRegion,
            city:this.state.pointerCity,
            zip:this.state.pointerZipCode,
            street:this.state.pointerStreet,
            userid:this.state.pointerUser,
            geo:this.state.pointerGeo,
            date:this.state.pointerDate
        };
        this.addPointer(data)
        document.getElementById("pointerForm").reset();
    }

    render() {
        return(
            this.props.type === 'users'?
                     <div className='formContent'>
                         <Form id='userForm'>
                             <Form.Group controlId="formBasicName">
                                 <Form.Label><b>Name</b></Form.Label>
                                 <Form.Control type="text" placeholder="Name" onChange={this.handleChangeUserName}/>
                             </Form.Group>
                             <Form.Group controlId="formBasicEmail">
                                 <Form.Label><b>Email</b></Form.Label>
                                 <Form.Control type="email" placeholder="Email" onChange={this.handleChangeUserEmail}/>
                             </Form.Group>
                             <Button variant="primary" type="button" className="float-right" onClick={this.handleUserSubmit}>Add</Button>
                         </Form>
                     </div>
                    :<div className='formContent'>
                    <Form id='pointerForm'>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCountry">
                                <Form.Label><b>Country</b></Form.Label>
                                <Form.Control type="text" placeholder="Country" onChange={this.handlerPointerCountry}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridRegion">
                                <Form.Label><b>Region</b></Form.Label>
                                <Form.Control type="text" placeholder="Region" onChange={this.handlerPointerRegion}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label><b>City</b></Form.Label>
                                <Form.Control placeholder="City" onChange={this.handlerPointerCity}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZipcode">
                                <Form.Label><b>Zipcode</b></Form.Label>
                                <Form.Control placeholder="Zipcode" onChange={this.handlerPointerZipCode}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formStreet">
                                <Form.Label><b>Street</b></Form.Label>
                                <Form.Control placeholder="Street" onChange={this.handlerPointerStreet}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formUser">
                                <Form.Label><b>User</b></Form.Label>
                                <Form.Control as="select" onChange={this.handlerPointerUser}>
                                    <option value="">Users</option>
                                    {this.props.users.map((user, index) => {
                                        return <option key={index} value={user.id}>{user.name}</option>;
                                    })}
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGeo">
                                <Form.Label><b>Gelocation</b></Form.Label>
                                <Form.Control placeholder="Gelocation" onChange={this.handlerPointerGeo}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formDate">
                                <Form.Label><b>Date</b></Form.Label>
                                <Form.Control placeholder="Date" onChange={this.handlerPointerDate}/>
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="button" className="float-right" onClick={this.handlePointerSubmit}>Add</Button>
                    </Form>
                     </div>
                )
    }
}

export default Content