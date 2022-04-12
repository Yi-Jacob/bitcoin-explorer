import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
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
    // console.log(this.state.input);
    event.preventDefault();
  }

  render() {
    return (
      <>

        <style type="text/css">
          {`
    .btn-outline {
      background-color: black;
      color: #f6781e;
    }

    .nav-dark {
      background-color: black;
      color: black;
    }
    `}
        </style>
        <Navbar className='bg-dark navbar-dark navbar-custom' variant="navbar-dark navbar-custom">
          <div className="container">
            <Navbar.Brand href="#home" className='orange font-italic font-bold'>
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
              <Button variant="outline" value={this.state.input} onChange={this.handleChange}>Search</Button>
            </Form>
          </div>
        </Navbar>
      </>
    );
  }
}
// return (
// <Navbar bg="dark">
//   <Container fluid>
//     <Navbar.Brand href="#" className='orange'>
//         <i className="fa-brands fa-btc orange" /><h2 className='orange'>itcoin Exlorer</h2>
//     </Navbar.Brand>
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Email:
//           <input type="text" value={this.state.input} onChange={this.handleChange} />
//         </label>
//         <button type="submit">Sign Up</button>
//       </form>
//   </Container>
// </Navbar>
// );

export default Nav;

// export default class Nav extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = ({ input: '' });

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
