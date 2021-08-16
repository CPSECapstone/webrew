type Environment = {
   uri: string;
   url: string;
   redirectSignIn: string;
   redirectSignout: string;
};

export const environment: Environment = {
   uri: process.env.REACT_APP_URI as string,
   url: process.env.REACT_APP_URL as string,
   redirectSignIn: process.env.REACT_APP_REDIRECT_SIGNIN as string,
   redirectSignout: process.env.REACT_APP_REDIRECT_SIGNOUT as string,
};
