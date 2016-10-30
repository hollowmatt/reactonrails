var NewUser = React.createClass({
  propTypes: {
    email: React.PropTypes.string,
    password: React.PropTypes.string,
    password_confirmation: React.PropTypes.string 
  },
  
  getInitialState: function() {
    return {
      email: '',
      password: '',
      password_confirmation: ''
    }
  },
  
  handleAdd: function(e) {
    e.preventDefault();
    alert('this is a test');
  },
  
  handleChange: function(e) {
    var input_name = e.target.name;
    var value = e.target.value;
    this.setState({[input_name] : value });
  },

  render: function() {
    return(
      <form onSubmit={this.handleAdd}>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input type="text"
                 className="form-control"
                 id="email"
                 placeholder="enter email address"
                 ref="email"
                 value={this.state.email}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password"
                 className="form-control"
                 id="password"
                 placeholder="password"
                 ref="password"
                 value={this.state.password}
                 onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    )
  }
});