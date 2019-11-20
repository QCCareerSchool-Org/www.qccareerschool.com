import queryString from 'query-string';
import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import { Background } from '../components/background';
import { ProfileLayout } from '../layouts/profile-layout';

interface Props {
  location: any;
}

const ProfilePage: React.FC<Props> = ({ location }) => {
  const [ id, setId ] = useState<number>();

  useEffect(() => {
    const parsed = queryString.parse(location.search);
    if (typeof parsed.id === 'string') {
      setId(parseInt(parsed.id, 10));
    }
  }, []);

  return (
    <ProfileLayout>

      <Background image="home">
        <section id="first-section">
          <div className="my-5">
            <Container>
              <h1>Dynamic Profile for #{id}</h1>
            </Container>
          </div>
        </section>
      </Background>

      <main>
        <a href="https://www.qccareerschool.com/">
          <img id="logo" src="/profile/logo-inverse.svg" alt="QC Career School" />
        </a>
        <hr />
        <div className="row">
          <div className="col-12 col-md-6 col-xl-8 text-center text-md-left">
            <h1 id="mainHeader">Elena Martinez MIMP</h1>
            <h5 className="font-weight-light">Makeup Artist</h5>
          </div>
          <div className="col-12 col-md-6 col-xl-4 mt-4 mt-md-0 text-center text-md-right">
            <a href="https://www.facebook.com/MakeupByElenaAtAvalonDesigns?ref="><button className="btn btn-primary">My Website</button></a>
            <a href="portfolio/?id=27763"><button className="btn btn-primary">View Portfolio</button></a>
            <div className="my-4">
              <a target="_blank" href="https://instagram.com/emziepooh"><img src="/images/trans.png" style={{ marginRight: 5 }} className="sprite-social-32-instagram" /></a>
              <a target="_blank" href="https://www.facebook.com/MakeupByElenaAtAvalonDesigns"><img src="/images/trans.png" style={{ marginRight: 5 }} className="sprite-social-32-facebook" /></a>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-md-4 text-center text-md-left mb-4" style={{ overflow: 'hidden' }}>
            <img className="img-fluid my-2" src="/viewportrait.php?id=27763" alt="Elena Martinez MIMP" />
            <br />
            <strong>Keller, TX</strong>
            <br />
            817-501-9277
            <br />
            <a href="/cdn-cgi/l/email-protection#89afaab8b8bfb2afaab8b9bdb2afaab8b9b8b2afaab0beb2afaab8b8bdb2afaab8b8bfb2afaab8b8b8b2afaab8b9bbb2afaab0b1b2afaab8b9b8b2afaab0beb2afaab8b8beb2afaab8b8bfb2afaab8bbb8b2afaabfbdb2afaab8bbb8b2afaab8b9b0b2afaab0beb2afaab8b9bcb2afaab8b9b1b2afaabdbfb2afaab0b0b2afaab8b8b8b2afaab8b9b0b2">&#116;&#104;&#101;&#97;&#114;&#116;&#111;&#102;&#98;&#101;&#97;&#117;&#116;&#121;&#64;&#121;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a>
            <br />
          </div>
          <div className="col-12 col-md-8" style={{ overflow: 'hidden' }}>
            <h2 className="h4" id="tagline">THE ART OF BEAUTY</h2>
            <p>My name is Elena Martinez. I am a graduate from QC Makeup Academy.<br />
              Master International Makeup Professional. <br />
              I love to make people feel, and look their absolute best!</p>
            <p>All my life I've had a passion for cosmetics. I love applying it, and creating new looks. I am willing to take the extra mile to make you look fabulous. I am always up for a challenge and always learning new techniques.</p>
            <p>I am a freelancer makeup artist in a salon. <br />
              I am willing to work in an environment for photographers, modeling agencies, runway models, client homes, churches, convention centers, banquet halls, golf and country clubs, celebrities, all studios,  night clubs, and backstage.</p>
            <h2 className="h4">Services</h2>
            <p>Neutral/Natural $45<br />
              Dramatic (with lashes) $55<br />
              Retouch Makeup $15<br />
              Male grooming application $25<br />
              Bridal Makeup (with lashes) $65 <br />
              Travelling fee not included. <br />
              Bridal Party Bookings- call for information.<br />
              Consultation services-fee varies.<br />
              Photography Application $50<br />
              Theatrical/Fantasy makeup- call for information.</p>
            <p>Adding Lashes to a service or buying lashes $5<br />
              Eyeshadow Palettes $20-$40<br />
              Cosmetics $14-50<br />
              Brush sets $30-50<br />
              Other makeup supplies $5and up.</p>
          </div>
        </div>
      </main>

    </ProfileLayout>
  );
};

export default ProfilePage;
