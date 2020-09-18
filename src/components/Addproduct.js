import React, { Component } from 'react'
import {Button, Modal, Form} from 'react-bootstrap';
import './Addproduct.css';

export default class Addproduct extends Component {
    constructor(){
        super()
        this.state={
            show:false,
            data:'',
        }
    }
    handleModal = () =>{
        this.setState({show:!this.state.show})
    }

    handleEvent = (event)=>{
        this.setState({
            data:event.target.value
        })

    }
    render() {
        return (
            <div>
                <Button className='btncol' onClick={this.handleModal}>Add Products</Button>
                <Modal show={this.state.show} onHide={this.handleModal}>
                    <Modal.Header closeButton>Add Products</Modal.Header>
                    <Modal.Body>
                        <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Product Category</Form.Label>
                            <Form.Control as="select">
                            <option>select</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Product Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Product Title  "onChange={this.handleEvent} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter Price" />
                        </Form.Group>
                        <Form.Check 
                            type='checkbox'
                            label='Top Product'
                        /><br></br>
                        <Form.Label>Upload Product Image</Form.Label>
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" />
                        </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleModal}>
                            Close Modal
                        </Button>
                        <Button >
                            Submit Modal
                        </Button>
                        <h1>{this.state.data}</h1>
                    </Modal.Footer>
                </Modal>
                    
                
            </div>
        )
    }   
}
