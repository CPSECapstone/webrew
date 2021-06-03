import React, { SetStateAction } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useMutation, useQuery } from '@apollo/client';
import { EDIT_OBJECTIVE_GRADE } from '../../../queries/objective-grade';
import { TASK_OBJECTIVE_PROGRESS } from '../../../queries/task-objective-progress';
import {
   Mastery,
   TaskObjectiveProgress,
   useGetTaskObjectiveProgressQuery,
} from '../../../__generated__/types';

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      formControl: {
         margin: theme.spacing(1),
         minWidth: 120,
      },
      selectEmpty: {
         marginTop: theme.spacing(2),
      },
   })
);

export default function MasteryRubricGrading({
   objectiveProgress,
   username
}: {
   objectiveProgress: TaskObjectiveProgress;
   username: string
}) {
   const classes = useStyles();
   const [masteryVal, setMastery] = React.useState(objectiveProgress.mastery);
   const [editObjectiveGrade, { data }] = useMutation(EDIT_OBJECTIVE_GRADE);

   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      //   console.log(event.target.value);
      editObjectiveGrade({
         variables: {
            objectiveGradeInput: {
               student: username,
               taskId: objectiveProgress.task.id,
               objectiveId: objectiveProgress.objective.objectiveId,
               mastery: event.target.value,
            },
         },
      }).catch((error) => console.log(error));
      setMastery(event.target.value as SetStateAction<Mastery>);
   };

   return (
      <FormControl className={classes.formControl}>
         <InputLabel id="demo-simple-select-label">Mastery Grade</InputLabel>
         <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={masteryVal}
            onChange={handleChange}
         >
            {console.log(masteryVal)}
            <MenuItem value="NOT_GRADED">Not Graded</MenuItem>
            <MenuItem value="NOT_MASTERED">Not Mastered</MenuItem>
            <MenuItem value="NEARLY_MASTERED">Nearly Mastered</MenuItem>
            <MenuItem value="MASTERED">Mastered</MenuItem>
         </Select>
      </FormControl>
   );
}
