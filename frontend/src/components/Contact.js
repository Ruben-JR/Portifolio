import { json } from "express";
import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttontext, setButtonText] = useState('send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-type": "Application/json;chaset=UTF-8",
            },
            body: json.stringify(formDetails)
        });
        setButtonText("Send");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200){
            setStatus({sucess: true, message: "Message sent sucessfully"});
        }
        else{
            setStatus({sucess: false, message: "Something went wrong, please try again later"});
        }
    };

    return (
        <section className="contatc" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img alt="contact me" src={contactImg} />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handlesubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <Input type="text" value={formDetails.firstName} placeholder="First name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <Input type="text" value={formDetails.lastName} placeholder="Last name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <Input type="email" value={formDetails.email} placeholder="Email address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <Input type="tel" value={formDetails.phone} placeholder="Phone" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type="submit"><span>{buttontext}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p classname={status.sucess === false ? "danger" : "sucess"}>status.message</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
