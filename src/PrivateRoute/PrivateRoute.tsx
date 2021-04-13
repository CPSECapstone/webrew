import { Redirect, Route } from 'react-router-dom';
import { IPrivateRouteProps } from '../interfaces/ReactProps';

export default function PrivateRoute({ children, authClient, ...rest }: IPrivateRouteProps) {
   return (
      <Route
         {...rest}
         render={() => {
            return authClient.isAuthenticated ? children : <Redirect to="/login" />;
         }}
      />
   );
}
