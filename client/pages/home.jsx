import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
// import Nav from '../components/navbar';

export default function Home(props) {
  return (
    <>
    {/* <Nav /> */}
    <div className="container">
        <div className="row orange font-italic font-bold">
          <h1> <i className="fa-brands fa-btc" />itcoin Exlorer</h1>
        </div>
        <div className="row">
          <h2>
            Your one-stop shop to explore the Bitcoin Blockchain
          </h2>
        </div>
        <div className="row">
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search for Wallet"
              className="me-3"
              aria-label="Search"
            />
              <Button variant="primary">
                <i className='fas fas-search search icon'></i>
              </Button>
          </Form>
        </div>
    </div>

    </>
  );
}
