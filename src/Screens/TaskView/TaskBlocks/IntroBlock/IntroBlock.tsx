function IntroBlock({ taskName, instructions }: { taskName: string; instructions: string }) {
   return (
      <div className="row">
         <div className="col-12">
            <h1>{taskName}</h1>
            <p>{instructions}</p>
         </div>
      </div>
   );
}

export default IntroBlock;
