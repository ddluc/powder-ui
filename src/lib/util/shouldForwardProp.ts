// Excludes invalid dom attributes from rendering to the dom
export const shouldForwardProp = (prop) =>
  ![
    'display',
    'position',
    'left',
    'right',
    'top',
    'bottom',
    'm',
    'p',
    'opacity',
    'outline',
    'textAlign',
    'overflow',
    'zIndex',
    'float',
    'flex',
    'shrink',
    'basis',
    'order',
    'alignSelf',
    'colors',
    'textSize',
    'condensed',
    'focused',
    'skeleton',
    'alignment',
    'colors',
    'gap',
    'error',
    'touched',
    'help',
    'hideLabel',
    'animated',
    'focused',
    'state',
    'transition',
    'align',
    'column',
    'justifyContent',
    'boxSizing',
    'alignItems',
    'isFocused',
    'error',
    'grow',
    'reverse',
    'alignContent',
    'center',
    'row',
    'lineHeight',
    'maxHeight',
    'isClickable',
    'hasText',
    'fluid',
    'iconPosition',
    'iconSize',
    'dashed',
    'columnGap',
    'rowGap',
    'debug',
    'border',
    'show',
    'thumbSize',
    'isActive',
    'visited',
    'active',
    'sortable',
    'isActiveSort',
    'sortDirection',
    'alternate',
    'gridlines',
    'gridColor',
    'spacing',
    'scrollbar',
    'isOn',
    'yOffset',
    'indent',
    'scroll',
    'fixed'
  ].includes(prop);
