import '../TaskBlock.css';

function ImageBlock({ title, contents }: { title: string; contents: string }) {
   return (
      <div className="row">
         <div className="col-md-12 my-2 p-3">
            <h2 className="text-left">
               <b>{title || 'N/A'}</b>
            </h2>
            {contents ? (
               <div className="container" id="img-container">
                  <img src={contents} alt={contents} className="img-fluid" />
               </div>
            ) : (
               'N/A'
            )}
         </div>
      </div>
   );
}

export default ImageBlock;
