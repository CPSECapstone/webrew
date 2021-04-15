import Amplify, { Auth } from 'aws-amplify';

export default {
   isAuthenticated: false,
   token: null,
   authenticate(cb: () => void): void {
      Auth.federatedSignIn()
         .then((cred) => {
            // If success, you will get the AWS credentials
            console.log('CRED:');
            console.log(cred);
            this.isAuthenticated = true;
            setTimeout(cb, 1000);
            return Auth.currentSession();
         })
         .then((user) => {
            // If success, the user object you passed in Auth.federatedSignIn
            console.log('TOKEN:');
            console.log(user);
         })
         .catch((e) => {
            console.log(`Error: ${e}`);
         });
   },
   signout(cb: () => void): void {
      Auth.signOut()
         .then(() => {
            this.isAuthenticated = false;
            setTimeout(cb, 1000);
         })
         .catch((e) => {
            console.log(`Error: ${e}`);
         });
   },
};
