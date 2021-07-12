import React from 'react';

export default class RenderText extends React.Component {
  state = {
    text: '',
  };

  componentWillMount = async () => {
    const response = await fetch(this.props.url);
    const text = response.text;

    this.setState({ text });
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <div>______________</div>
        <p>{text}</p>
        <div>______________</div>
      </div>
    );
  }
}
