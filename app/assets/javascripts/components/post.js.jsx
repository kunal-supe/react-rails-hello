var Post = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    body: React.PropTypes.string,
    published: React.PropTypes.bool,
    publishedBy: React.PropTypes.string
  },

  render: function() {
    return (
      <div>
        <div><b>Title: </b> {this.props.title}</div>
        <div><b>Body: </b> {this.props.body}</div>
        <div><b>Published:</b> {this.props.published}</div>
        <div><b>Published By: </b> {this.props.published_by}</div>
      </div>
    );
  }
});
