import React from 'react';
import Nav from '../components/navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

export default class Home extends React.Component {
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
        <Nav />
        <div className="container my-2 mx-auto margin-auto">
          <div className="row orange font-italic font-bold my-4">
            <div className="col-sm-12">
              <h1 className='text-center font-raleway font-italic font-bold'> <i className="fa-brands fa-btc" />itcoin Exlorer</h1>
            </div>
          </div>
          <div className="row my-3 justify-content-center">
            <div className="col-sm-12">
              <h2 className='text-center font-titillium-web font-italic font-bold'>Your one-stop shop to explore the Bitcoin Blockchain</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <Form onSubmit={this.handleSubmit} className='my-3 px-5 "col-sm-11'>
              <InputGroup className="mb-2" onSubmit={this.handleSubmit}>
                <FormControl
                  placeholder="Search for your Wallet Address"
                  aria-describedby="basic-addon2"
                  value={this.state.input} onChange={this.handleChange} onSubmit={this.handleSubmit}
                  className='orange-border'
                />
                <Button className="search-button" id="button-addon2" value={this.state.input} onChange={this.handleChange} onSubmit={this.handleSubmit} type='submit'>
                  Search
                </Button>
              </InputGroup>
            </Form>
          </div>
          <div className="row my-4 px-2 justify-content-center">
            <div className="col-sm-11">
              <h2 className='text-center font-titillium-web font-italic font-bold'>“I don&apos;t think there&apos;s anything more important in my lifetime to work on (referring to Bitcoin)”  Jack Dorsey CEO and Co-Founder of Twitter &amp; Cashapp</h2>
            </div>
          </div>
        </div>

      </>
    );
  }
}
