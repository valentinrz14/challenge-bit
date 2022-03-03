import React, { FunctionComponent } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ChallengeBitIconProps {
  iconProps: {
    name: string;
    size: number;
    color: string;
  };
}
export const ChallengeBitIcon: FunctionComponent<ChallengeBitIconProps> = ({
  iconProps: { name, size, color },
}) => {
  return <Icon name={name} size={size} color={color} />;
};
