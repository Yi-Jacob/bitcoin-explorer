import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {
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
        <Navbar className='navbar-custom d-flex' expand="lg" sticky="top">
          <div className="container-fluid align-content-center">
            <Navbar.Brand href="/" className='orange nav-font font-raleway'>
              <div className="orange ">
                <i className="fa-brands fa-btc" />itcoin Explorer
              </div>
            </Navbar.Brand>
            <NavLink to='/bookmarks' className='nav-bookmark-btn nav-font' onClick={this.handleClick}>
              <i className='fa-solid fa-star orange nav-bookmark-btn'></i>
            </NavLink>
            <a href="https://nakamotoinstitute.org/bitcoin/" className='orange nav-price'>
              <i className="fa-brands fa-bitcoin"></i> = ${(this.state.price)}
            </a>
            <Form className="d-flex" onSubmit={this.handleSubmit}>
                <FormControl
                  type="search"
                  placeholder="Search for Wallet Address"
                  className="me-3 nav-input"
                  onChange={this.handleChange}
                  value={this.state.input}
                />
                <Button className="search-button" type='submit'>Search</Button>
            </Form>
          </div>
        </Navbar>
      </>
    );
  }
}
