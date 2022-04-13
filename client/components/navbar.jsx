import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      input: '',
      data: []
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

        // console.log(data);
      });
    fetch(`https://mempool.space/api/address/${address}/txs`)
      .then(res => res.json())
      .then(data => {

        // console.log(data);
      });
  }

  render() {
    return (
      <>

        <Navbar className='navbar-custom'>
          <div className="container">
            <Navbar.Brand href="#home" className='orange nav-font'>
              <div className="orange raleway">
                <i className="fa-brands fa-btc orange" />itcoin Exlorer
              </div>
            </Navbar.Brand>
            <Form className="d-flex" onSubmit={this.handleSubmit}>
              <FormControl
                type="search"
                placeholder="Search for Wallet"
                className="me-3"
                aria-label="Search"
                value={this.state.input} onChange={this.handleChange}
              />
              <Button className="search-button" value={this.state.input} onChange={this.handleChange} type='submit'>Search</Button>
            </Form>
          </div>
        </Navbar>
      </>
    );
  }
}

export default Nav;
