import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { IoMdChatbubbles, IoMdCheckmarkCircle, IoMdHand, IoMdPeople, IoMdShuffle, IoMdTimer } from 'react-icons/io';

import { Background } from '../components/background';
import { PriceBox } from '../components/price-box';
import { SEO } from '../components/seo';
import { DefaultLayout } from '../layouts/default-layout';

const HowItWorksPage: React.FC = () => {
  const iconSize = 160;
  return (
    <DefaultLayout>
      <SEO title="Home" />

      <Background image="home">
        <section id="first-section" className="text-light text-shadow" >
          <div className="my-5">
            <Container>
              <h1>How It Works</h1>
              <p className="lead">QC's Approach to Online Learning</p>
            </Container>
          </div>
        </section>
      </Background>

      <section>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <IoMdTimer size={iconSize} />
              <h3>NO Deadlines or Mandatory Classes</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor vel lacus ac semper. Proin lacinia eget nisi efficitur mollis. Sed consequat malesuada dui vel tristique. In hac habitasse platea dictumst. Fusce rhoncus nunc ac dolor gravida porta eget ac sem. Vivamus nec nisi diam. Maecenas tempor varius ante ac ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque libero nisl, vehicula non ante non, faucibus mollis ante. Donec varius augue quis mattis mollis. Aenean ut urna bibendum tellus mollis sodales. Morbi lacus eros, suscipit nec tellus ut, lacinia pellentesque ex. Vivamus eleifend tortor ut aliquam suscipit.
                </p>
            </Col>
            <Col xs={12} md={6}>
              <IoMdHand size={iconSize} />
              <h3>A hands-on approach</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor vel lacus ac semper. Proin lacinia eget nisi efficitur mollis. Sed consequat malesuada dui vel tristique. In hac habitasse platea dictumst. Fusce rhoncus nunc ac dolor gravida porta eget ac sem. Vivamus nec nisi diam. Maecenas tempor varius ante ac ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque libero nisl, vehicula non ante non, faucibus mollis ante. Donec varius augue quis mattis mollis. Aenean ut urna bibendum tellus mollis sodales. Morbi lacus eros, suscipit nec tellus ut, lacinia pellentesque ex. Vivamus eleifend tortor ut aliquam suscipit.
                </p>
            </Col>
            <Col xs={12} md={6}>
              <IoMdChatbubbles size={iconSize} />
              <h3>100% Personalized Tutor Feedback</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor vel lacus ac semper. Proin lacinia eget nisi efficitur mollis. Sed consequat malesuada dui vel tristique. In hac habitasse platea dictumst. Fusce rhoncus nunc ac dolor gravida porta eget ac sem. Vivamus nec nisi diam. Maecenas tempor varius ante ac ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque libero nisl, vehicula non ante non, faucibus mollis ante. Donec varius augue quis mattis mollis. Aenean ut urna bibendum tellus mollis sodales. Morbi lacus eros, suscipit nec tellus ut, lacinia pellentesque ex. Vivamus eleifend tortor ut aliquam suscipit.
                </p>
            </Col>
            <Col xs={12} md={6}>
              <IoMdPeople size={iconSize} />
              <h3>Unmatched Student Support</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor vel lacus ac semper. Proin lacinia eget nisi efficitur mollis. Sed consequat malesuada dui vel tristique. In hac habitasse platea dictumst. Fusce rhoncus nunc ac dolor gravida porta eget ac sem. Vivamus nec nisi diam. Maecenas tempor varius ante ac ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque libero nisl, vehicula non ante non, faucibus mollis ante. Donec varius augue quis mattis mollis. Aenean ut urna bibendum tellus mollis sodales. Morbi lacus eros, suscipit nec tellus ut, lacinia pellentesque ex. Vivamus eleifend tortor ut aliquam suscipit.
                </p>
            </Col>
            <Col xs={12} md={6}>
              <IoMdShuffle size={iconSize} />
              <h3>Flexible Payment Plans</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor vel lacus ac semper. Proin lacinia eget nisi efficitur mollis. Sed consequat malesuada dui vel tristique. In hac habitasse platea dictumst. Fusce rhoncus nunc ac dolor gravida porta eget ac sem. Vivamus nec nisi diam. Maecenas tempor varius ante ac ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque libero nisl, vehicula non ante non, faucibus mollis ante. Donec varius augue quis mattis mollis. Aenean ut urna bibendum tellus mollis sodales. Morbi lacus eros, suscipit nec tellus ut, lacinia pellentesque ex. Vivamus eleifend tortor ut aliquam suscipit.
                </p>
            </Col>
            <Col xs={12} md={6}>
              <IoMdCheckmarkCircle size={iconSize} />
              <h3>Proven Track Record</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor vel lacus ac semper. Proin lacinia eget nisi efficitur mollis. Sed consequat malesuada dui vel tristique. In hac habitasse platea dictumst. Fusce rhoncus nunc ac dolor gravida porta eget ac sem. Vivamus nec nisi diam. Maecenas tempor varius ante ac ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque libero nisl, vehicula non ante non, faucibus mollis ante. Donec varius augue quis mattis mollis. Aenean ut urna bibendum tellus mollis sodales. Morbi lacus eros, suscipit nec tellus ut, lacinia pellentesque ex. Vivamus eleifend tortor ut aliquam suscipit.
                </p>
            </Col>
          </Row>

        </Container>
      </section>

    </DefaultLayout>
  );
};

export default HowItWorksPage;
