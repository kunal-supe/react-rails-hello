class Message extends React.Component {
  render() {
    return (
      <div>
        <div>Text from React: {this.props.text}</div>
      </div>
    );
  }
}

Message.propTypes = {
  text: React.PropTypes.string
};
