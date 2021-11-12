import React, { useState } from 'react';
import classes from './Login.module.css';
import { Form, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = (props) => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            props.isAuthed();
        }
        setValidated(true);
    };

    return (
        <div className={classes.Container}>
            <Form className={classes.Form} noValidate validated={validated} onSubmit={handleSubmit}>
                <h3>Login</h3>
                <Form.Group style={{ padding: '0' }} as={Col} controlId="validationCustom01">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter Email"
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
                    <Form.Group>
                    </Form.Group>
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                    />
                </Form.Group>
                <Button variant="info" type="submit">Login</Button>
                <p className="forgot-password text-right">
                    <Link to="/sign-up" style={{color: '#17a2b8'}} >Not registered?</Link>
                </p>
                <p className="forgot-password text-right">
                    <Link to="/general2" style={{color: '#17a2b8'}} >Login as Guest</Link>
                </p>
            </Form>
        </div>
    );
}

export default Login;