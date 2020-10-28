import * as React from 'react';

import { Text, TextProps } from './Themed';

export default function MonoText({ lightColor, darkColor, style }: TextProps) {
  return (
    <Text
      lightColor={lightColor}
      darkColor={darkColor}
      style={[style, { fontFamily: 'space-mono' }]}
    />
  );
}
