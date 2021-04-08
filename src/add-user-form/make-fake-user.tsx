import {
   Button,
   Dialog,
   DialogTitle,
   DialogContent,
   DialogContentText,
   TextField,
   DialogActions,
   FormControl,
   InputLabel,
   Chip,
   Input,
   MenuItem,
   Select,
} from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Formik } from 'formik';
import { useMutation, useQuery } from '@apollo/client';
import { SAVE_COURSE } from '../queries/course-queries';
import { ADD_USER } from '../queries/user-queries';

function createUser(addUser: any) {
   addUser({
      variables: {
         user: {
            firstName: 'joe',
            lastName: 'smith',
         },
      },
   });
}

export default function MakeUser() {
   const [addUser, { data }] = useMutation(ADD_USER);
   return (
      <div>
         <Button onClick={() => createUser(addUser)}>Here</Button>
      </div>
   );
}
