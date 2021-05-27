/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import YouTube from 'react-youtube';
import getVideoId from 'get-video-id';
import '../TaskBlock.css';

function onReady(event: any) {
   // access to player in all event handlers via event.target
   event.target.pauseVideo();
}

function VideoBlock({
   title,
   contents,
   cssKey,
}: {
   title: string;
   contents: string;
   cssKey: number;
}) {
   const { id } = getVideoId(contents); // extract video id from yt url
   return (
      <div className={`${cssKey % 2 === 1 ? 'white ' : 'gray '}row`}>
         <div className="col-md-6 text-center py-5 mx-auto">
            <h3 className="text-left mb-3">{title}</h3>
            <div className="container">
               <YouTube videoId={id as never} onReady={onReady} />
            </div>
         </div>
      </div>
   );
}

export default VideoBlock;
