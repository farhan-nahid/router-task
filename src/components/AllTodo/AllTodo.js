import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';
import SingleTodo from '../SingleTodo/SingleTodo';

const AllTodo = () => {
  const [todoAll, setTodoAll] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => setTodoAll(res.data))
      .catch((err) => toast.error('Something Went Wrong'));
  }, []);

  return (
    <Container>
      {todoAll.length ? (
        <Row className='g-3'>
          {todoAll.map((todo) => (
            <SingleTodo key={todo.id} todo={todo} />
          ))}
        </Row>
      ) : (
        <div className='d-flex mt-5 pt-5 justify-content-center'>
          <Spinner animation='border' />
        </div>
      )}
    </Container>
  );
};

export default AllTodo;
