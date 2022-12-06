import { FemaleBlackHair } from './FemaleBlackHair';
import { FemaleBlondeHair } from './FemaleBlondeHair';
import { FemaleBlueShirt } from './FemaleBlueShirt';
import { FemaleRedHair } from './FemaleRedHair';
import { FemaleYellowShirt } from './FemaleYellowShirt';
import { MaleBlackHair } from './MaleBlackHair';
import { MaleBlackShirt } from './MaleBlackShirt';
import { MaleBlueHat } from './MaleBlueHat';
import { MaleBlueShirt } from './MaleBlueShirt';
import { MaleWhiteGlasses } from './MaleWhiteGlasses';

export type SocialAvatarProps = {
  version:
    | 'FemaleBlondeHair'
    | 'FemaleBlueShirt'
    | 'MaleBlackHair'
    | 'FemaleYellowShirt'
    | 'FemaleBlackHair'
    | 'MaleWhiteGlasses'
    | 'MaleBlueHat'
    | 'FemaleRedHair'
    | 'MaleBlackShirt'
    | 'MaleBlueShirt';
};

export const SocialAvatar = ({ version }: SocialAvatarProps) =>
  (version === 'FemaleBlondeHair' && <FemaleBlondeHair />) ||
  (version === 'FemaleBlueShirt' && <FemaleBlueShirt />) ||
  (version === 'MaleBlackHair' && <MaleBlackHair />) ||
  (version === 'FemaleYellowShirt' && <FemaleYellowShirt />) ||
  (version === 'FemaleBlackHair' && <FemaleBlackHair />) ||
  (version === 'MaleWhiteGlasses' && <MaleWhiteGlasses />) ||
  (version === 'MaleBlueHat' && <MaleBlueHat />) ||
  (version === 'FemaleRedHair' && <FemaleRedHair />) ||
  (version === 'MaleBlackShirt' && <MaleBlackShirt />) ||
  (version === 'MaleBlueShirt' && <MaleBlueShirt />) ||
  null;

SocialAvatar.displayName = 'SocialAvatar';
