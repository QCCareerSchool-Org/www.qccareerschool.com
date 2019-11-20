import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
  image: string;
  overlay?: any[];
}

export const Background: React.FC<Props> = ({ children, style, className, image, overlay = [] }) => (
  <StaticQuery
    query={graphql`
      query {
        home: file(relativePath: { eq: "backgrounds/hero-home.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <BackgroundImage fluid={[ ...overlay, data[image].childImageSharp.fluid ]} backgroundColor={`#040e18`} style={style} className={className}>
        {children}
      </BackgroundImage>
    )}
  />
);
