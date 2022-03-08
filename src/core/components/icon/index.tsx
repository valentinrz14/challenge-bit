import React, { FunctionComponent } from 'react';
import * as icons from './icons';

/*
 ** Types
 */
export type IconsEnum = keyof typeof icons;

interface ChallengeBitIconProps {
  iconProps: {
    name: IconsEnum;
    size: number;
    color: string;
    colorTwo?: string;
  };
}

/*
 ** Component
 */

export const ChallengeBitIcon: FunctionComponent<ChallengeBitIconProps> = ({
  iconProps: { name, size, color, colorTwo },
}) => {
  const IconComponent = icons[name];

  return (
    <IconComponent
      name={name}
      width={size}
      height={size}
      fill={color}
      stroke={colorTwo}
    />
  );
};
