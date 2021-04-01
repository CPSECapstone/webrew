type Environment = {
   uri: string;
};

let uri: string = process.env.REACT_APP_URI as string;

if (process.env.NODE_ENV === 'production') {
   uri = process.env.REACT_APP_URI as string;
}

// eslint-disable-next-line import/prefer-default-export
export const environment: Environment = {
   uri,
};
