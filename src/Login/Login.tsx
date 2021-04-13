import { Auth, Hub } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { ILoginProps } from '../interfaces/ReactProps';

export default function Login({ authClient }: ILoginProps) {
   const [redirectSignIn, setRedirectSignIn] = useState<any>(false);

   const login = () => {
      authClient.authenticate(() => {
         console.log('Signed in!');
         setRedirectSignIn(true);
      });
   };

   const signout = () => {
      authClient.signout(() => {
         console.log('Signed out!');
         setRedirectSignIn(false);
      });
   };

   console.log(redirectSignIn);
   if (redirectSignIn === true) {
      return <Redirect to="/" />;
   }

   return (
      <div>
         <div>
            {authClient.isAuthenticated ? (
               <button type="submit" onClick={signout}>
                  Sign Out
               </button>
            ) : (
               <button type="submit" onClick={login}>
                  Sign In
               </button>
            )}
         </div>
      </div>
   );
}
