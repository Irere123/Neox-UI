import React from 'react';
import { FileCopy } from '@material-ui/icons';

export default class RenderText extends React.Component {
  state = {
    text: '',
  };

  componentWillMount = async () => {
    const response = await fetch(this.props.url);
    const text = await response.text();
    this.setState({ text });
  };

  render() {
    const { text } = this.state;
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '30px 200px' }}>
        <FileCopy />
        <p>{text}</p>
      </div>
    );
  }
}
