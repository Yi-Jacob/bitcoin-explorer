import React from 'react';
import queryString from 'query-string';
import Nav from '../components/navbar';

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      address: queryString.parse(this.props.location.search).address,
      walletData: [],
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
      </>
    );
  }
}
