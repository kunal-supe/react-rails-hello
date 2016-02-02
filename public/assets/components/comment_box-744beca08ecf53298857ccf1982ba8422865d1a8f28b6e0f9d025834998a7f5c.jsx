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
        A: {this.state.foo}
      </div>
    );
  }
}
