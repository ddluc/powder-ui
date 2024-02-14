// Main Component Export
import { Body } from './bin/Body';
import { Text } from './bin/Text';
import { H1, H2, H3, H4, H5, H6 } from './bin/Heading';
import { Link } from './bin/Link';
import { ListItem, OrderedList, UnorderedList } from './bin/List';
import { Mono } from './bin/Mono';
import { TextSkeleton } from './bin/TextSkeleton';

/**
 * Export Text Components
 */

type TypographyComponents = {
  Body: typeof Body;
  Link: typeof Link;
  H1: typeof H1;
  H2: typeof H2;
  H3: typeof H3;
  H4: typeof H4;
  H5: typeof H5;
  H6: typeof H6;
  Mono: typeof Mono;
  Text: typeof Text;
  Skeleton: typeof TextSkeleton;
  List: {
    Ordered: typeof OrderedList;
    Unordered: typeof UnorderedList;
    Item: typeof ListItem;
  };
};

export const Typography: TypographyComponents = {
  Body,
  Link,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Mono,
  Text,
  List: {
    Ordered: OrderedList,
    Unordered: UnorderedList,
    Item: ListItem
  },
  Skeleton: TextSkeleton
};

// Export prop types
export type { TextProperties as TextProps } from './types';
