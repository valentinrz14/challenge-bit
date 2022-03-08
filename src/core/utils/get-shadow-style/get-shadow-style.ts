import { Colors } from '@core/styles/colors';

/*
 ** Types
 */
interface GetShadowStyleProps {
  shadowOpacity: number;
  shadowRadius?: number;
  elevation: number;
}
/*
 ** Component
 */
export const getShadowStyle = ({
  shadowOpacity,
  shadowRadius = 0,
  elevation,
}: GetShadowStyleProps) => ({
  shadowColor: Colors.black,
  shadowOpacity,
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowRadius,
  elevation,
});
