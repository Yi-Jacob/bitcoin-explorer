import React from 'react';
import Nav from '../components/navbar';
import Table from 'react-bootstrap/Table';
import moment from 'moment';

export default class Mining extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      difficulty: {
        difficultyChange: 0,
        remainingBlocks: null,
        progressPercent: null
      },
      blocks: [
        {
          height: null,
          tx_count: 0,
          timestamp: null
        }
      ]
    });
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
    fetch('https://mempool.space/api/blocks/')
      .then(res => res.json())
      .then(data => {
        this.setState({ blocks: data });
      });
  }

  render() {
    return (
      <div className="black-background">
        <Nav history={this.props.history} />
        <div className="row mx-4 my-4">
          <div className="col-md-12">
            <Table className='orange-border'>
              <tbody>
                <tr>
                  <td colSpan={4} className='font-bold'>Estimated Difficulty Adjustment</td>
                </tr>
                <tr>
                  <td>Estimate change:</td>
                  <td><span className={this.state.difficulty.difficultyChange > 0 ? 'green' : 'red'}>
                    {Number(this.state.difficulty.difficultyChange).toFixed(2)}%
                  </span></td>
                </tr>
                <tr>
                  <td>Current Period Progress:</td>
                  <td>{Number(this.state.difficulty.progressPercent).toFixed(2)}%</td>
                </tr>
                <tr>
                  <td>Remaining Blocks</td>
                  <td>{this.state.difficulty.remainingBlocks} <span className='small-text py-3 my-4'>~{Number(this.state.difficulty.remainingBlocks / 144).toFixed(1)} days</span></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="row mx-4 my-4 justify-content-center">
          <div className="col-md-12">
            <Table className='orange-border '>
              <tbody>
                <tr>
                  <td colSpan={4} className='font-bold'>Latest Blocks</td>
                </tr>
                <tr className='font-bold'>
                  <td>Block Height</td>
                  <td>Number of Transactions</td>
                  <td>TimeStamp</td>
                </tr>
                {this.state.blocks.map((block, i) => {
                  return (
                    <>
                      <tr key={i}>
                        <td>{this.state.blocks[i].height}</td>
                        <td>{this.state.blocks[i].tx_count}</td>
                        <td>{(moment.unix(this.state.blocks[i].timestamp).format('MMMM Do YYYY, h:mm:ss a').toString())}</td>
                      </tr>
                    </>
                  );
                }
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
