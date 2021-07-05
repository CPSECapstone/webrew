import { User } from '../../__generated__/types';

type Props = {
   user: User;
};

export function Settings({ user }: Props) {
   return (
      <div>
         <h2>Profile Information</h2>
         <p>User Id: {user.id}</p>
         <p>User Role: {user.role}</p>
         <p>Email: {user.email}</p>
      </div>
   );
}
