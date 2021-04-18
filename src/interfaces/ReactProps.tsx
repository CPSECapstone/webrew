import { ReactNode } from 'react';

export interface IPrivateRouteProps {
   children: ReactNode;
   path: string;
   authClient: IAuthClient;
}

export interface ILoginProps {
   authClient: IAuthClient;
}

export interface IAuthClient {
   isAuthenticated: boolean;
   authenticate: (cb: () => void) => void;
   signout: (cb: () => void) => void;
}
