import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import falseImg from '../../images/false.png';
import trueImg from '../../images/true.png';

const SingleTodo = ({ todo: { title, userId, completed, id } }) => {
  const history = useHistory();

  return (
    <Col lg={3} md={6} sm={12} xs={12}>
      <Card>
        {completed ? (
          <Card.Img variant='top' src={trueImg} />
        ) : (
          <Card.Img variant='top' src={falseImg} />
        )}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>User ID: {userId}</Card.Text>
          <Button variant='primary' onClick={() => history.push(`/todo/${id}`)}>
            See Detail
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleTodo;
