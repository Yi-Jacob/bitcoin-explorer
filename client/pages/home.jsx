import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
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
          tx_count: 0
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
        this.setState({ difficulty: data });
      });
    fetch('https://mempool.space/api/v1/fees/recommended')
      .then(res => res.json())
      .then(data => {
        this.setState({ fees: data });
      });
    fetch('https://mempool.space/api/blocks/')
      .then(res => res.json())
      .then(data => {
        this.setState({ blocks: data });
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
            <Form onSubmit={this.handleSubmit} className='my-3 px-2 "col-sm-11'>
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
          <div className="row justify-content-between">
            <Accordion defaultActiveKey={['0']} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Card className='orange-border padding-zero grey-background mb-3 '>
              <Card.Header className='font-titillium-web font-bold home-info-text  justify-content-between'>Difficulty Adjustment</Card.Header>
              <div className="row">
                <Card.Title className='sub-info-text col-md-4'>Estimated Difficulty Change: {Number(this.state.difficulty.difficultyChange).toFixed(2)}%</Card.Title>
                <Card.Title className='sub-info-text col-md-4'>Current Period Progress: {Number(this.state.difficulty.progressPercent).toFixed(2)}%</Card.Title>
                <Card.Title className='sub-info-text col-md-4'>Remaining Blocks: {this.state.difficulty.remainingBlocks}</Card.Title>
              </div>
            </Card>

            <div className="col-md-4" style={{ minWidth: '355' }}>
              <Card className='orange-border padding-zero grey-background mb-3'>
                <Card.Header className='font-titillium-web font-bold address-header'>Current Fees</Card.Header>
                <Card.Title className='sub-info-text'>High Priority: {this.state.fees.fastestFee} sat/vB</Card.Title>
                <Card.Title className='sub-info-text'>Medium Priority: {this.state.fees.hourFee} sat/vB</Card.Title>
                <Card.Title className='sub-info-text'>Low Priority: {this.state.fees.minimumFee} sat/vB</Card.Title>
              </Card>
            </div>
            <div className="col-md-4" style={{ minWidth: '355' }}>
              <Card className='orange-border padding-zero grey-background mb-3'>
                <Card.Header className='font-titillium-web font-bold address-header'>Latest Blocks</Card.Header>
                <ul>
                  {this.state.blocks.slice(0, 3).map((block, i) => {
                    return (
                      <div key={i}>
                        <li key={i}>
                          <Card.Title className='sub-info-text'>Block Height: {this.state.blocks[i].height}</Card.Title>
                          <ul>
                            <li>
                              <Card.Title className='sub-info-text'>Number of Transactions: {this.state.blocks[i].tx_count}</Card.Title>
                            </li>
                          </ul>
                        </li>
                      </div>
                    );
                  }
                  )}
                </ul>
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
