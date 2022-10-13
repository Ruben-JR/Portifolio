import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { headerImg } from "../assets/img/header-img.svg";

export const Banner = () => {
    const [looNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Linguagens de programação", "Base de dados", "Automatização"];
    const [text, settext] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {

    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portifolio</span>
                        <h1>{`Hi i'm Ruben`}<span className="wrap">Full stack developer</span></h1>
                        <p>
                            Student of systems engineering and informatics.
                            Junior full stack developer that loves apply his knowledge to solve problems,
                            create amazing products.
                        </p>
                        <button onClick={() => console.log('Connect')}>Let's connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
