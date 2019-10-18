import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Background } from '../components/background';
import { SEO } from '../components/seo';
import { DefaultLayout } from '../layouts/default-layout';

import MakeupFaculties from '../images/makeup-faculties-applying-eyeliner.jpg';
import StyleFaculties from '../images/style-faculties-shopping-clothes.jpg';
import PetFaculties from '../images/pet-faculties-washing-dog.jpg';
import WellnessFaculties from '../images/writing-wellness-woman-baby.jpg';
import WritingFaculties from '../images/writing-faculties-woman.jpg';
import EventFaculties from '../images/event-faculties-table.jpg';
import DesignFaculties from '../images/design-faculties-modern-living-room.jpg';
import TravelFaculties from '../images/travel-faculties-woman-hiking.jpg';
import Emblem from '../images/35-year-emblem.png';


import { CourseCard } from '../components/course-card';
import { Bar } from '../components/bar';


const IndexPage = () => (
  <DefaultLayout>
    <SEO title="Home" />

    <Background image="home" overlay={[ 'linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45))' ]}>
      <section id="first-section" className="text-light">
        <div className="my-5">
          <Container>
            <Col xs="12" md="10" lg="7" className="offset-md-1 mb-lg-0">
              <p className="hat">QC Career School</p>
              <h1 className="text-shadow">Providing Quality Distance Education for 35 Years and Counting</h1>
              <Bar className="text-secondary" />
            </Col>
          </Container>
        </div>
      </section>
    </Background>

    <section>
      <Container className="text-center">
        <Col xs="12" md="8" lg="8" className="offset-md-2 offset-lg-2 mb-2 mb-lg-2 mt-4">
          <img src={Emblem} alt="emblem" className="mb-4" />
          <h2 className="text-center">Welcome to QC Career School!</h2>
          <p className="lead">Lorem ipsum dolor sit amet</p>
          <p>QC is a leader in online distance education. With eight faculties and courses available around the globe, QC offers affordable and convenient career training in a variety of professional fields.  With QC’s unparalleled student support, professional tutors, and unique online learning system based on direct feedback, you’ll graduate with the skills and confidence you need to start a successful professional career!</p>
        </Col>
      </Container>
    </section>


    <section className="text-dark bg-light mt-5">
      <Container>
        <h2>QC Career School Faculties</h2>
        <p className="lead">Lorem ipsum dolor sit amet</p>
        <Bar className="text-primary mb-5" />

        <Row>

          <Col xs="12" md="6" className="mb-4 d-flex">
            <CourseCard
              img={MakeupFaculties}
              title="QC Makeup Academy"
              body="Basic and advanced professional makeup artistry courses for all skill levels."
              buttonText="LEARN MORE"
              buttonLink="http://gooogle.com"
            />
          </Col>

          <Col xs="12" md="6" className="mb-4 d-flex">
            <CourseCard
              img={EventFaculties}
              title="QC Event School "
              body="Training event planning professionals to launch their own business. Courses include party planning, wedding planning, corporate event planning and more."
              buttonText="LEARN MORE"
              buttonLink="http://gooogle.com"
            />
          </Col>

          <Col xs="12" md="6" className="mb-4 d-flex">
            <CourseCard
              img={DesignFaculties}
              title="QC Design School "
              body=" Offering courses in all areas of home design from interior decorating to professional organizing."
              buttonText="LEARN MORE"
              buttonLink="http://gooogle.com"
            />
          </Col>

          <Col xs="12" md="6" className="mb-4 d-flex">
            <CourseCard
              img={PetFaculties}
              title="QC Pet Studies "
              body="Training dog grooming professionals from the comfort of home through innovative interactive tutorials and assignments."
              buttonText="LEARN MORE"
              buttonLink="http://gooogle.com"
            />
          </Col>

          <Col xs="12" md="6" className="mb-4 d-flex">
            <CourseCard
              img={WellnessFaculties}
              title="QC Wellness Studies "
              body="Offering professional certification courses in a number of wellness industries, from sleep consulting to home health aides."
              buttonText="LEARN MORE"
              buttonLink="http://gooogle.com"
            />
          </Col>

          <Col xs="12" md="6" className="mb-4 d-flex">
            <CourseCard
              img={StyleFaculties}
              title="QC Style Academy"
              body="Partnered with QC Makeup Academy to offer courses to beauty professionals expanding into personal styling."
              buttonText="LEARN MORE"
              buttonLink="http://gooogle.com"
            />
          </Col>

          <Col xs="12" md="6" className="mb-4 d-flex">
            <CourseCard
              img={TravelFaculties}
              title="QC Travel School "
              body="Training professional travel agents in an ever competing marketplace."
              buttonText="LEARN MORE"
              buttonLink="http://gooogle.com"
            />
          </Col>

          <Col xs="12" md="6" className="mb-4 d-flex">
            <CourseCard
              img={WritingFaculties}
              title="Winghill Writing School"
              body="The school that started it all! Winghill offers a myriad of writing courses from novel writing to family history writing and much more."
              buttonText="LEARN MORE"
              buttonLink="http://gooogle.com"
            />
          </Col>

        </Row>

      </Container>
    </section>

    <section className="text-light bg-dark">
      <Container className="my-5">
        <Row>
          <Col xs="12" md="4" className="mb-5">
            <h3 className="mb-3">Full Course<br></br> Catalog</h3>
            <p>View a full list and description of training programs and courses offered by QC Career School</p>
            <Button size="sm" className="caps">Normal Button</Button>
          </Col>
          <Col xs="12" md="4" className="mb-5">
            <h3 className="mb-3">Admission<br></br> Requirements</h3>
            <p>Interested in enrolling with QC Career School? Find out the admissions requirements and enroll here!</p>
            <Button size="sm" className="caps" mb-4>Normal Button</Button>
          </Col>
          <Col xs="12" md="4" className="mb-5">
            <h3 className="mb-3">Find<br></br> Professionals</h3>
            <p>Hire a QC graduate here! Search by profession and location</p>
            <Button size="sm" className="caps" mb-4>Normal Button</Button>
          </Col>
        </Row>
      </Container>
    </section>

  </DefaultLayout>
);

export default IndexPage;
