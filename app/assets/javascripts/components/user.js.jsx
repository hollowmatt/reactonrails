var User = React.createClass({
  propTypes: {
    email: React.PropTypes.string,
    password_digest: React.PropTypes.string, 
    created_at: React.PropTypes.string,
    updated_at: React.PropTypes.string
  },

  getInitialState: function() {
    return { users: [] }
  },

  recordValue: function(field) {
    return ReactDOM.findDOMNode(this.refs[field]).value;
  },

  render: function() {
    return(this.renderRecord());
  },

  renderRecord: function() {
    var user = this.props.user;
    return(
      <tr>
        <td>{user.email}</td>
        <td>{user.password_digest}</td>
        <td>{user.created_at}</td>
        <td>{user.updated_at}</td>
      </tr>
    );
  }

});