import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='py-2 mt-5 text-center bg-light'>
      <Container>
        <small>
          {' '}
          CopyRight &copy; 2020 - {new Date().getFullYear()}. All Right Reserved
        </small>
      </Container>
    </footer>
  );
};

export default Footer;
