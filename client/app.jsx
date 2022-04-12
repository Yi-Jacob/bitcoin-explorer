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

  render() {
    return <Home />;
  }
}
