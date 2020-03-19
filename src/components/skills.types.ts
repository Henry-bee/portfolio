import { Icon } from './icons/types';


export interface SkillPercent {
    name: string;
    score: number;
  }
  
export interface SkillWithDescription {
    name: string;
    description?: string;
    icon: Icon;
  }