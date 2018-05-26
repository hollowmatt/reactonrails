class UserTable extends React.Component {
  
  render() {
    var users = [];
    this.props.users.forEach(function(user) {
      users.push(<User user={user} key={'user' +user.id}/>);
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
}