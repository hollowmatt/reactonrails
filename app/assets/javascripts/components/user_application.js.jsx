var UserApplication = React.createClass({
  getInitialState: function() {
    return { users: []};
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
  
  render :function() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>Create Account</h1>
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