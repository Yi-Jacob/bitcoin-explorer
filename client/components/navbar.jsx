import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';

export default function Nav(props) {
  return (
    <>

      <style type="text/css">
        {`

    .btn-outline-primary {
      background-color: #f6781e;
      color: black;
      border: #f6781e;
    }
    `}
      </style>
      <Navbar className='bg-dark black navbar-dark'>
        <div className="container">
          <Navbar.Brand href="#home" className='orange font-italic font-bold'>
            <div className="orange raleway">
              <i className="fa-brands fa-btc orange" />itcoin Exlorer
            </div>
          </Navbar.Brand>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search for Wallet"
              className="me-3"
              aria-label="Search"
            />
            {/* <Button variant="outline-primary">Search</Button> */}
            <button className='search-button'>Search</button>
          </Form>
        </div>
      </Navbar>
    </>
  );
}
