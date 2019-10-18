import React from 'react';
import Card from 'react-bootstrap/Card';

interface Props {
  img: any;
  title: string;
  body: string;
  buttonText: string;
  buttonLink: string;
}

export const CourseCard: React.FC<Props> = ({ img, title, body, buttonText, buttonLink }) => (
  <Card className="shadow-lg rounded-lg">
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>{body}</Card.Text>
    <a href={buttonLink} className="btn btn-sm btn-secondary">{buttonText}</a>
  </Card.Body>
</Card>
);
