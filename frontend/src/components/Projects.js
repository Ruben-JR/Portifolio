import Tab from 'react-bootstrap/Tab';
import { Row, Col, Nav } from "react-bootstrap";

export const Projects = () => {
    const projects = [
        {
            title: "AgencyImmobiliere",
            description: "Web Site development",
            // imgUrl:
        }
    ];

    return (
        <section className="project" id="project">
            <container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            These projects were done with the aim of learning more
                            and increasing my level of knowledge in IT and to practice
                            more coding to become a better developer
                        </p>
                        <Tab.Container defaultActiveKey="first" id="projects-tabs" className="mb-3">
                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" title="Tab one"></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" title="Tab two"></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" title="Tab three"></Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="fist">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <p>(project.title)</p>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fist">

                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </container>
        </section>
    )
}
