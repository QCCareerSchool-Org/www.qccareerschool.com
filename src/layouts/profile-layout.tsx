/**
 * This is the layout that wraps student profiles
 */
import PropTypes from 'prop-types';
import React from 'react';

import { Index } from './index';

export const ProfileLayout: React.FC = ({ children }) => (
  <Index>
    {children}
  </Index>
);

ProfileLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
