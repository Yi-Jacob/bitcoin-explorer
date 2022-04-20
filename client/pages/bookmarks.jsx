import React from 'react';
import queryString from 'query-string';
export default class Bookmarks extends React.Component {
  constructor(props) {
    super(props);
    this.state({
      address: queryString.parse(this.props.location.search).address,
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
        // console.log(data);
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
        <h1>test</h1>
      </>
    );

  }
}
