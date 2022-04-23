import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from '../components/navbar';
import moment from 'moment';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      input: '',
      difficulty: {
        difficultyChange: 0,
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
          tx_count: 0,
          timestamp: null
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
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div className="row orange my-4">
            <div className="col-sm-12">
              <h1 className='text-center font-raleway font-italic font-bold'> <i className="fa-brands fa-btc" />itcoin Explorer</h1>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-sm-12">
              <h2 className='text-center font-titillium-web font-bold'><span className='font-italic'>Explore</span> the Bitcoin Blockchain in <span className='font-italic '>Real-Time</span></h2>
            </div>
          </div>
          <div className="row justify-content-center mb-4" >
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
          <div className="row mb-3 justify-content-center">
            <Accordion alwaysOpen>
              <Accordion.Item eventKey="0" className='orange-border'>
                <Accordion.Header>
                  <h2 className='accordion-header'>Difficulty Adjustment</h2>
                 </Accordion.Header>
                <Accordion.Body className='justify-content-center px-2'>
                  <div className="row mx-4">
                    <div className='col-md-4'>
                      <p className='accordion-info-text'>Estimated Difficulty Change:
                      <span> </span>
                       <span className={this.state.difficulty.difficultyChange > 0 ? 'green' : 'red'}>
                         {Number(this.state.difficulty.difficultyChange).toFixed(2)}%
                       </span>
                      </p>
                    </div>
                    <div className='col-md-4'>
                      <p className='accordion-info-text'>Current Period Progress: {Number(this.state.difficulty.progressPercent).toFixed(2)}%</p>
                    </div>
                    <div className='col-md-4'>
                      <p className='accordion-info-text'>Remaining Blocks: {this.state.difficulty.remainingBlocks} <span className='small-text py-3 my-4'>~{Number(this.state.difficulty.remainingBlocks / 144).toFixed(1)} days</span></p>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className='orange-border'>
                <Accordion.Header>
                  <h2 className='accordion-header'>Current Transaction Fees</h2>
                </Accordion.Header>
                <Accordion.Body className='justify-content-center px-auto'>
                  <div className="row mx-4">
                    <div className='sub-info-text col-md-4'>
                      <p className='accordion-info-text'>High Priority: {this.state.fees.fastestFee} sat/vB</p>
                    </div>
                    <div className='sub-info-text col-md-4'>
                      <p className='accordion-info-text'>Medium Priority: {this.state.fees.hourFee} sat/vB</p>
                    </div>
                    <div className='sub-info-text col-md-4'>
                      <p className='accordion-info-text'>Low Priority: {this.state.fees.minimumFee} sat/vB</p>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className='orange-border'>
                <Accordion.Header>
                  <h2 className='accordion-header'>Latest Blocks</h2>
                </Accordion.Header>
                <Accordion.Body>
                  <div className='row mx-1'>
                    {this.state.blocks.slice(0, 3).map((block, i) => {
                      return (
                        <>
                          <div key={i} className='sub-info-text col-md-4'>
                            <h2>Block Height: {this.state.blocks[i].height}</h2>
                            <ul>
                              <li >
                                <p className=''> Number of Transactions: {this.state.blocks[i].tx_count}</p>
                              </li>
                              <li >
                                <p className=''>Timestamp: {(moment.unix(this.state.blocks[i].timestamp).format('MMMM Do YYYY, h:mm:ss a').toString())}</p>
                              </li>
                            </ul>
                          </div>
                        </>
                      );
                    }
                    )}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </>
    );
  }
}
