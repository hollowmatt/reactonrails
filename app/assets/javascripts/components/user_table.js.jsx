var UserTable = React.createClass({
  
  render: function() {
    var users = [];
    this.props.users.forEach(function(user) {
      users.push(<User user={user}
                         key={'user' + user.id} />);
    }.bind(this));
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-4">
              eMail
            </th>
            <th className="col-md-6">
              Password
            </th>
          </tr>
        </thead>
        <tbody>
          {users}
        </tbody>
      </table>
    )
  }
});