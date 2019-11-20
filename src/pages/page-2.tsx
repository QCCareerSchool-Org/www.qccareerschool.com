import { Link } from 'gatsby';
import React from 'react';

import { SEO } from '../components/seo';
import { DefaultLayout } from '../layouts/default-layout';

const SecondPage = () => (
  <DefaultLayout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </DefaultLayout>
);

export default SecondPage;
