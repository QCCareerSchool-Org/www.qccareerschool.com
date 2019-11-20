import { navigate } from 'gatsby';
import React, { useEffect } from 'react';

import { SEO } from '../components/seo';
import { DefaultLayout } from '../layouts/default-layout';

interface Props {
  location: string;
}

const NotFoundPage: React.FC<Props> = ({ location }) => {
  useEffect(() => {
    console.log(window?.location);
    if (window?.location.pathname.startsWith('/profiles/')) {
      const id = window.location.pathname.split('/')[2];
      navigate(`/profile?id=${id}`);
    }
  }, []);
  return (
    <DefaultLayout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </DefaultLayout>
  );
};

export default NotFoundPage;
