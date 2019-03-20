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
                userId:'',
                pointerId:'',
                pointerCountry:'',
                pointerRegion:'',
                pointerCity:'',
                pointerZipCode:'',
                pointerStreet:'',
                pointerUser:'',
                pointerGeo:'',
                pointerDate:'',
                userButtonValue: this.props.userButtonValue,
                pointerButtonValue: this.props.pointerButtonValue
            };
        this.addUser = this.props.addUser
        this.addPointer = this.props.addPointer
        this.updateUser = this.props.updateUser
        this.updatePointer = this.props.updatePointer
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.type === 'users'){
            this.setState({
                userName:nextProps.userFields.name,
                userEmail:nextProps.userFields.email,
                userId:nextProps.userFields.id,
                userButtonValue:nextProps.userButtonValue
            })
        }
        if (this.props.type === 'pointers'){
            this.setState({
                pointerId:nextProps.pointerFields.id,
                pointerCountry:nextProps.pointerFields.country,
                pointerRegion:nextProps.pointerFields.region,
                pointerCity:nextProps.pointerFields.city,
                pointerZipCode:nextProps.pointerFields.zip,
                pointerStreet:nextProps.pointerFields.street,
                pointerUser:nextProps.pointerFields.userid,
                pointerGeo:nextProps.pointerFields.geo,
                pointerDate:nextProps.pointerFields.date,
                pointerButtonValue: nextProps.pointerButtonValue
            })
        }
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
        let old_date = event.target.value;
        let new_Date = new Date(old_date).getTime()
        this.setState({pointerDate:new_Date});
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
    handleUserUpdateSubmit = ()=>{
        const data = {
            id:  this.state.userId,
            name: this.state.userName,
            email: this.state.userEmail
        };
        this.updateUser(data)
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
            userid:+this.state.pointerUser,
            geo:this.state.pointerGeo,
            date:this.state.pointerDate
        };
        this.addPointer(data)
        document.getElementById("pointerForm").reset();
    }

    handlePointerUpdateSubmit = ()=>{
        const data = {
            id: this.state.pointerId,
            country:this.state.pointerCountry,
            region:this.state.pointerRegion,
            city:this.state.pointerCity,
            zip:this.state.pointerZipCode,
            street:this.state.pointerStreet,
            userid:+this.state.pointerUser,
            geo:this.state.pointerGeo,
            date:this.state.pointerDate
        };
        this.updatePointer(data)
        document.getElementById("pointerForm").reset();
    }

    render() {
        return(
            this.props.type === 'users'?
                     <div className='formContent'>
                         <Form id='userForm'>
                             <Form.Group controlId="formBasicName">
                                 <Form.Label><b>Name</b></Form.Label>
                                 <input type="text" placeholder="Name" className='form-control' value={this.state.userName} onChange={this.handleChangeUserName}/>
                             </Form.Group>
                             <Form.Group controlId="formBasicEmail">
                                 <Form.Label><b>Email</b></Form.Label>
                                 <input type="email" placeholder="Email" className='form-control' value={this.state.userEmail} onChange={this.handleChangeUserEmail}/>
                             </Form.Group>
                             <Button variant="primary" type="button" className="float-right" onClick={this.state.userButtonValue==='Add'?this.handleUserSubmit:this.handleUserUpdateSubmit}>{this.state.userButtonValue}</Button>
                         </Form>
                     </div>
                    :<div className='formContent'>
                    <Form id='pointerForm'>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCountry">
                                <Form.Label><b>Country</b></Form.Label>
                                <input value={this.state.pointerCountry} className='form-control' type="text" placeholder="Country" onChange={this.handlerPointerCountry}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridRegion">
                                <Form.Label><b>Region</b></Form.Label>
                                <input value={this.state.pointerRegion} className='form-control' type="text" placeholder="Region" onChange={this.handlerPointerRegion}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label><b>City</b></Form.Label>
                                <input value={this.state.pointerCity} className='form-control' placeholder="City" onChange={this.handlerPointerCity}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZipcode">
                                <Form.Label><b>Zipcode</b></Form.Label>
                                <input value={this.state.pointerZipCode} className='form-control' placeholder="Zipcode" onChange={this.handlerPointerZipCode}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formStreet">
                                <Form.Label><b>Street</b></Form.Label>
                                <input value={this.state.pointerStreet} className='form-control' placeholder="Street" onChange={this.handlerPointerStreet}/>
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
                                <input value={this.state.pointerGeo} className='form-control' placeholder="Gelocation" onChange={this.handlerPointerGeo}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formDate">
                                <Form.Label><b>Date</b></Form.Label>
                                <Form.Control type='date' placeholder="Date" onChange={this.handlerPointerDate}/>
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="button" className="float-right" onClick={this.state.pointerButtonValue==='Add'?this.handlePointerSubmit:this.handlePointerUpdateSubmit}>{this.state.pointerButtonValue}</Button>
                    </Form>
                     </div>
                )
    }
}

export default Content