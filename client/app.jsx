import React from 'react';
import Home from './pages/home';

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     users: [],
  //     isLoading: true
  //   };
  // }

  // componentDidMount() {
  //   const address = this.state.input;
  //   fetch('https://mempool.space/api/address' + address)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ users: data, isLoading: false });
  //       console.log(data);
  //     });
  // }

  constructor(props) {
    super(props);
    this.state = ({
      input: '',
      data: []
    });
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const address = this.state.input;
    fetch('https://mempool.space/api/address/' + address)
      .then(res => res.json())
      .then(data => {
        this.setState({ input: this.state.input, isLoading: false });
        // console.log(data);
      });
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    // console.log(this.state.input);
    event.preventDefault();
  }

  render() {
    return <Home />;
  }
}
