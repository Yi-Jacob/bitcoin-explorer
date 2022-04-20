import React from 'react';
import Nav from '../components/navbar';
import Card from 'react-bootstrap/Card';
export default class Bookmarks extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      bookmarkData: [{
        bookmarkId: 0,
        walletAddress: '',
        data: {
          chain_stats: {
            tx_count: '',
            funded_txo_sum: 0,
            spent_txo_sum: 0
          }
        }

      }
      ]
    }
    );
  }

  componentDidMount() {
    fetch('/api/bookmarks')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
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
        <div className="container-fluid" style={{ maxWidth: '1200px' }}>
          <div className="row pt-3 margin-right-10 margin-left-1">
            <div className='col-sm-9 col-md-11'>
              <p className='address-header font-titillium-web'>
                <i className="fa-brands fa-btc" />ookmarks
              </p>
            </div>
          </div>
          <div className="row mb-2 margin-right-10 margin-left-1">
              {this.state.bookmarkData.map((bookmarkData, i) => {
                return (
                  <Card key={i} className='orange-border padding-zero font-size-20 grey-background mb-3'>
                    <Card.Header key={i} className='font-titillium-web font-bold address-header'>Bookmarked Address: {this.state.bookmarkData[i].walletAddress}</Card.Header>
                    <ul>
                      <li>
                        <Card.Title className='bookmark-header'>Total Number of Transactions: {this.state.bookmarkData[i].data.chain_stats.tx_count}</Card.Title>
                      </li>
                      <li>
                        <Card.Title className='bookmark-header'>Total Balance: {(this.state.bookmarkData[i].data.chain_stats.funded_txo_sum - this.state.bookmarkData[i].data.chain_stats.spent_txo_sum) / 100000000} BTC</Card.Title>
                      </li>
                    </ul>
                  </Card>
                );
              })}

            {this.state.bookmarkData.map((bookmarkData, i) => {
              return (
                <Card key={i} className='orange-border font-titillium-web my-2'>
                  <Card.Header key={i} className='font-titillium-web font-bold'>Bookmarked Address: {this.state.bookmarkData[i].walletAddress}</Card.Header>
                  <ul>
                    <li>
                      <Card.Title className=''>Total Number of Transactions: {this.state.bookmarkData[i].data.chain_stats.tx_count}</Card.Title>
                    </li>
                    <li>
                      <Card.Title className=''>Total Balance: {(this.state.bookmarkData[i].data.chain_stats.funded_txo_sum - this.state.bookmarkData[i].data.chain_stats.spent_txo_sum) / 100000000} BTC</Card.Title>
                    </li>
                  </ul>
                </Card>
              );
            })}
          </div>

        </div>
      </>
    );

  }
}
