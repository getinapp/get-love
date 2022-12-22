import React from 'react';

import { Error } from './Error';
import { Success } from './Success';
import { Warning } from './Warning';

export type FeedbackProps = {
  version: 'Success' | 'Error' | 'Warning';
};

export const Feedback = ({ version }: FeedbackProps) =>
  (version === 'Success' && <Success />) ||
  (version === 'Error' && <Error />) ||
  (version === 'Warning' && <Warning />) ||
  null;

Feedback.displayName = 'Feedback';
