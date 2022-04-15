import React from 'react';
import Nav from '../components/navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import parseRoute from '../lib/parse-route';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      route: parseRoute(window.location.hash)
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
    window.addEventListener('hashchange', () => {
      const parsedRoute = parseRoute(address);
      this.setState({ route: parsedRoute });
    });
  }

  render() {
    return (
      <>
        <Nav />
        <div className="container">
          <div className="row orange my-4">
            <div className="col-sm-12">
              <h1 className='text-center font-raleway font-italic font-bold'> <i className="fa-brands fa-btc" />itcoin Exlorer</h1>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-sm-12">
              <h2 className='text-center font-titillium-web font-italic font-bold'>Your one-stop shop to explore the Bitcoin Blockchain</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <Form onSubmit={this.handleSubmit} className='my-3 px-5 "col-sm-11'>
              <InputGroup className="mb-2" onSubmit={this.handleSubmit}>
                <FormControl
                  placeholder="Search for your Wallet Address"
                  onChange={this.handleChange} onSubmit={this.handleSubmit}
                  className='orange-border'
                />
                <Button className="search-button" onChange={this.handleChange} onSubmit={this.handleSubmit} type='submit'>
                  Search
                </Button>
              </InputGroup>
            </Form>
          </div>
          <div className="row my-4 px-2 justify-content-center">
            <div className="col-sm-10">
              <h2 className='text-center font-titillium-web font-italic font-bold'>“I don&apos;t think there&apos;s anything more important in my lifetime to work on (referring to Bitcoin)” -Jack Dorsey CEO and Co-Founder of Twitter &amp; Cashapp</h2>
            </div>
          </div>
        </div>

      </>
    );
  }
}
