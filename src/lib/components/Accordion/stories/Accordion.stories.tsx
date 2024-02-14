/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion, AccordionProps } from '../index';
import { Flex } from '../../Flex';
import { Typography } from '../../Typography';

export default {
  title: 'Core/Accordion',
  component: Accordion,
  args: {
    title: 'This is an accordion',
    height: 200
  } as AccordionProps
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args: AccordionProps) => (
  <Accordion {...args}>
    <Typography.Body size="12px" lineHeight="18px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis odio accumsan, convallis
      libero in, efficitur erat. Duis porta neque et faucibus eleifend. Maecenas tristique pretium
      tempus. Phasellus quis sapien ex. Pellentesque nisl augue, accumsan id orci eu, dictum maximus
      ante. Pellentesque egestas ligula dictum dolor luctus, at facilisis elit mattis. Nam dictum
      justo a ligula pharetra, ac mollis magna sagittis. Proin erat lacus, placerat at diam sed,
      viverra cursus mi.
    </Typography.Body>
  </Accordion>
);

const GroupTemplate: ComponentStory<typeof Accordion> = () => {
  const [active, setActive] = React.useState<string | null>(null);

  const onClick = (id: string) => {
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }
  };

  const isOpen = (id: string) => id === active;

  return (
    <Flex column gap="10px">
      <Accordion id="1" title="Accordion 1" onClick={onClick} controlled open={isOpen('1')}>
        <Typography.Body size="12px" lineHeight="18px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis odio accumsan,
          convallis libero in, efficitur erat. Duis porta neque et faucibus eleifend. Maecenas
          tristique pretium tempus. Phasellus quis sapien ex. Pellentesque nisl augue, accumsan id
          orci eu, dictum maximus ante. Pellentesque egestas ligula dictum dolor luctus, at
          facilisis elit mattis. Nam dictum justo a ligula pharetra, ac mollis magna sagittis. Proin
          erat lacus, placerat at diam sed, viverra cursus mi.
        </Typography.Body>
      </Accordion>
      <Accordion id="2" title="Accordion 2" onClick={onClick} controlled open={isOpen('2')}>
        <Typography.Body size="12px" lineHeight="18px">
          Lxorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis odio accumsan,
          convallis libero in, efficitur erat. Duis porta neque et faucibus eleifend. Maecenas
          tristique pretium tempus. Phasellus quis sapien ex. Pellentesque nisl augue, accumsan id
          orci eu, dictum maximus ante. Pellentesque egestas ligula dictum dolor luctus, at
          facilisis elit mattis. Nam dictum justo a ligula pharetra, ac mollis magna sagittis. Proin
          erat lacus, placerat at diam sed, viverra cursus mi.
        </Typography.Body>
      </Accordion>
      <Accordion id="3" title="Accordion 3" onClick={onClick} controlled open={isOpen('3')}>
        <Typography.Body size="12px" lineHeight="18px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis odio accumsan,
          convallis libero in, efficitur erat. Duis porta neque et faucibus eleifend. Maecenas
          tristique pretium tempus. Phasellus quis sapien ex. Pellentesque nisl augue, accumsan id
          orci eu, dictum maximus ante. Pellentesque egestas ligula dictum dolor luctus, at
          facilisis elit mattis. Nam dictum justo a ligula pharetra, ac mollis magna sagittis. Proin
          erat lacus, placerat at diam sed, viverra cursus mi. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla quis odio accumsan, convallis libero in, efficitur
          erat. Duis porta neque et faucibus eleifend. Maecenas tristique pretium tempus. Phasellus
          quis sapien ex. Pellentesque nisl augue, accumsan id orci eu, dictum maximus ante.
          Pellentesque egestas ligula dictum dolor luctus, at facilisis elit mattis. Nam dictum
          justo a ligula pharetra, ac mollis magna sagittis. Proin erat lacus, placerat at diam sed,
          viverra cursus mi.
        </Typography.Body>
      </Accordion>
    </Flex>
  );
};

export const asDefault = Template.bind({});

export const asGroup = GroupTemplate.bind({});
asGroup.argTypes = {
  title: { table: { disable: true } },
  forceOpen: { table: { disable: true } },
  elevation: { table: { disable: true } }
};
