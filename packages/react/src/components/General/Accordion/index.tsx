import type { ComponentProps } from 'react';

import { Text } from '../../Typography/Text';
import { AccordionContent } from './AccordionContent';
import { AccordionTrigger } from './AccordionTrigger';
import * as S from './styles';

export interface AccordionItem {
  disabled?: boolean;
  label: string;
  texts: string[];
}

export type AccordionProps = ComponentProps<typeof S.Wrapper> & {
  fullWidth?: boolean;
  items: AccordionItem[];
};

export const Accordion = ({
  fullWidth = false,
  items,
  ...props
}: AccordionProps) => {
  return (
    <S.Wrapper {...props} fullWidth={fullWidth}>
      {items.map(item => (
        <S.Item key={item.label} value={item.label} disabled={!!item.disabled}>
          <AccordionTrigger>
            <Text as='h2' style='base-paragraph-default'>
              {item.label}
            </Text>
          </AccordionTrigger>
          <AccordionContent>
            {item.texts.map(text => (
              <Text key={text} style='base-paragraph-default'>
                {text}
              </Text>
            ))}
          </AccordionContent>
        </S.Item>
      ))}
    </S.Wrapper>
  );
};

Accordion.displayName = 'Accordion';
