class UserApplication extends React.Component {
  getInitialState() {
    return { users: []};
  }

  componentDidMount() {
    this.getDataFromApi();
  }

  getDataFromApi() {
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
  }
  
  render () {
    return(
      <div className="container">
        <div className="megatron">
          <h1>Accounts</h1>
        </div>
        <div className="row">
          <div className="col-md-12">
            <UserTable users={this.state.users} />
          </div>
        </div>
      </div>
    )
  }
}