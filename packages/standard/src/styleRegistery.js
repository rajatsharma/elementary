import { RegistryManager } from './utils';
import spaceStyleGroupFrame from './space';
import borderStylePropFrame from './border';

const registry = {
  color: {
    styles: [['color'], ['bg', 'backgroundColor']],
  },
  borderRadius: {
    styles: [['borderRadius']],
  },
  space: {
    styles: spaceStyleGroupFrame,
  },
  border: {
    styles: borderStylePropFrame,
  },
  boxShadow: {
    styles: [['boxShadow']],
  },
  flexContainer: {
    styles: [
      ['direction', 'flexDirection'],
      ['flexWrap'],
      ['flexFlow'],
      ['justifyContent'],
      ['alignItems'],
      ['alignContent'],
    ],
  },
  flexBox: {
    styles: [
      ['order'],
      ['flexGrow'],
      ['flexShrink'],
      ['flexBasis'],
      ['flex'],
      ['alignSelf'],
    ],
  },
  text: {
    styles: [
      ['f', 'fontSize'],
      ['fontWeight'],
      ['letterSpacing'],
      ['lineHeight'],
      ['textAlign'],
      ['tt', 'textTransform'],
      ['textDecoration'],
    ],
  },
  dimensions: {
    styles: [
      ['w', 'width'],
      ['h', 'height'],
      ['mw', 'maxWidth'],
      ['mh', 'maxHeight'],
    ],
  },
  position: {
    styles: [
      ['t', 'top'],
      ['r', 'right'],
      ['b', 'bottom'],
      ['l', 'left'],
      ['z', 'zIndex'],
    ],
  },
  states: {
    pseudoStyles: [['active'], ['hover'], ['focus'], ['visited']],
  },
  transition: {
    styles: [['transition']],
  },
  transform: {
    styles: [['transform']],
  },
  gridItem: {
    styles: [
      ['gridColumnStart'],
      ['gridColumnEnd'],
      ['gridRowStart'],
      ['gridRowEnd'],
      ['gridColumn'],
      ['gridRow'],
      ['gridArea'],
      ['justifySelf'],
      ['alignSelf'],
      ['placeSelf'],
    ],
  },
  gridContainer: {
    styles: [
      ['gridTemplate'],
      ['gridTemplateRows'],
      ['gridTemplateColumns'],
      ['gridTemplateAreas'],
      ['gridTemplate'],
      ['gridColumnGap'],
      ['gridRowGap'],
      ['gridGap'],
      ['justifyItems'],
      ['alignItems'],
      ['placeItems'],
      ['justifyContent'],
      ['alignContent'],
      ['placeContent'],
    ],
  },
};

export default RegistryManager(registry);
