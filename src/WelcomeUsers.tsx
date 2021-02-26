import { Users } from './interfaces/User'
import { GET_USERS } from './queries/user-queries';
import { useQuery } from '@apollo/client';

function WelcomeUsers() {
  const { loading, error, data } = useQuery<Users>(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (data === undefined || data.users.length === 0) return <p>Empty</p>

  return <div>{data.users.map((user) => (
    <div key={user.id}>
      <p>
        Hello, {user.firstName} {user.lastName}!
       </p>
    </div>
  ))}</div>;
}

export default WelcomeUsers;
