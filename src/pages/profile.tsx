import axios from 'axios';
import { Link, navigate } from 'gatsby';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { bbCodeParser } from '../bbcode-parser';
import { SEO } from '../components/seo';
import { ProfileLayout } from '../layouts/profile-layout';
import { Profile } from '../models/profile';

interface Props {
  location: any;
}

const ProfilePage: React.FC<Props> = ({ location }) => {

  const [ profile, setProfile ] = useState<Profile>();
  const [ error, setError ] = useState(false);

  useEffect(() => {
    const parsed = queryString.parse(location.search);
    if (typeof parsed.id !== 'string') {
      return;
    }
    const id = parseInt(parsed.id, 10);

    // fetch the profile data
    (async () => {
      const url = `https://www.qccareerschool.com/profiles/?id=${id}`;
      try {
        const response = await axios.get<Profile>(url);
        setProfile(response.data);
      } catch (err) {
        navigate('/404/');
        // setError(true);
      }
    })();
  }, []);

  function getName() {
    if (!profile) {
      return null;
    }
    if (profile.company) {
      return profile.company;
    }
    return profile.firstName + ' ' + profile.lastName;
  }

  if (error) {
    return <Alert variant="danger">Error</Alert>;
  }

  if (!profile) {
    return null;
  }

  return (
    <ProfileLayout>
      <SEO title="Professional Profile" link={[ { rel: 'canonical', href: `/profiles/${profile.id}` }]} />

      <Container id="wrapper" className="my-sm-4">

        <main>
          <Link to="/">
            <img id="logo" src="/profile/logo-inverse.svg" alt="QC Career School" />
          </Link>
          <hr />

          <Row>

            <Col xs={12} md={6} xl={8} className="text-center text-md-left">
              <h1 id="mainHeader">{getName()}</h1>
              {profile.professions.length
                ? <h5 className="font-weight-light">{profile.professions.join(', ')}</h5>
                : null
              }
            </Col>

            <Col xs={12} md={6} xl={4} className="mt-4 mt-md-0 text-center text-md-right">
              <a href="https://www.facebook.com/MakeupByElenaAtAvalonDesigns?ref="><button className="btn btn-primary">My Website</button></a>
              <a href="portfolio/?id=27763"><button className="btn btn-primary">View Portfolio</button></a>
              <div className="my-4">
                <a target="_blank" href="https://instagram.com/emziepooh"><img src="/images/trans.png" style={{ marginRight: 5 }} className="sprite-social-32-instagram" /></a>
                <a target="_blank" href="https://www.facebook.com/MakeupByElenaAtAvalonDesigns"><img src="/images/trans.png" style={{ marginRight: 5 }} className="sprite-social-32-facebook" /></a>
              </div>
            </Col>

          </Row>

          <Row className="mt-4">

            <Col xs={12} md={4} className="text-center text-md-left mb-4" style={{ overflow: 'hidden' }}>
              <img className="img-fluid my-2" src={`https://studentcenter.qccareerschool.com/view-portrait.php?id=${profile.id}`} alt="Elena Martinez MIMP" />
              <br />
              <strong>{profile.city}</strong>
              <br />
              {profile.phoneNumber}
              <br />
              <a href="/cdn-cgi/l/email-protection#89afaab8b8bfb2afaab8b9bdb2afaab8b9b8b2afaab0beb2afaab8b8bdb2afaab8b8bfb2afaab8b8b8b2afaab8b9bbb2afaab0b1b2afaab8b9b8b2afaab0beb2afaab8b8beb2afaab8b8bfb2afaab8bbb8b2afaabfbdb2afaab8bbb8b2afaab8b9b0b2afaab0beb2afaab8b9bcb2afaab8b9b1b2afaabdbfb2afaab0b0b2afaab8b8b8b2afaab8b9b0b2">&#116;&#104;&#101;&#97;&#114;&#116;&#111;&#102;&#98;&#101;&#97;&#117;&#116;&#121;&#64;&#121;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a>
              <br />
            </Col>

            <Col xs={12} md={8} style={{ overflow: 'hidden' }}>

              {profile.slogan
                ? <h2 className="h4" id="tagline" dangerouslySetInnerHTML={{ __html: bbCodeParser.parse(nl2br(profile.slogan)) }} />
                : null
              }

              {profile.intro
                ? <p dangerouslySetInnerHTML={{ __html: bbCodeParser.parse(nl2br(profile.intro)) }} />
                : null
              }

              {profile.additional
                ? <p dangerouslySetInnerHTML={{ __html: bbCodeParser.parse(nl2br(profile.additional)) }} />
                : null
              }

              {profile.services
                ? (
                  <>
                    <h2>Services</h2>
                    <p dangerouslySetInnerHTML={{ __html: bbCodeParser.parse(nl2br(profile.services)) }} />
                  </>
                )
                : null
              }
            </Col>
          </Row>
        </main>

      </Container>

    </ProfileLayout>
  );
};

export default ProfilePage;

function nl2br(str?: string | null, xhtml?: boolean) {
  if (typeof str === 'undefined' || str === null) {
    return '';
  }
  const breakTag = (xhtml || typeof xhtml === 'undefined') ? '<br />' : '<br>';
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}
