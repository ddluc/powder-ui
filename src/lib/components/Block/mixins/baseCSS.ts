import { BaseCSSProperties } from '../../../types';
import { css } from 'styled-components';

export default css<BaseCSSProperties>`
  display: ${({ display = 'block' }) => display};
  height: ${({ height = 'auto' }) => height};
  width: ${({ width = 'auto' }) => width};
  ${({ position = 'relative' }) => position && `position: ${position}`};
  ${({ left }) => left && `left: ${left}`};
  ${({ right }) => right && `right: ${right}`};
  ${({ top }) => top && `top: ${top}`};
  ${({ bottom }) => bottom && `bottom: ${bottom}`};
  ${({ m }) => m && `margin: ${m}`};
  ${({ p }) => p && `padding: ${p}`};
  ${({ margin }) => margin && `margin: ${margin[0]} ${margin[1]} ${margin[2]} ${margin[3]}`};
  ${({ padding }) => padding && `padding: ${padding[0]} ${padding[1]} ${padding[2]} ${padding[3]}`};
  ${({ opacity }) => opacity && `opacity: ${opacity}`};
  ${({ border }) => border && `border: ${border}`};
  ${({ background }) => background && background.color && `background-color: ${background.color}`};
  ${({ background }) =>
    background && background.position && `background-position: ${background.position}`};
  ${({ background }) => background && background.image && `background-image: ${background.image}`};
  ${({ background }) =>
    background && background.repeat && `background-repeat: ${background.repeat}`};
  ${({ background }) =>
    background && background.attachment && `background-attachment: ${background.attachment}`};
  ${({ background }) => background && background.size && `background-size: ${background.size}`};
  ${({ background }) =>
    background && background.origin && `background-origin: ${background.origin}`};
  ${({ background }) => background && background.clip && `background-clip: ${background.clip}`};
  ${({ outline }) => outline && `outline: ${outline}`};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
  ${({ overflow }) => overflow && `overflow: ${overflow}`};
  ${({ zIndex }) => zIndex && `z-index: ${zIndex}`};
  ${({ float }) => float && `float: ${float}`};
  ${({ flex }) => flex && `flex: ${flex}`};
  ${({ grow }) => grow !== undefined && `flex-grow: ${grow}`};
  ${({ shrink }) => shrink !== undefined && `flex-shrink: ${shrink}`};
  ${({ basis }) => basis !== undefined && `flex-basis: ${basis}`};
  ${({ order }) => order !== undefined && `order: ${order}`};
  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf}`};
`;
