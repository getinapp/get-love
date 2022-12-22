import React from 'react';

import { CelebratingNeutral } from './CelebratingNeutral';
import { CelebratingPrimary } from './CelebratingPrimary';
import { CelebratingSecondary } from './CelebratingSecondary';
import { GroundSittingNeutral } from './GroundSittingNeutral';
import { GroundSittingPrimary } from './GroundSittingPrimary';
import { GroundSittingSecondary } from './GroundSittingSecondary';
import { TalkingPrimary } from './TalkingPrimary';
import { TalkingSecondary } from './TalkingSecondary';
import { TalkingWhite } from './TalkingWhite';
import { WithDogSittingNeutral } from './WithDogSittingNeutral';
import { WithDogSittingPrimary } from './WithDogSittingPrimary';
import { WithDogSittingSecondary } from './WithDogSittingSecondary';

export type OnThePhoneProps = {
  version:
    | 'GroundSittingPrimary'
    | 'GroundSittingSecondary'
    | 'GroundSittingNeutral'
    | 'WithDogSittingPrimary'
    | 'WithDogSittingSecondary'
    | 'WithDogSittingNeutral'
    | 'TalkingPrimary'
    | 'TalkingSecondary'
    | 'TalkingWhite'
    | 'CelebratingPrimary'
    | 'CelebratingSecondary'
    | 'CelebratingNeutral';
};

export const OnThePhone = ({ version }: OnThePhoneProps) =>
  (version === 'GroundSittingPrimary' && <GroundSittingPrimary />) ||
  (version === 'GroundSittingSecondary' && <GroundSittingSecondary />) ||
  (version === 'GroundSittingNeutral' && <GroundSittingNeutral />) ||
  (version === 'WithDogSittingPrimary' && <WithDogSittingPrimary />) ||
  (version === 'WithDogSittingSecondary' && <WithDogSittingSecondary />) ||
  (version === 'WithDogSittingNeutral' && <WithDogSittingNeutral />) ||
  (version === 'TalkingPrimary' && <TalkingPrimary />) ||
  (version === 'TalkingSecondary' && <TalkingSecondary />) ||
  (version === 'TalkingWhite' && <TalkingWhite />) ||
  (version === 'CelebratingPrimary' && <CelebratingPrimary />) ||
  (version === 'CelebratingSecondary' && <CelebratingSecondary />) ||
  (version === 'CelebratingNeutral' && <CelebratingNeutral />) ||
  null;

OnThePhone.displayName = 'OnThePhone';
