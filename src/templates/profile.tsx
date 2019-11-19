import React from 'react';
import { Link } from 'gatsby';

interface Props {
  pageContext: any;
}

const profileTemplate: React.FC<Props> = ({ pageContext }) => (
  <>
    <h1>Profile</h1>
    <pre>
      {JSON.stringify(pageContext, null, '  ')}
    </pre>
    <Link to="/profiles/1">1</Link>
    <Link to="/profiles/2">2</Link>
  </>
);

export default profileTemplate;
