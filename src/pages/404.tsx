import React from 'react';

import { SEO } from '../components/seo';
import { DefaultLayout } from '../layouts/default-layout';

interface Props {
  location: string;
}

const NotFoundPage: React.FC<Props> = () => {
  return (
    <DefaultLayout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </DefaultLayout>
  );
};

export default NotFoundPage;
