import { Auth } from 'aws-amplify';
import { useEffect } from 'react';

export function RedirectLogin() {
   useEffect(() => {
      // eslint-disable-next-line no-void
      void Auth.federatedSignIn();

      // do stuff here...
   }, []); // <-- empty dependency array
   return <div />;
}
