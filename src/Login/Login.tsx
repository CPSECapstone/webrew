import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { ILoginProps } from '../interfaces/ReactProps';

export default function Login({ authClient }: ILoginProps) {
   const [redirectSignIn, setRedirectSignIn] = useState<any>(false);

   const login = () => {
      authClient.authenticate(() => {
         setRedirectSignIn(true);
      });
   };

   const signout = () => {
      authClient.signout(() => {
         setRedirectSignIn(false);
      });
   };

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
