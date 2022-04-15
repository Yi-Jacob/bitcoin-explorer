import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      input: '',
      walletData: [],
      transactionData: []
    });
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleSubmit(e) {
    const address = this.state.input;
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
}
