import '../TaskBlock.css';
import { Maybe } from '../../../__generated__/types';

function TextBlock({
   title,
   contents,
   cssKey,
}: {
   title: string;
   contents: Maybe<string>;
   cssKey: number;
}) {
   return (
      <div className={`${cssKey % 2 === 1 ? 'white ' : 'gray '}row`}>
         <div className="col-md-6 text-center py-5 mx-auto">
            <h3 className="text-left mb-3">{title}</h3>
            <p className="text-left">{contents || 'N/A'}</p>
         </div>
      </div>
   );
}

export default TextBlock;
