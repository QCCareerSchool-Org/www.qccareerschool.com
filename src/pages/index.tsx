import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Background } from '../components/background';
import { SEO } from '../components/seo';
import { DefaultLayout } from '../layouts/default-layout';

import BodyMakeup1 from '../images/backgrounds/body-makeup.jpg';
import MakeupFaculties from '../images/makeup-faculties-applying-eyeliner.jpg';
import StyleFaculties from '../images/style-faculties-shopping-clothes.jpg';
import PetFaculties from '../images/pet-faculties-washing-dog.jpg';
import WellnessFaculties from '../images/writting-wellness-woman-baby.jpg';
import TravelFaculties from '../images/travel-faculties-woman-hiking.jpeg';
import WritingFaculties from '../images/writing-faculties-woman.jpg';
import EventFaculties from '../images/event-faculties-table.jpg';
import DesignFaculties from '../images/design-faculties-modern-living-room.jpg';


const IndexPage = () => (
  <DefaultLayout>
    <SEO title="Home" />

    <Background image="applyingLipGloss">
      <section id="first-section" className="text-light">
        <Container>
          <Col xs="12" md="8" lg="6" className="offset-md-1 mb-4 mb-lg-0">
            <p className="hat">QC Career School</p>
            <h1 className="display-4 text-light; text size">Providing Quality Distance Education for 35 Years and Counting</h1>
          </Col>
        </Container>
      </section>
    </Background>

    <section>
      <Container className="text-center">
        <Col xs="12" md="8" lg="6" className="offset-md-2 offset-lg-3 mb-2 mb-lg-2">
          <h2 className="text-center">Welcome to QC Career School!</h2>
          <p className="lead">Lorem ipsum dolor sit amet</p>
          <p>QC is a leader in online distance education. With eight faculties and courses available around the globe, QC offers affordable and convenient career training in a variety of professional fields.  With QC’s unparalleled student support, professional tutors, and unique online learning system based on direct feedback, you’ll graduate with the skills and confidence you need to start a successful professional career!</p>
        </Col>
      </Container>
    </section>


    <section className="text-dark bg-light">
      <Container>
        <h2>QC Career School Faculties</h2>
        <p className="lead">Lorem ipsum dolor sit amet</p>

        <Row>

          <Col xs="12" md="6" className="mb-4">
            <Card className="shadow-lg rounded">
              <Card.Img variant="top" src={MakeupFaculties} />
              <Card.Body>
                <Card.Title>QC Makeup Academy</Card.Title>
                <Card.Text>
                  Basic and advanced professional makeup artistry courses for all skill levels.
            </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs="12" md="6" className="mb-4">
            <Card className="shadow-lg rounded">
              <Card.Img variant="top" src={EventFaculties}/>
              <Card.Body>
                <Card.Title>QC Event School</Card.Title>
                <Card.Text>
                  Training event planning professionals to launch their own business. Courses include party planning, wedding planning, corporate event planning and more.
            </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs="12" md="6" className="mb-4">
            <Card>
              <Card.Img variant="top" src={DesignFaculties} />
              <Card.Body>
                <Card.Title>QC Design School</Card.Title>
                <Card.Text>
                  Offering courses in all areas of home design from interior decorating to professional organizing.
            </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs="12" md="6" className="mb-4">
            <Card>
              <Card.Img variant="top" src={PetFaculties} />
              <Card.Body>
                <Card.Title>QC Pet Studies</Card.Title>
                <Card.Text>
                  Training dog grooming professionals from the comfort of home through innovative interactive tutorials and assignments.
            </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs="12" md="6" className="mb-4">
            <Card>
              <Card.Img variant="top" src={BodyMakeup1} />
              <Card.Body>
                <Card.Title>QC Wellness Studies</Card.Title>
                <Card.Text>
                  Offering professional certification courses in a number of wellness industries, from sleep consulting to home health aides.
            </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs="12" md="6" className="mb-4">
            <Card>
              <Card.Img variant="top" src={BodyMakeup1} />
              <Card.Body>
                <Card.Title>QC Style Academy</Card.Title>
                <Card.Text>
                  Training event planning professionals to launch their own business. Courses include party planning, wedding planning, corporate event planning and more.
            </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs="12" md="6" className="mb-4 mb-md-0">
            <Card>
              <Card.Img variant="top" src={BodyMakeup1} />
              <Card.Body>
                <Card.Title>QC Design School</Card.Title>
                <Card.Text>
                  Offering courses in all areas of home design from interior decorating to professional organizing.
            </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs="12" md="6" className="mb-4 mb-md-0">
            <Card className="shadow-lg rounded">
              <Card.Img variant="top" src={PetFaculties} />
              <Card.Body>
                <Card.Title>QC Pet Studies</Card.Title>
                <Card.Text>
                  Training dog grooming professionals from the comfort of home through innovative interactive tutorials and assignments.
            </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </section>



    <section className="text-light bg-dark">
      <Container>
        <h2 className="text-center">Light on Dark</h2>
        <p className="lead; text-center">Lorem ipsum dolor sit amet</p>
        <Row>
          <Col>
            <h3>Full Course Catalog</h3>
            <p>View a full list and description of training programs and courses offered by QC Career School</p>
            <Button className="caps">Normal Button</Button>
          </Col>
          <Col>
            <h3>Admissions</h3>
            <p>Interested in enrolling with QC Career School? Find out the admissions requirements and enroll here!</p>
            <Button className="caps">Normal Button</Button>
          </Col>
          <Col>
            <h3>Find Professionals</h3>
            <p>Hire a QC graduate here! Search by profession and location</p>
            <Button className="caps">Normal Button</Button>
          </Col>
        </Row>
      </Container>
    </section>

    

  </DefaultLayout>
);

export default IndexPage;
