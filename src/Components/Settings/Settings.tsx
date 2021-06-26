import { useUserQuery } from '../../__generated__/types';

export function Settings() {
   const { loading, error, data, refetch } = useUserQuery();

   if (loading || error || !data) {
      return <></>;
   }

   const { getUser } = data;

   return (
      <div>
         <h2>Profile Information</h2>
         <p>User Id: {getUser?.id}</p>
         <p>User Role: {getUser?.role}</p>
         <p>
            Name: {getUser?.firstName} {getUser?.lastName}
         </p>
         <p>Email: {getUser?.email}</p>
      </div>
   );
}
