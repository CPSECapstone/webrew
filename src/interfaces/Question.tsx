import { Option } from './Option';

export interface Question {
   id: string;
   description: string;
   options: Option[];
}
