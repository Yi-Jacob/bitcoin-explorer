import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default function Home(props) {
  return (
    <>
      <Navbar>
        <div className="container">
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}
