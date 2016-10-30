var UserApplication = React.createClass({
  getInitialState: function() {
    return { events: [],
             sort: "name",
             order: "asc" };
  },

  componentDidMount: function() {
    this.getDataFromApi();
  },

  getDataFromApi: function() {
    var self = this;
    $.ajax({
      url: '/api/users',
      success: function(data) {
        self.setState({ users: data});
      },
      error: function(xhr, status, error) {
        alert('Cannot get data from API: ', error);
      }
    });
  },
  
  handleAdd: function(user) {
    var users = this.state.users;
    users.push(user);
    this.setState({users: users});
  },

  render :function() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>Create Account</h1>
        </div>
        <div className="row">
          <div className="col-md-12">
            <NewUser handleAdd={this.handleAdd}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <UserTable users={this.state.users} />
          </div>
        </div>
      </div>
    )
  }
});