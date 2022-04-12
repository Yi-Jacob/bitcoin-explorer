import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default function Home(props) {
  return (
    <>
      <Navbar className='bg-dark black navbar-dark'>
        <div className="container">
          <Navbar.Brand href="#home" className='orange'>
            <div className="orange">
              <i className="fa-brands fa-btc orange" />itcoin Exlorer
            </div>
          </Navbar.Brand>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search for Wallet Address</Button>
          </Form>
        </div>
      </Navbar>
    </>
  );
}
