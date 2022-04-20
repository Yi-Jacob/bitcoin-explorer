import React from 'react';
import Nav from '../components/navbar';

export default class Bookmarks extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      bookmarkData: {
        chain_stats: {
          tx_count: 0,
          funded_txo_sum: 0,
          spent_txo_sum: 0
        }
      }
    });
  }

  componentDidMount() {
    fetch('/api/bookmarks')
      .then(res => res.json())
      .then(data => {
        this.setState({ bookmarkData: data });
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
        <Nav history={this.props.history} onSubmit={this.handleSubmit} onChange={this.handleChange} value={this.state.input} />
        <h1>Please show</h1>
      </>
    );

  }
}
