class CommentBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar'
    };
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({foo: 'foo'})
    }, 2000);
  }

  render () {
    return (
      <div className="commentBox">
        Change the text: {this.state.foo}
      </div>
    );
  }
}
