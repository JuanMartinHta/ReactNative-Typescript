/* eslint-disable default-case */
/* eslint-disable import/prefer-default-export */
import React, { ReactNode } from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

type TouchableTypes = 'button' | 'card';

interface Props {
  onPress: () => void,
  children: ReactNode,
  type?: TouchableTypes,
  style?: ViewStyle
}

const Touchable: React.FC<Props> = ({
  onPress, children, type, style
}: Props) => {
  const { btnStyle, cardStyle } = touchableStyle;

  let touchStyle = null;
  switch (type) {
    case 'button': touchStyle = btnStyle; break;
    case 'card': touchStyle = cardStyle; break;
  }

  return (
    <TouchableOpacity style={[touchStyle, style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

Touchable.defaultProps = {
  type: 'button',
  style: {}
};

const touchableStyle = StyleSheet.create({
  btnStyle: {
    borderRadius: 4,
    backgroundColor: 'blue',
    padding: 16,
    alignItems: 'center'
  },
  cardStyle: {
    borderRadius: 4,
    elevation: 2,
    minHeight: 40
  }
});

export { Touchable };
