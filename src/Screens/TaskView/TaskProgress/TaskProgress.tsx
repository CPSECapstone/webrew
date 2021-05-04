import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { ProgressBar, Button } from 'react-bootstrap';
import { Task } from '../../../__generated__/types';
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
   maxPage: number
) {
   if ((page === 0 && changeDir < 0) || (page === maxPage && changeDir > 0)) {
      setPage(page);
   } else {
      setPage(page + changeDir);
   }
}

function TaskProgress({
   taskInformation,
   setPage,
   page,
   maxPage,
}: {
   taskInformation: Task;
   setPage: (pageNumber: number) => void;
   page: number;
   maxPage: number;
}) {
   const [progress, setProgress] = useState(0);

   return (
      <div className="container-fluid">
         <div className="row py-3 m-auto">
            <div className="col-12">
               <h1>{taskInformation.name}</h1>
            </div>
         </div>
         <div className="row py-3 m-auto">
            <Button>
               <FontAwesomeIcon icon={faCaretLeft} className="col-2 btn-primary mx-auto" />
            </Button>
            <ProgressBar now={progress} className="col-7" />
            <Button>
               <FontAwesomeIcon icon={faCaretRight} className="col-2 btn-primary mx-auto" />
            </Button>
         </div>
      </div>
   );
}

export default TaskProgress;
