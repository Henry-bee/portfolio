import { SvgIconProps } from '@material-ui/core';

export interface Icon{
    (props: SvgIconProps): JSX.Element;
}