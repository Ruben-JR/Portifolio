import Tab from 'react-bootstrap/Tab';
import { Row, Col, Nav } from "react-bootstrap";
import { ProjectCard } from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png"
import agencyImmobiliere from "../assets/img/AgencyImmobiliere.png"

export const Projects = () => {
    const projects = [
        {
            title: "AgencyImmobiliere",
            description: "Web Site development",
            imgUrl: agencyImmobiliere,
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
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" title="Tab One"></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" title="Tab Two"></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" title="Tab Three"></Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">

                                </Tab.Pane>
                                <Tab.Pane eventKey="third">

                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </container>
            <img className="background-image-right" alt="" src={colorSharp2}></img>
        </section>
    )
}
