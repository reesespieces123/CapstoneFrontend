import React, { useState, useEffect } from "react";
import {Navbar,Container,Nav,NavDropdown, Row, Col,Image,Button,Card} from 'react-bootstrap';
import "../styles/Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserService from "../reducers/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <>
      <div className="App">

        <main>
          <Container>
            <Row className="px-4 my-5">
              <Col sm={7}>
                <Image
                  src="https://th.bing.com/th?id=OIP.41CshMURszT-w21LNxneWAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                  fluid
                  rounded
                  className=""
                />
              </Col>
              <Col sm={5}>
                <h1 class="font-weigh-light">The best software developers</h1>
                <p class="mt-4">
                  This a dummy page with dummy info it will not look like this
                  in the end.This a dummy page with dummy info it will not look
                  like this in the end.This a dummy page with dummy info it will
                  not look like this in the end.This a dummy page with dummy
                  info it will not look like this in the end.This a dummy page
                  with dummy info it will not look like this in the end.This a
                  dummy page with dummy info it will not look like this in the
                  end.{" "}
                </p>
                <Button variant="outline-primary">Why work for us</Button>
              </Col>
            </Row>
            <Row>
              <Card className="text-center bg-secondary text-white my-5 py-4">
                <Card.Body>
                  Welcome to ADP! We'd love to have you join our team.
                </Card.Body>
              </Card>
            </Row>
            <Row>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://th.bing.com/th/id/OIP.6UqQMbvuo9JxM3lNru1_QAHaE5?w=203&h=134&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  />
                  <Card.Body>
                    <Card.Title>Employment Services </Card.Title>
                    <Card.Text>
                      Wondering what you would need to join the team? Apply
                      today and a representative will reach out to you.
                    </Card.Text>
                    <Button variant="primary">Join the team</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://th.bing.com/th?id=OIP.eePf1fyIMpjt8iFooJSGfwHaFD&w=302&h=206&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                  />
                  <Card.Body>
                    <Card.Title>ADP Backstory</Card.Title>
                    <Card.Text>
                      ADP was founded in 1949, by Henry Taub, his brother Joe
                      Taub and Frank Lautenberg. ADP has a wonderful backstory;
                      Click below for more info.
                    </Card.Text>
                    <Button variant="primary">History Bits</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://th.bing.com/th?id=OIP.p-H5BtoBkWqaB1nHtAtlugHaC4&w=350&h=136&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                  />
                  <Card.Body>
                    <Card.Title>Different Careers at ADP</Card.Title>
                    <Card.Text>
                      Here at ADP, we encourage development and growth. We have
                      a wide range of different careers, including entry level
                      jobs. Click Below if interested.
                    </Card.Text>
                    <Button variant="primary">Careers</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    
    </>
  );
};

export default Home;
