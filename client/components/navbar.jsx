import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      input: '',
      data1: [],
      data2: []
    });
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const address = this.state.input;
    fetch(`https://mempool.space/api/address/${address}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ data1: data });
      });
    fetch(`https://mempool.space/api/address/${address}/txs`)
      .then(res => res.json())
      .then(data => {
        this.setState({ data2: data });
      });
  }

  render() {
    return (
      <>
        <Navbar className='navbar-custom d-flex' expand="lg" sticky="top">
          <div className="container-fluid">
            <Navbar.Brand href="#home" className='orange nav-font'>
              <div className="orange font-raleway">
                <i className="fa-brands fa-btc orange" />itcoin Exlorer
              </div>
            </Navbar.Brand>

            <Form className="d-flex" onSubmit={this.handleSubmit}>
                <FormControl
                  type="search"
                  placeholder="Search for Wallet Address"
                  className="me-3 nav-input"
                  onChange={this.handleChange}
                  value={this.state.input}
                />
                <Button className="search-button" onChange={this.handleChange} type='submit'>Search</Button>
            </Form>

          </div>
        </Navbar>
      </>
    );
  }
}

export default Nav;
