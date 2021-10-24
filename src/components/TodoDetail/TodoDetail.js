import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import falseImg from '../../images/false.png';
import trueImg from '../../images/true.png';

const TodoDetail = () => {
  const [todo, setTodo] = useState({});
  const { id } = useParams();
  const history = useHistory();
  const { completed, title } = todo;

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => setTodo(res.data))
      .catch((err) => toast.error('Something Went Wrong'));
  }, [id]);

  return (
    <Container className='mt-5 pt-5'>
      <Card className='w-25 m-auto'>
        {completed ? (
          <Card.Img variant='top' src={trueImg} />
        ) : (
          <Card.Img variant='top' src={falseImg} />
        )}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button variant='primary' onClick={() => history.push(`/home`)}>
            Go Home
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TodoDetail;
