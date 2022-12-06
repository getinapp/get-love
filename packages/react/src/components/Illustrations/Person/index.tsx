import { BlueShirt } from './BlueShirt';
import { RedDress } from './RedDress';
import { RedShirt } from './RedShirt';
import { WhiteDress } from './WhiteDress';
import { YellowShirt } from './YellowShirt';

export type PersonProps = {
  version: 'RedShirt' | 'RedDress' | 'WhiteDress' | 'BlueShirt' | 'YellowShirt';
};

export const Person = ({ version }: PersonProps) =>
  (version === 'RedShirt' && <RedShirt />) ||
  (version === 'RedDress' && <RedDress />) ||
  (version === 'WhiteDress' && <WhiteDress />) ||
  (version === 'BlueShirt' && <BlueShirt />) ||
  (version === 'YellowShirt' && <YellowShirt />) ||
  null;

Person.displayName = 'Person';
