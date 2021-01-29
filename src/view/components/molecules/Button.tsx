/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Touchable, Text } from '../atoms';

interface Props {
  text: string,
  onPress: () => void
}

const Button: React.FC<Props> = ({ text, onPress }: Props) => (
  <Touchable onPress={onPress}>
    <Text text={text} textColor="white" />
  </Touchable>
);

export { Button };
