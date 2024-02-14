import React from 'react';
import { Block } from '../Block';
import { Typography } from '../Typography';
import { ColorBox, BrandColorBox } from './bin/ColorBox';
import { PaletteRow } from './bin/PaletteRow';
import { Scroll } from '../Scroll';

const { Text } = Typography;

const Palette = () => (
  <Scroll direction="y" height="96vh">
    <Block p="20px 0px">
      <Text>Primary</Text>
      <PaletteRow>
        <BrandColorBox color="primary" />
        <ColorBox color="primary" shade={0} />
        <ColorBox color="primary" shade={1} />
        <ColorBox color="primary" shade={2} />
        <ColorBox color="primary" shade={3} />
        <ColorBox color="primary" shade={4} />
      </PaletteRow>
      <Text>Accent</Text>
      <PaletteRow>
        <BrandColorBox color="accent" />
        <ColorBox color="accent" shade={0} />
        <ColorBox color="accent" shade={1} />
        <ColorBox color="accent" shade={2} />
        <ColorBox color="accent" shade={3} />
        <ColorBox color="accent" shade={4} />
      </PaletteRow>
      <Text>Success</Text>
      <PaletteRow>
        <ColorBox color="success" />
        <ColorBox color="success" shade={0} />
        <ColorBox color="success" shade={1} />
        <ColorBox color="success" shade={2} />
      </PaletteRow>
      <Text>Warning</Text>
      <PaletteRow>
        <ColorBox color="warning" />
        <ColorBox color="warning" shade={0} />
        <ColorBox color="warning" shade={1} />
        <ColorBox color="warning" shade={2} />
      </PaletteRow>
      <Text>Danger</Text>
      <PaletteRow>
        <ColorBox color="danger" />
        <ColorBox color="danger" shade={0} />
        <ColorBox color="danger" shade={1} />
        <ColorBox color="danger" shade={2} />
      </PaletteRow>
      <Text>Common</Text>
      <PaletteRow>
        <ColorBox color="background" border="#EDEDED" />
        <ColorBox color="foreground" />
        <ColorBox color="grey" />
        <ColorBox color="lightgrey" />
      </PaletteRow>
      <Text>Neutral</Text>
      <PaletteRow>
        <ColorBox color="neutral" shade={0} />
        <ColorBox color="neutral" shade={1} />
        <ColorBox color="neutral" shade={2} />
        <ColorBox color="neutral" shade={3} />
        <ColorBox color="neutral" shade={4} />
        <ColorBox color="neutral" shade={5} />
      </PaletteRow>
      <Text>Visualizations</Text>
      <PaletteRow>
        <ColorBox color="visualization" shade={0} />
        <ColorBox color="visualization" shade={1} />
        <ColorBox color="visualization" shade={2} />
        <ColorBox color="visualization" shade={3} />
        <ColorBox color="visualization" shade={4} />
        <ColorBox color="visualization" shade={5} />
      </PaletteRow>
    </Block>
  </Scroll>
);

export default Palette;
