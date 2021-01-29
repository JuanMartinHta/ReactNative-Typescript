/* eslint-disable default-case */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

type TypographyTypes = 'header' | 'title' | 'subtitle' | 'paragraph' | 'caption';

interface Props {
  text: string,
  typography?: TypographyTypes,
  textColor?: TextStyle['color']
}

const CustomText: React.FC<Props> = ({ text, typography, textColor }: Props) => {
  let textStyle = null;
  switch (typography) {
    case 'header': textStyle = typographyStyle.header; break;
    case 'title': textStyle = typographyStyle.title; break;
    case 'subtitle': textStyle = typographyStyle.subtitle; break;
    case 'paragraph': textStyle = typographyStyle.paragraph; break;
    case 'caption': textStyle = typographyStyle.caption; break;
  }

  return (
    <Text style={[textStyle, { color: textColor }]}>{text}</Text>
  );
};

CustomText.defaultProps = {
  typography: 'paragraph',
  textColor: '#333333'
};

const typographyStyle = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: '600'
  },
  title: {
    fontSize: 18,
    fontWeight: '500'
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500'
  },
  paragraph: {
    fontSize: 14,
    fontWeight: '500'
  },
  caption: {
    fontSize: 10,
    fontWeight: '300'
  }
});

export { CustomText };
