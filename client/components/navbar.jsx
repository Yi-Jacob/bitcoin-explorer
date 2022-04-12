import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';

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

    //       <Navbar bg="light" expand="lg">
    //   <div className="container fluid">
    //     <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //       <Nav
    //         className="me-auto my-2 my-lg-0"
    //         style={{ maxHeight: '100px' }}
    //         navbarScroll
    //       >
    //         <Nav.Link href="#action1">Home</Nav.Link>
    //         <Nav.Link href="#action2">Link</Nav.Link>
    //         <Nav.Link href="#" disabled>
    //           Link
    //         </Nav.Link>
    //       </Nav>
    //       <Form className="d-flex">
    //         <FormControl
    //           type="search"
    //           placeholder="Search"
    //           className="me-2"
    //           aria-label="Search"
    //         />
    //         <Button variant="outline-success">Search</Button>
    //       </Form>
    //     </Navbar.Collapse>
    //   </div>
    // </Navbar>

    <form onSubmit={this.handleSubmit}>
      <label>
        Email:
        <input type="text" value={this.state.input} onChange={this.handleChange} />
      </label>
      <button type="submit">Sign Up</button>
    </form>
    );
  }
}

export default Nav;

// export default class Nav extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = ({ input: '' });

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   render() {
//     return (
//       <>

//         <style type="text/css">
//           {`
//     .btn-outline {
//       background-color: black;
//       color: #f6781e;
//     }

//     .nav-dark {
//       background-color: black;
//       color: black;
//     }
//     `}
//         </style>
//         <Navbar className='bg-dark navbar-dark navbar-custom' variant="navbar-dark navbar-custom">
//           <div className="container">
//             <Navbar.Brand href="#home" className='orange font-italic font-bold'>
//               <div className="orange raleway">
//                 <i className="fa-brands fa-btc orange" />itcoin Exlorer
//               </div>
//             </Navbar.Brand>
//             <Form className="d-flex">
//               <FormControl
//                 type="search"
//                 placeholder="Search for Wallet"
//                 className="me-3"
//                 aria-label="Search"
//               />
//               <Button variant="outline">Search</Button>
//             </Form>
//           </div>
//         </Navbar>
//       </>
//     );
//   }

// }
