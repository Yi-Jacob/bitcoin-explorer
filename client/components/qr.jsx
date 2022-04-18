import React from 'react';

export default class QrCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      input: ''
    });
  }

  render() {
    return (
      <img src={'https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&amp;address=' + this.state.input} alt="Bitcoin QR Code Generator" height="150" width="150" border="0" />
    );
  }
}
