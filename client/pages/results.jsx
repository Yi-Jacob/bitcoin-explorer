import React from 'react';
import queryString from 'query-string';
import Nav from '../components/navbar';
import Card from 'react-bootstrap/Card';

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      address: queryString.parse(this.props.location.search).address,
      walletData: {
        chain_stats: {
          tx_count: 0,
          funded_txo_sum: 0,
          spent_txo_sum: 0
        }
      },
      transactionData: []
    });
  }

  componentDidMount() {
    fetch(`https://mempool.space/api/address/${this.state.address}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.setState({ walletData: data });
      });
    fetch(`https://mempool.space/api/address/${this.state.address}/txs`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.setState({ transactionData: data });
      });
  }

  render() {
    return (
      <>
        <Nav history={this.props.history} />
        <Card>
          <Card.Header>Address: {this.state.walletData.address}</Card.Header>
          <Card.Title>Title {this.state.walletData.chain_stats.tx_count}</Card.Title>
        </Card>
      </>
    );
  }
}
