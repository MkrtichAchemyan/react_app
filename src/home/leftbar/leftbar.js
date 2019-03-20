import React, { Component } from 'react'
import './leftbar.css'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from "react-bootstrap/Form";


class LeftBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[],
        }
        this.senduserFields=this.props.changeUserFields
        this.sendpointerFields=this.props.changePointerFields
    }

    componentWillMount() {
        if (this.props.type === 'users') {
            this.setState({
                list: this.props.users
            })
        }
        if (this.props.type === 'pointers') {
            this.setState({
                list: this.props.pointers
            })

        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.type === 'pointers'){
            this.setState({
                list:nextProps.pointers
            })
            console.log(this.state,"kkkkkkkkkkkkk");
        }
    }

    handleDelete = (index)=>{
        this.state.list.splice(index,1)
        this.setState({
            list: this.state.list
        })
    };

    changeUserFields = (index,event)=>{
        let data = this.state.list[index]
        this.senduserFields(data)
    }
    changePointerFields = (index,event)=>{
        let data = this.state.list[index]
        this.sendpointerFields(data)
    }

    filterPointer = (event)=>{
        let pointers = [];
        this.props.pointers.forEach((pointer)=>{
            if ( pointer.userid === +event.target.value) {
                pointers.push(pointer)
                console.log(pointers,"aaaaaaaaaaaaa")
                this.setState({
                    list:pointers
                })
            }
            else if(event.target.value==="All"){
                console.log("bbbbbbbbbbbbbb")
                let list = this.props.pointers
                this.setState({
                    list:list
                })
            }
            else{
                this.setState({
                    list:pointers
                })
            }
        })
    }



    render() {
        const {type} = this.props
        const {users} = this.props
        return(
                 <div className='pt-2'>
                    {type === 'pointers' && <div>
                        <Form.Group as={Col} controlId="formUser">
                            <Form.Control as="select"
                                          onChange={this.filterPointer}
                            >
                                <option value="All">All</option>
                                {users.map((user, index) => {
                                    return <option key={index} value={user.id}>{user.name}</option>;
                                })}
                            </Form.Control>
                        </Form.Group>
                </div>}
                {type === 'users'
                ?this.state.list.map((item, index) =><div key={index.toString()} className='item'>
                            <p><b>Name:</b>{item.name}</p>
                            <p><b>Email:</b>{item.email}</p>
                            <Row className='m-0'>
                                <Col md='9'><Button
                                    variant="danger"
                                    className='float-right'
                                    onClick = {this.handleDelete.bind(this,index)}
                                >Delete</Button></Col>
                                <Col md='3'><Button
                                    variant="success"
                                    className='float-right'
                                    onClick={this.changeUserFields.bind(this,index)}
                                >Update</Button></Col>
                            </Row>
                        </div>
                    )
                :this.state.list.map((item, index) => <div key={index.toString()} className='item'>
                            <p><b>City:</b>{item.city}</p>
                            <p><b>Region:</b>{item.region}</p>
                            <p><b>Country:</b>{item.country}</p>
                            <p><b>Street:</b>{item.street}</p>
                            <p><b>Geo:</b>{item.geo}</p>
                            <p><b>Zip Code:</b>{item.zip}</p>
                            <p><b>Date:</b>{new Date(+item.date).toDateString()}</p>
                            {/*<p><b>User:</b>{users.find((elem)=>elem.id === item.userid).name}</p>*/}
                            <Row className='m-0'>
                                <Col md='9'><Button
                                    variant="danger"
                                    className='float-right'
                                    onClick = {this.handleDelete.bind(this,index)}
                                >Delete</Button></Col>
                                <Col md='3'><Button variant="success"
                                                    className='float-right'
                                                    onClick={this.changePointerFields.bind(this,index)}
                                >Update</Button></Col>
                            </Row>
                        </div>
                )}
            </div>
        )
    }
}

export default LeftBar