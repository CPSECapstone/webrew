import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { ProgressBar, Button } from 'react-bootstrap';
import { GetTaskByIdQuery, Task } from '../../../__generated__/types';
import './TaskProgress.css';

function blockComplete(
   progress: number,
   block: number,
   setProgress: (newProgress: number) => void
) {
   setProgress(progress + block);
}

function handlePageChange(
   page: number,
   changeDir: number,
   setPage: (pageNumber: number) => void,
   maxPage: number,
   setProgress: (progress: number) => void
) {
   setPage(page + changeDir);
   if ((page === 0 && changeDir < 0) || (page === maxPage && changeDir > 0)) {
      console.log(maxPage);
      setPage(page);
   } else {
      console.log('right');
      setPage(page + changeDir);
      setProgress((page + 1) / (maxPage + 1));
   }
}

function TaskProgress({
   taskInformation,
   setPage,
   page,
   maxPage,
}: {
   taskInformation: GetTaskByIdQuery;
   setPage: (pageNumber: number) => void;
   page: number;
   maxPage: number;
}) {
   const [progress, setProgress] = useState((page + 1) / (maxPage + 1));

   return (
      <div className="container-fluid">
         <div className="row py-3">
            <div className="col-12 justifyCenter">
               <h1>{taskInformation.task.name}</h1>
            </div>
         </div>
         <div className="row py-3 m-auto">
            <div className="col-md-3 justifyCenter">
               <Button
                  className="rounded-circle btn-primary"
                  type="submit"
                  onClick={() => handlePageChange(page, -1, setPage, maxPage, setProgress)}
               >
                  <FontAwesomeIcon icon={faCaretLeft} />
               </Button>
            </div>
            <div className="col-md-6 justifyCenter">
               <ProgressBar now={progress} />
            </div>
            <div className="col-md-3 justifyCenter">
               <Button
                  className="rounded-circle btn-primary"
                  type="submit"
                  onClick={() => handlePageChange(page, 1, setPage, maxPage, setProgress)}
               >
                  <FontAwesomeIcon icon={faCaretRight} />
               </Button>
            </div>
         </div>
      </div>
   );
}

export default TaskProgress;
