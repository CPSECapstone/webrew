type Environment = {
   uri: string;
   redirectSignIn: string;
   redirectSignout: string;
};

export const environment: Environment = {
   uri: process.env.REACT_APP_URI as string,
   redirectSignIn: process.env.REACT_APP_REDIRECT_SINGIN as string,
   redirectSignout: process.env.REACT_APP_REDIRECT_SINGOUT as string,
};
