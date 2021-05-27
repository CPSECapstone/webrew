import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { ProgressBar, Button } from 'react-bootstrap';
import { GetTaskByIdQuery } from '../../../__generated__/types';
import './TaskProgress.css';

function handlePageChange(
   page: number,
   changeDir: number,
   setPage: (pageNumber: number) => void,
   maxPage: number,
   setProgress: (progress: number) => void
) {
   setPage(page + changeDir);
   if ((page === 0 && changeDir < 0) || (page === maxPage && changeDir > 0)) {
      setPage(page);
   } else {
      setPage(page + changeDir);
      setProgress(((page + changeDir) / (maxPage + 1)) * 100);
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
      <div id="box" className="container-fluid">
         <div className="row py-3">
            <div className="col-12 text-center">
               <h4 className="primary-color">{taskInformation.task.name.toUpperCase()}</h4>
            </div>
         </div>
         <div className="row py-3 m-auto">
            <div className="col-md-3 text-center">
               <Button
                  className="rounded-circle btn-primary"
                  type="submit"
                  onClick={() => handlePageChange(page, -1, setPage, maxPage, setProgress)}
               >
                  <FontAwesomeIcon icon={faCaretLeft} />
               </Button>
            </div>
            <div className="col-md-6 text-center">
               <ProgressBar now={progress} />
            </div>
            <div className="col-md-3 text-center">
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
