import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import Corporate from '../images/admissions-corporate.jpg';
import PrivateGroup from '../images/admissions-private-group.jpg';

import { DefaultLayout } from '../layouts/default-layout';

const AdmissionsPage: React.FC = () => {

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color,
        backgroundColor: color,
        height: 1,
            }} />
      );

  const GradientBackground = styled.div`
  background: linear-gradient(35deg, #011037, #130820);
  height: 300px;
  margin-bottom: -48px;
  `;

  const ButtonAlignment = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };

  const FooterTextStyle = {
        color: 'white',
        textAlign: 'center',
      };

  const ImageStyle = {
        width: 572,
        height: 381,
        marginTop: 40,
        marginBottom: 40,
      };

  return (
        <DefaultLayout>
          <section id="first-section">
              <Container>
              <h1>Admissions</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur </p>
              <br />
              <br />
              <br />
              <br />
              <h2>Admissions For Individuals</h2>
                <p>If you would like to enroll in one of QC’s courses, you can do so at the faculties’ online enrollment pages:</p>
                  <ul>
                    <li><a href="https://www.qcmakeupacademy.com/" target="_blank" rel="noopener noreferrer">Enroll with QC Makeup Academy</a></li>
                    <li><a href="https://www.qceventplanning.com/" target="_blank" rel="noopener noreferrer">Enroll with QC Event School</a></li>
                    <li><a href="https://www.qcdesignschool.com/" target="_blank" rel="noopener noreferrer">Enroll with QC Design School</a></li>
                    <li><a href="https://www.doggroomingcourse.com/" target="_blank" rel="noopener noreferrer">Enroll with QC Pet Studies</a></li>
                    <li><a href="https://www.qcwellnessstudies.com/" target="_blank" rel="noopener noreferrer">Enroll with QC Wellness Studies</a></li>
                    <li><a href="https://www.winghill.com/" target="_blank" rel="noopener noreferrer">Enroll with Winghill School of Writing</a></li>
                    <li><a href="https://www.qcstyleacademy.com/" target="_blank" rel="noopener noreferrer">Enroll with QC Style Academy</a></li>
                    <li><a href="https://www.qctravelschool.com/" target="_blank" rel="noopener noreferrer">Enroll with QC Travel School</a></li>
                  </ul>
            </Container>
          </section>

          <ColoredLine color="#F6F7FB" />

          <section>
              <Container>
                <Row>
                    <Col xs={12} md={6}>
                      <h3>Private Group Admissions & Discounts</h3>
                        <p>If you would like to enroll with QC along with a friend, colleague or family member, you can take advantage of QC’s group admissions discount! Any group of two or more enrolling in any course (you don’t all have to enroll in the same course!) will receive a 25% discount for each individual enrolling. Simply call the school to enroll; this is only available for phone enrollments.  Note that this discount cannot be combined with other offers or promotions.
                        </p>
                          <div style={ButtonAlignment}>
                            <Button href="/contact" size="lg" variant="secondary">Contact QC</Button>
                          </div>
                      </Col>
                    <Col xs={12} md={6}>
                      <img src={PrivateGroup} alt="Private Group Discounts" style={ImageStyle} />
                    </Col>
                </Row>
              </Container>

              <ColoredLine color="#F6F7FB" />

              <Container>
                <Row>
                  <Col xs={12} md={6}>
                    <h3>Corporate Admissions</h3>
                      <p>Over the years QC has worked with corporations to adapt course content, assignments and tuition/billing practices to corporate groups with specific goals for their employees. If you are a member of a corporation looking to train your employees via a QC course, please contact us to speak with a business development representative who will be happy to prepare a proposal that will suit your needs.           </p>
                        <div style={ButtonAlignment}>
                          <Button href="/contact" size="lg" variant="secondary">Contact QC</Button>
                        </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <img src={Corporate} alt="Corporate Admissions" style={ImageStyle} />
                  </Col>
                </Row>
              </Container>
          </section>

          <section >
            <GradientBackground>
              <Container>
                <Row>
                  <Col>
                    <h3 style={FooterTextStyle}>Have Questions? We are here to help!</h3>
                      <p style={FooterTextStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum sagittis augue. Praesent interdum odio a justo tincidunt, at scelerisque urna molestie. Ut euismod venenatis faucibus. Vestibulum auctor sollicitudin faucibus. In hac habitasse platea dictumst. Duis efficitur lectus a nisi tristique, id sollicitudin ex porta. In quis cursus urna. Sed fringilla ipsum vitae massa fermentum accumsan. Morbi a tincidunt justo. Phasellus aliquet at sem non cursus. Fusce risus arcu, imperdiet et iaculis in, vehicula in nulla. Aenean mauris urna, venenatis a egestas in, interdum vel ante. Morbi placerat malesuada malesuada. Duis vel nibh id urna pulvinar dignissim vel et lorem.
                      </p>
                      <div style={ButtonAlignment}>
                        <Button href="/contact" size="lg" variant="secondary">Contact Us</Button>
                      </div>
                    </Col>
                </Row>
              </Container>
            </GradientBackground>
          </section>

        </DefaultLayout>
      );
    };

export default AdmissionsPage;
