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
        <div className="container-fluid">
          <div className="row orange font-italic font-bold">
            <h1 className='text-center'> <i className="fa-brands fa-btc" />itcoin Exlorer</h1>
          </div>
          <div className="row">
            <h2 className='text-center'>Your one-stop shop to explore the Bitcoin Blockchain</h2>
          </div>
          <div className="row">
            <Form onSubmit={this.handleSubmit}>
              <InputGroup className="mb-3" onSubmit={this.handleSubmit}>
                <FormControl
                  placeholder="Search for your wallet address"
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
          <div className="row">
            <h2 className='text-center'>“I don&apos;t think there&apos;s anything more important in my lifetime to work on (referring to Bitcoin)”  Jack Dorsey CEO and Co-Founder of Twitter &amp; Cashapp</h2>
          </div>
        </div>

      </>
    );
  }
}
