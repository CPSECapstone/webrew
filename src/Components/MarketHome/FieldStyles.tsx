import { TextField } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
   text-align: left;
   fontfamily: 'Poppins', sans-serif;
   margin-left: 18px;
`;

export const LargeTextField = styled(TextField)`
   input {
      height: 50px;
      font-size: 20px;
   }
`;
export const SmallTextField = styled(TextField)`
   input {
      height: 30px;
      font-size: 20px;
   }
`;
