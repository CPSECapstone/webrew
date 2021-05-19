/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import YouTube from 'react-youtube';
import getVideoId from 'get-video-id';
import '../TaskBlock.css';

function onReady(event: any) {
   // access to player in all event handlers via event.target
   event.target.pauseVideo();
}

function VideoBlock({ title, contents }: { title: string; contents: string }) {
   const { id } = getVideoId(contents); // extract video id from yt url
   return (
      <div className="row">
         <div className="col-md-12 justifyCenter my-2 p-3">
            <h2 className="text-left">
               <b>{title}</b>
            </h2>
            <div className="container">
               <YouTube videoId={id as never} onReady={onReady} />
            </div>
         </div>
      </div>
   );
}

export default VideoBlock;
