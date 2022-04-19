
import React from 'react';
import QRCode from 'react-qr-code';
export default class QrCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      input: ''
    });
  }

  render() {
    return (
        <QRCode value={this.state.input} />
    );
  }

}
