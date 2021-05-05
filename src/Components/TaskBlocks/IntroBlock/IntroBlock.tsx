import '../TaskBlock.css';

function IntroBlock({ instructions }: { instructions: string }) {
   return (
      <div className="row">
         <div className="col-md-12 my-2 p-3">
            <h2 className="text-left">
               <b>Introduction</b>
            </h2>
            <p className="text-left">{instructions || 'No instructions given.'}</p>
         </div>
      </div>
   );
}

export default IntroBlock;
