import { EatingPrimary } from './EatingPrimary';
import { EatingSecondary } from './EatingSecondary';
import { EatingWhite } from './EatingWhite';
import { LovingNeutral } from './LovingNeutral';
import { LovingPrimary } from './LovingPrimary';
import { LovingSecondary } from './LovingSecondary';

export type ExperienceProps = {
  version:
    | 'EatingPrimary'
    | 'EatingSecondary'
    | 'EatingWhite'
    | 'LovingPrimary'
    | 'LovingSecondary'
    | 'LovingNeutral';
};

export const Experience = ({ version }: ExperienceProps) =>
  (version === 'EatingPrimary' && <EatingPrimary />) ||
  (version === 'EatingSecondary' && <EatingSecondary />) ||
  (version === 'EatingWhite' && <EatingWhite />) ||
  (version === 'LovingPrimary' && <LovingPrimary />) ||
  (version === 'LovingSecondary' && <LovingSecondary />) ||
  (version === 'LovingNeutral' && <LovingNeutral />) ||
  null;

Experience.displayName = 'Experience';
