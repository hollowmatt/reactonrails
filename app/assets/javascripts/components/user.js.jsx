class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password_digest: "", 
      created_at: "",
      updated_at: ""
    };  
  }

  getInitialState() {
    return { users: [] }
  }

  recordValue(field) {
    return ReactDOM.findDOMNode(this.refs[field]).value;
  }

  render() {
    return(this.renderRecord());
  }

  renderRecord() {
    var user = this.props.user;
    return(
      <tr>
        <td>{user.email}</td>
        <td>**********</td>
        <td>{user.created_at}</td>
        <td>{user.updated_at}</td>
      </tr>
    );
  }

}