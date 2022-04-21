import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from '../components/navbar';
import Card from 'react-bootstrap/Card';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      input: '',
      difficulty: {
        difficultyChange: null,
        remainingBlocks: null,
        progressPercent: null
      },
      fees: {
        fastestFee: null,
        hourFee: null,
        minimumFee: null
      },
      blocks: [
        {
          height: null,
          tx_count: null
        }
      ]
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
    fetch('https://mempool.space/api/v1/difficulty-adjustment')
      .then(res => res.json())
      .then(data => {

      });
    fetch('https://mempool.space/api/v1/fees/recommended')
      .then(res => res.json())
      .then(data => {

      });
    fetch('https://mempool.space/api/blocks/')
      .then(res => res.json())
      .then(data => {

      });
  }

  render() {
    return (
      <>
        <Nav history={this.props.history} />
        <div className="container" style={{ maxWidth: '1200px' }}>
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
              <InputGroup className="mb-2" >
                <FormControl
                  placeholder="Search for your Wallet Address"
                  className='orange-border'
                  onChange={this.handleChange}
                  value={this.state.input}
                />
                <Button className="search-button" type='submit'>
                  Search
                </Button>
              </InputGroup>
            </Form>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3">
              <Card className='orange-border padding-zero font-size-20 grey-background mb-3'>
                <Card.Header className='font-titillium-web font-bold address-header'>Difficulty Adjustment</Card.Header>
                <Card.Title className='bookmark-header'></Card.Title>
                <Card.Title className='bookmark-header'></Card.Title>
              </Card>
            </div>
            <div className="col-md-3">
              <Card className='orange-border padding-zero font-size-20 grey-background mb-3'>
                <Card.Header className='font-titillium-web font-bold address-header'>Current Fees</Card.Header>
                <Card.Title className='bookmark-header'></Card.Title>
                <Card.Title className='bookmark-header'></Card.Title>
              </Card>
            </div>
            <div className="col-md-3">
              <Card className='orange-border padding-zero font-size-20 grey-background mb-3'>
                <Card.Header className='font-titillium-web font-bold address-header'>Latest Blocks</Card.Header>
                <Card.Title className='bookmark-header'></Card.Title>
                <Card.Title className='bookmark-header'></Card.Title>
              </Card>
            </div>
          </div>
          <div className="row my-4 px-2 justify-content-center">
            <div className="col-sm-10">
              <h2 className='text-center font-titillium-web font-italic font-bold'>“I don&apos;t think there&apos;s anything more important in my lifetime to work on (referring to Bitcoin)” Jack Dorsey CEO and Co-Founder of Twitter &amp; Cashapp</h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}
