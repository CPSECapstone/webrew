import '../TaskBlock.css';

function ImageBlock({
   title,
   contents,
   cssKey,
}: {
   title: string;
   contents: string;
   cssKey: number;
}) {
   return (
      <div className={`${cssKey % 2 === 1 ? 'white ' : 'gray '}row`}>
         <div className="col-md-6 text-center py-5 mx-auto">
            <h3 className="text-left mb-3">{title}</h3>
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
