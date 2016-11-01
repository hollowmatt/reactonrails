var UserTable = React.createClass({
  
  render: function() {
    var users = [];
    this.props.users.forEach(function(user) {
      users.push(<User user={user}/>);
    }.bind(this));
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-3">
              eMail
            </th>
            <th className="col-md-3">
              Password
            </th>
            <th className="col-md-3">
              Created Date
            </th>
            <th className="col-md-3">
              Updated Date
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