import React from 'react';
import { Alert, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

export const Newsletter = ({onValidated, status, message}) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (status === 'sucess') {
            clearFields();
        }
    }, [status]);

    const handleSubmit = (e) => {
        e.preventDefault();
        email && email.indexOf("e") > -1 &&
        onValidated({
            EMAIL: email
        })
    }

    const clearFields = () => {
        setEmail('');
    }

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>subscribe to our newsletter</h3>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>}
                        {status === 'sucess' && <Alert variant="sucess">{message}</Alert>}
                    </Col>
                    <Col md={6} xl={12}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email address" />
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}
