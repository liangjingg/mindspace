import React, { useState } from "react";
import classes from './Login.module.css';
import { Form, Button, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = (props) => {
    
    const [validated, setValidated] = useState(false);

    const [show, setShow] = useState(false);

    const proceed = () => {
        setShow(false);
        window.location = '/sign-in';
    }
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            event.preventDefault();
            handleShow();
            // props.isRegister();
        }
        setValidated(true);
    };

    return (
    <div className={classes.Container}>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Registration successful!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Please proceed to the login page.</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="primary" onClick={proceed}>
                Proceed
            </Button>
            </Modal.Footer>
        </Modal>

        <Form className={classes.Form} noValidate validated={validated} onSubmit={handleSubmit}>
            <h3>Register</h3>
            <Form.Group style={{ padding: '0' }} as={Col} controlId="validationCustom01">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="First Name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group style={{ padding: '0' }} as={Col} controlId="validationCustom01">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Last Name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group style={{ padding: '0' }} as={Col} controlId="validationCustom01">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter Email"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group style={{ padding: '0' }} as={Col} controlId="validationCustom01">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="DD/MM/YYYY"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group style={{ padding: '0' }} as={Col} controlId="validationCustom02">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Button variant="info" type="submit">Register</Button>
            <p className="forgot-password text-right">
                Already registered <Link to="/sign-in" style={{color: '#17a2b8'}} >login?</Link>
            </p>
        </Form>
    </div>
    );
}

export default Register;