class CommentBox extends React.Component {
  render() {
    return (
      <div>
        <div>sdf : {this.props.text}</div>
      </div>
    );
  }
}

CommentBox.propTypes = {
  text: React.PropTypes.string
};
