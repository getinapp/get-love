import { FullColorSmallUseOff } from './FullColorSmallUseOff';
import { FullColorSmallUseOn } from './FullColorSmallUseOn';
import { OutlinedSmallUseOff } from './OutlinedSmallUseOff';
import { OutlinedSmallUseOn } from './OutlinedSmallUseOn';
import { SingleColorSmallUseOff } from './SingleColorSmallUseOff';
import { SingleColorSmallUseOn } from './SingleColorSmallUseOn';

export type StellaCartoucheProps = {
  version: 'FullColor' | 'SingleColor' | 'Outlined';
  smallUse: 'on' | 'off';
};

export const StellaCartouche = ({ version, smallUse }: StellaCartoucheProps) =>
  (version === 'FullColor' && smallUse === 'off' && <FullColorSmallUseOff />) ||
  (version === 'FullColor' && smallUse === 'on' && <FullColorSmallUseOn />) ||
  (version === 'SingleColor' && smallUse === 'off' && (
    <SingleColorSmallUseOff />
  )) ||
  (version === 'SingleColor' && smallUse === 'on' && (
    <SingleColorSmallUseOn />
  )) ||
  (version === 'Outlined' && smallUse === 'off' && <OutlinedSmallUseOff />) ||
  (version === 'Outlined' && smallUse === 'on' && <OutlinedSmallUseOn />) ||
  null;

StellaCartouche.displayName = 'StellaCartouche';
