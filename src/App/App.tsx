import { Auth, Hub } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import Sidebar from '../Components/Sidebar';
import Content from '../Components/Content';
import Navigation from '../Navigation/Navigation';
import './App.scss';

// Entry point of the Flitped App
function App() {
   const [, setUser] = useState(null);

   function storeToken(): void {
      Auth.currentSession()
         .then((userSession) => {
            const accessToken = userSession.getAccessToken();
            const jwt = accessToken.getJwtToken();
            localStorage.setItem('accessToken', JSON.stringify(accessToken));
            localStorage.setItem('jwt', jwt);

            return Auth.currentAuthenticatedUser();
         })
         .then((authUser) => {
            setUser(authUser);
         })
         .catch(() => console.log('Not signed in'));
   }

   useEffect(() => {
      Hub.listen('auth', ({ payload: { event, data } }) => {
         switch (event) {
            case 'signIn':
            case 'cognitoHostedUI':
               storeToken();
               break;
            case 'signOut':
               setUser(null);
               break;
            case 'signIn_failure':
            case 'cognitoHostedUI_failure':
               console.log('Sign in failure', data);
               break;
            default:
               break;
         }
      });

      storeToken();
   }, []);

   return (
      <div className="App">
         <Navigation />
         <div className="main container-fluid">
            <div className="row h-100">
               <div className="sidebar-container col-md-2">
                  <Sidebar />
               </div>
               <div className="content-container col-md-10">
                  <Content />
               </div>
            </div>
         </div>
      </div>
   );
}

export default withAuthenticator(App);
