import React, { Component } from 'react'
import './leftbar.css'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class LeftBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
        this.updateButtonValue=props.updateButtonValue

    }

    componentWillMount() {
        if (this.props.type === 'users') {
            this.setState({
                list: this.props.users
            })
        }
        else if (this.props.type === 'pointers') {
            this.setState({
                list: this.props.pointers
            })
        }
    }

    handleDelete = (index)=>{
        this.state.list.splice(index,1)
        this.setState({
            list: this.state.list
        })
    }

    handleUpdate = ()=>{
        this.updateButtonValue()
    }

    render() {
        return(
                this.props.type === 'users' ? this.state.list.map((item, index) => {
                return (
                    <div key={index.toString()} className='item'>
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
                                onClick = {this.handleUpdate.bind(this)}
                            >Update</Button></Col>
                        </Row>
                    </div>
                )
            }) : this.state.list.map((item, index) => {
                return (
                    <div key={index.toString()} className='item'>
                        <p><b>City:</b>{item.city}</p>
                        <p><b>Region:</b>{item.region}</p>
                        <p><b>Country:</b>{item.country}</p>
                        <p><b>Street:</b>{item.street}</p>
                        <Row className='m-0'>
                            <Col md='9'><Button
                                variant="danger"
                                className='float-right'
                                onClick = {this.handleDelete.bind(this,index)}
                            >Delete</Button></Col>
                            <Col md='3'><Button variant="success"
                                                className='float-right'
                                                onClick = {this.handleUpdate.bind(this)}
                            >Update</Button></Col>
                        </Row>
                    </div>
                )
            })
        )
    }
}

export default LeftBar