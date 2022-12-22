import React from 'react';

import { DiaryFree } from './DiaryFree';
import { GlutenFree } from './GlutenFree';
import { Kosher } from './Kosher';
import { MilkFree } from './MilkFree';
import { Vegan } from './Vegan';
import { Vegetarian } from './Vegetarian';
import { Walking } from './Walking';

export type CustomIconProps = {
  icon:
    | 'DiaryFree'
    | 'GlutenFree'
    | 'Kosher'
    | 'MilkFree'
    | 'Vegan'
    | 'Vegetarian'
    | 'Walking';
};

export const CustomIcon = ({ icon }: CustomIconProps) =>
  (icon === 'DiaryFree' && <DiaryFree />) ||
  (icon === 'GlutenFree' && <GlutenFree />) ||
  (icon === 'Kosher' && <Kosher />) ||
  (icon === 'MilkFree' && <MilkFree />) ||
  (icon === 'Vegan' && <Vegan />) ||
  (icon === 'Vegetarian' && <Vegetarian />) ||
  (icon === 'Walking' && <Walking />) ||
  null;

CustomIcon.displayName = 'CustomIcon';
