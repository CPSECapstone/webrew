import '../TaskBlock.css';

function IntroBlock({ instructions, cssKey }: { instructions: string; cssKey: number }) {
   return (
      <div className="white row">
         <div className="col-md-6 text-center py-5 mx-auto">
            <h3 className="text-left mb-3">Introduction</h3>
            <p className="text-left">{instructions || 'No instructions given.'}</p>
         </div>
      </div>
   );
}

export default IntroBlock;
