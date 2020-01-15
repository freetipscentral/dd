import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const aboutUs = props => (
  <section id="about" className="py-3">
    <Container>
      <Row>
      <Col md={6}>
        <h1>What We Do</h1>
        <p>My name is Nilendu Bhattacharya.  I am the creator of this AWS Quiztime application.  I have created this quiz to help you and others like you who are interested in learning about AWS and want to practice the quizzes.</p>
        <p>I am a AWS Certified Solutions Architect - Associate and AWS Certified Developer. I have started my cloud journey with AWS and absolutely love AWS services.  I have around two decades of experience in Software development and design.</p>
        <p>Please feel free to contact me on <a href='https://www.linkedin.com/in/nilendu-bhattacharya-75023311/'>linkedIn</a> and say hi.</p>
        </Col>
        <Col md={6}>
            <Image src="images/Nilendu.jpg" roundedCircle />
        </Col>
      </Row>
    </Container>
  </section>
);

export default aboutUs;