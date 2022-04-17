import React from 'react';
import queryString from 'query-string';
import Nav from '../components/navbar';
import Card from 'react-bootstrap/Card';

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      address: queryString.parse(this.props.location.search).address,
      input: '',
      walletData: {
        chain_stats: {
          tx_count: 0,
          funded_txo_sum: 0,
          spent_txo_sum: 0
        }
      },
      transactionData: [
        {
          txid: '',
          status: {
            block_height: 0
          }
        },
        {
          txid: '',
          status: {
            block_height: 0
          }
        },
        {
          txid: '',
          status: {
            block_height: 0
          }
        }
      ]
    });
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      this.setState({ address: queryString.parse(location.search).address });
      this.fetchData(queryString.parse(location.search).address);
    });
    this.fetchData(this.state.address);
  }

  componentWillUnmount() {
    this.unlisten();
  }

  fetchData(address) {
    fetch(`https://mempool.space/api/address/${address}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ walletData: data });
      });
    fetch(`https://mempool.space/api/address/${address}/txs`)
      .then(res => res.json())
      .then(data => {
        this.setState({ transactionData: data });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push('/search-results?address=' + this.state.input);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <>
        <Nav history={this.props.history} onSubmit={this.handleSubmit} onChange={this.handleChange} value={this.state.input}/>
        <div className="container-fluid">
          <div className="row my-4">
            <div className='col-sm-10'>
              <p className='address-header font-titillium-web font-underline'>Search Address: {this.state.walletData.address}</p>
            </div>
          </div>
          <div className="row my-4 mx-auto px-0 justify-content-center">
            <Card className='orange-border font-titillium-web px-4 py-4 grey-background font-size-32'>
              <Card.Title>Total Balance: {(this.state.walletData.chain_stats.funded_txo_sum - this.state.walletData.chain_stats.spent_txo_sum) / 100000000} BTC</Card.Title>
              <Card.Title>Total Number of Transactions: {this.state.walletData.chain_stats.tx_count}</Card.Title>
            </Card>
          </div>
          <div className="row my-4 mx-auto px-0 justify-content-center grey-background">
            <Card className='orange-border padding-zero grey-background font-size-20'>
              <Card.Header className='mx-0 font-titillium-web font-bold'>Last 3 Transactions</Card.Header>
              <ul className='px-4 py-2'>
                <li>
                  <Card.Title>Transaction ID: {this.state.transactionData[0].txid}</Card.Title>
                  <ul>
                    <li>
                      <Card.Title>Block Height: {this.state.transactionData[0].status.block_height}</Card.Title>
                    </li>
                  </ul>
                </li>
                <li>
                  <Card.Title>Transaction ID: {this.state.transactionData[1].txid}</Card.Title>
                  <ul>
                    <li>
                      <Card.Title>Block Height: {this.state.transactionData[1].status.block_height}</Card.Title>
                    </li>
                  </ul>
                </li>
                <li>
                  <Card.Title>Transaction ID: {this.state.transactionData[2].txid}</Card.Title>
                  <ul>
                    <li>
                      <Card.Title>Block Height: {this.state.transactionData[2].status.block_height}</Card.Title>
                    </li>
                  </ul>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </>
    );
  }
}
