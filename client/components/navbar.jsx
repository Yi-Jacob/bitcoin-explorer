import React from 'react';
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default class Navbar1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      input: '',
      price: null
    });
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push('/search-results?address=' + this.state.input);
    this.setState({
      input: ''
    });
  }

  componentDidMount() {
    fetch('https://bitpay.com/api/rates')
      .then(res => res.json())
      .then(data => {
        this.setState({ price: (data[2].rate).toLocaleString() });
      });
  }

  render() {
    return (
      <>
        <Navbar className='navbar-custom d-flex' expand="md" sticky="top">
          <div className="container-fluid align-content-center">
            <Navbar.Brand href="/" className='orange nav-font nav-brand navlink'>
              <div className="orange font-raleway">
                <i className="fa-brands fa-btc" />itcoin Explorer
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0 align-items-center">
                <NavLink to='/transactions' className='nav-font orange mx-2 navlink'>
                  Transactions
                </NavLink>
                <NavLink to='/mining' className='nav-font orange mx-2 navlink'>
                  Mining
                </NavLink>
                <NavLink to='/bookmarks' className='nav-font orange mx-2 navlink'>
                  Bookmarks
                </NavLink>
                <a href='https://nakamotoinstitute.org/bitcoin/' className='orange mx-2 navlink'>
                 <i className="fa-brands fa-bitcoin"></i> = ${(this.state.price)}
                </a>
              </Nav>
              <Form className="d-flex" onSubmit={this.handleSubmit}>
                <FormControl
                  type="search"
                  placeholder="Search for Wallet Address"
                  className="me-3 nav-input orange-border"
                  onChange={this.handleChange}
                  value={this.state.input}
                />
                <Button className="search-button" type='submit'>Search</Button>
              </Form>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}
