import '../TaskBlock.css';
import { Maybe } from '../../../__generated__/types';

function TextBlock({ title, contents }: { title: string; contents: Maybe<string> }) {
   return (
      <div className="row">
         <div className="col-md-12 justifyCenter my-2 p-3">
            <h2 className="text-left">
               <b>{title}</b>
            </h2>
            <p className="text-left">{contents || 'N/A'}</p>
         </div>
      </div>
   );
}

export default TextBlock;
