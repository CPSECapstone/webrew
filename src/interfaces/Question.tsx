import { Option } from './Option';

export interface Question {
   id: string;
   description: string;
   feedback: string;
   options: Option[];
}
