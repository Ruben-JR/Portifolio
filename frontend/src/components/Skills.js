import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                          <h2>Skills</h2>
                          <h4>Development</h4>
                          <p><div style={{display: "inline-block"}}>
                            <a href="https://www.w3schools.com/html/"><img align="center" alt="Ruben-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" /></a>
                            <a href="https://www.w3schools.com/css/"><img align="center" alt="Ruben-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" /></a>
                            <a href="https://www.javascript.com/"><img align="center" alt="Ruben-JavaScript" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" /></a>
                            <a href="https://www.php.net/"><img align="center" alt="Ruben-php" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" /></a>
                            <a href="https://www.java.com/"><img align="center" alt="Ruben-Java" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" /></a>
                            <a href="https://www.python.org/"><img align="center" alt="Ruben-python" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" /></a>
                          </div></p>

                            <h4>Framework</h4>
                            <p><div style={{display: "inline-block"}}>
                              <a href="https://angular.io/"><img align="center" alt="Ruben-angular" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" /></a>
                              <a href="https://reactjs.org/"><img align="center" alt="Ruben-react" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /></a>
                              <a href="https://material.angular.io/"><img align="center" alt="Ruben-angularMaterial" height="30" width="30" src="https://user-images.githubusercontent.com/75695011/184117409-e7eaba98-4c37-40dc-a52f-f1918d06cbc5.png" /></a>
                              <a href="https://getbootstrap.com/"><img align="center" alt="Ruben-bootstrap" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" /></a>
                              <a href="https://flask.palletsprojects.com/"><img align="center" alt="Ruben-flask" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" /></a>
                              <a href="https://www.odoo.com/"><img align="center" alt="Ruben-odoo" height="30" width="60" src="https://user-images.githubusercontent.com/75695011/184119597-9fbb632f-7220-4363-b012-e148930daa2f.png" /></a>
                            </div></p>

                            <h4>Data bases</h4>
                            <p><div style={{display: "inline-block"}}>
                              <a href="https://www.mysql.com/"><img align="center" alt="Ruben-Mysql" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" /></a>
                              <a href="https://www.postgresql.org/"><img align="center" alt="Ruben-postgresql" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" /></a>
                            </div></p>

                            <h4>Automation</h4>
                            <p><div style={{display: "inline-block"}}>
                              <a href="https://www.docker.com/"><img align="center" alt="Ruben-Docker" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" /></a>
                              <a href="https://www.terraform.io/"><img align="center" alt="Ruben-terraform" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original-wordmark.svg" /></a>
                            </div></p>

                            <h4>Tools</h4>
                            <p><div style={{display: "inline-block"}}>
                              <a href="https://git-scm.com/"><img align="center" alt="Ruben-git" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" /></a>
                              <a href="https://github.com/"><img align="center" alt="Ruben-gitHub" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" /></a>
                            </div></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
