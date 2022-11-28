import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import colorsharp from "../assets/img/color-sharp.png";

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

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <h4>Development</h4>
              <p><div>
                <a href="https://www.w3schools.com/html/"><img alt="Ruben-HTML" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" /></a>
                <a href="https://www.w3schools.com/css/"><img alt="Ruben-CSS" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" /></a>
                <a href="https://www.javascript.com/"><img alt="Ruben-JavaScript" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" /></a>
                <a href="https://www.php.net/"><img alt="Ruben-php" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" /></a>
                <a href="https://www.java.com/"><img alt="Ruben-Java" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" /></a>
                <a href="https://www.python.org/"><img alt="Ruben-python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" /></a>
              </div></p>

              <h4>Framework</h4>
              <p><div>
                <a href="https://angular.io/"><img alt="Ruben-angular" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" /></a>
                <a href="https://reactjs.org/"><img alt="Ruben-react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /></a>
                <a href="https://material.angular.io/"><img alt="Ruben-angularMaterial" src="https://user-images.githubusercontent.com/75695011/184117409-e7eaba98-4c37-40dc-a52f-f1918d06cbc5.png" /></a>
                <a href="https://getbootstrap.com/"><img alt="Ruben-bootstrap" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" /></a>
                <a href="https://flask.palletsprojects.com/"><img alt="Ruben-flask" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" /></a>
                <a href="https://www.odoo.com/"><img alt="Ruben-odoo" src="https://user-images.githubusercontent.com/75695011/184119597-9fbb632f-7220-4363-b012-e148930daa2f.png" /></a>
              </div></p>

              <h4>Data bases</h4>
              <p><div>
                <a href="https://www.mysql.com/"><img alt="Ruben-Mysql" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" /></a>
                <a href="https://www.postgresql.org/"><img alt="Ruben-postgresql" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" /></a>
              </div></p>

              <h4>Automation</h4>
              <p><div>
                <a href="https://www.docker.com/"><img alt="Ruben-Docker" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" /></a>
                <a href="https://www.terraform.io/"><img alt="Ruben-terraform" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original-wordmark.svg" /></a>
              </div></p>

              <h4>Tools</h4>
              <p><div>
                <a href="https://git-scm.com/"><img alt="Ruben-git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" /></a>
                <a href="https://github.com/"><img alt="Ruben-gitHub" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" /></a>
              </div></p>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" alt="colorSharp" src={colorsharp} />
    </section>
  )
}
