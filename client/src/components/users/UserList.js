import { Link } from 'react-router-dom';

const UserList = ({ users }) => (
  <>
    <h1>Users</h1>
    <h2>{ users.length <= 0 ? "No Users" : "" }</h2> 
    { users.map( u => 
      <Link to={`/users/${u.id}`}>{u.first_name} {u.last_name}</Link>
    )}
  </>
)


export default UserList;