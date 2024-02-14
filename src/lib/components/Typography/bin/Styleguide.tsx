import React from 'react';
import { Block } from '../../Block';
import { Divider } from '../../Divider';
import { Body } from './Body';
import { H1, H2, H3, H4, H5, H6 } from './Heading';
import { Link } from './Link';
import { OrderedList, UnorderedList, ListItem } from './List';

export const Styleguide = (): JSX.Element => (
  <Block>
    <H4>Typography</H4>
    <Divider />
    <H1>Heading One</H1>
    <H2>Heading Two</H2>
    <H3>Heading Three</H3>
    <H4>Heading Four</H4>
    <H5>Heading Five</H5>
    <H6>Heading Six</H6>
    <Divider />
    <H4>Body Copy</H4>
    <Body>This is some body text</Body>
    <Body>
      Morbi pellentesque nibh velit, sed tempor tortor pharetra accumsan. Duis sodales molestie
      felis sed tempor. Mauris at posuere massa, eget tincidunt enim. Nam turpis ligula, lacinia et
      ante non, tincidunt euismod nisl. Sed porta est a est vehicula tincidunt. Vivamus nulla neque,
      gravida ut nibh quis, maximus ornare tortor. Nam ut eros nec nibh imperdiet accumsan sed ut
      turpis. Phasellus faucibus justo eros, et bibendum risus lobortis eget. Etiam ac lacus odio.
      Mauris a nibh ut <Link href="#">neque congue dictum</Link> id in felis. Sed quis congue nisl,
      a lacinia velit. Praesent at odio pharetra, vehicula dolor a, tempus felis. In dignissim vitae
      elit sed fringilla. Fusce a massa nec dolor imperdiet feugiat ac eu lectus. Maecenas pharetra
      dui eget tortor aliquam scelerisque.
    </Body>
    <H4>Link</H4>
    <Block margin={['10px', '0px', '10px', '0px']}>
      <Link href="#" target="_blank">
        A Link
      </Link>
    </Block>
    <Block margin={['10px', '0px', '10px', '0px']}>
      <Link active href="#" target="_blank">
        An Active Link
      </Link>
    </Block>
    <Block margin={['10px', '0px', '10px', '0px']}>
      <Link visited href="#" target="_blank">
        A Visited Link
      </Link>
    </Block>
    <H4>Ordered List</H4>
    <OrderedList>
      <ListItem>List Item 1</ListItem>
      <ListItem>List Item 2</ListItem>
      <ListItem>List Item 3</ListItem>
      <ListItem>List Item 4</ListItem>
    </OrderedList>
    <H4>Unordered List</H4>
    <UnorderedList>
      <ListItem>List Item 1</ListItem>
      <ListItem>List Item 2</ListItem>
      <ListItem>List Item 3</ListItem>
      <ListItem>List Item 4</ListItem>
    </UnorderedList>
  </Block>
);
