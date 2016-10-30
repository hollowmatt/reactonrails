var Event = React.createClass({
  propTypes: {
    email: React.PropTypes.string,
    password: React.PropTypes.string
  },

  recordValue: function(field) {
    return ReactDOM.findDOMNode(this.refs[field]).value;
  },

  render: function() {
    return(this.renderRecord());
  },

  renderRecord: function() {
    var users = this.props.user;
    return(
      <tr>
        <td>{user.email}</td>
        <td>{user.password}</td>
      </tr>
    );
  }

});