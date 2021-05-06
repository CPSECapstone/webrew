import YouTube from 'react-youtube';
import '../TaskBlock.css';

const opts = {
   height: '390',
   width: '640',
   playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
   },
};
function onReady(event: any) {
   // access to player in all event handlers via event.target
   // eslint-disable-next-line
   event.target.pauseVideo();
}

function VideoBlock({ title, contents }: { title: string; contents: string }) {
   return (
      <div className="row">
         <div className="col-md-12 justifyCenter my-2 p-3">
            <h2 className="text-left">
               <b>{title}</b>
            </h2>
            <div className="container">
               <YouTube videoId={contents} onReady={onReady} />
            </div>
         </div>
      </div>
   );
}

export default VideoBlock;
