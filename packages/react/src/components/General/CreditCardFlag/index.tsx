import React from 'react';

import { AmericanExpress } from './AmericanExpress';
import { Mastercard } from './Mastercard';
import { Visa } from './Visa';

export type CreditCardFlagProps = {
  flag: 'AmericanExpress' | 'Visa' | 'Mastercard';
};

export const CreditCardFlag = ({ flag }: CreditCardFlagProps) =>
  (flag === 'AmericanExpress' && <AmericanExpress />) ||
  (flag === 'Visa' && <Visa />) ||
  (flag === 'Mastercard' && <Mastercard />) ||
  null;

CreditCardFlag.displayName = 'CreditCardFlag';
